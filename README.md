# EDU-202 Engineer web lab guide — October 2026 Rev. 3.5

First rebuilt web edition, November 4, 2026. Independent web adaptation by Rupak Dey.

- 11 labs / 42 tasks; SDC checkpoint before Lab 10.
- Instructor-provided CloudShare access link/passphrase; corporate email required.
- Tenant and SDC accounts from CloudShare Credentials; no invitation/credential emails.
- Short numbered steps, configuration tables, contextual screenshots and Expected Results.
- Latest course-neutral runtime, sidebar/search, theme controls, local progress and lightbox.
- Existing Browser Access, PRA and AppProtection explanations retained. Additional
  topics are deferred until review of this first version.

Extract the full archive into a new folder and open `index.html`. For a local server:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. Browser progress is stored locally using the new
`edu202-rev35` prefix so the previous course numbering does not corrupt completion.

This replaces the old 12-lab edition. Avoid overlaying it over the old directory;
remove obsolete root `lab-12.html` when updating an existing repository.

See [REV35_REBUILD_REVIEW.md](REV35_REBUILD_REVIEW.md) for the source corrections,
retained explainers, validation results and delivery limitations. Source screenshot
provenance is in `SOURCE_SCREENSHOT_MAP.json`; current Help/keyword choices are in
`NAVIGATION_REFERENCE_REVIEW.json`.

Checks:

```sh
python scripts/test_template_access.py
python scripts/validate.py --strict
```

No live-tenant walkthrough or successful browser interaction pass was performed.
No hosting/deployment changes were made. Keep source-derived course content within
its authorized training audience.
