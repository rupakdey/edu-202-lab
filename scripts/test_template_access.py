"""Regression checks for the reusable CloudShare access contract."""
import shutil
import tempfile
import unittest
from pathlib import Path

import validate

SOURCE = Path(__file__).resolve().parents[1]


class CloudShareContractTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        for name in [
            'course-template.yaml', 'templates/index-template.html',
            'templates/components/cloudshare-session-access.html',
            'templates/components/cloudshare-access-steps.html',
            'templates/sdc-access-template.html',
            'reference/approved-index.html', 'reference/approved-sdc-access.html',
        ]:
            target = self.root / name
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(SOURCE / name, target)

    def issues(self):
        result = validate.Collector(self.root)
        validate.validate_access_standard(self.root, result)
        return result.issues

    def change(self, name, old, new):
        path = self.root / name
        path.write_text(path.read_text().replace(old, new))

    def test_current_contract_passes(self):
        self.assertEqual(self.issues(), [])

    def test_old_platform_flag_fails(self):
        self.change('course-template.yaml', 'platform: cloudshare', 'platform: skytap')
        self.assertTrue(any(i.code == 'access-config' for i in self.issues()))

    def test_credential_email_default_fails(self):
        self.change('course-template.yaml', 'credential_email_sent: false', 'credential_email_sent: true')
        self.assertTrue(any(i.code == 'access-config' for i in self.issues()))

    def test_missing_passphrase_fails(self):
        self.change('templates/components/cloudshare-access-steps.html', 'passphrase', 'join code')
        self.assertTrue(any(i.code == 'access-content' for i in self.issues()))

    def test_email_retrieval_instruction_fails(self):
        path = self.root / 'reference/approved-sdc-access.html'
        path.write_text(path.read_text() + '<p>Check your credential email.</p>')
        self.assertTrue(any(i.code == 'access-content' for i in self.issues()))

    def test_missing_introduction_component_contract_fails(self):
        self.change('templates/index-template.html', 'cloudshare-session-access.html', 'old-access.html')
        self.assertTrue(any(i.code == 'access-component' for i in self.issues()))


if __name__ == '__main__':
    unittest.main()
