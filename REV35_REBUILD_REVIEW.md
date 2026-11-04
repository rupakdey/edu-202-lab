# EDU-202 Rev. 3.5 — first rebuilt web edition

Built November 4, 2026 from the supplied October 2026 Rev. 3.5 PDF, using the
November 4 CloudShare template and the attached previous EDU-202 web guide as
the writing/design reference. The PDF's internal metadata mentions a v4 draft;
the printed revision and supplied filename identify Rev. 3.5 and are used here.

## What changed

| Area | Previous web edition | First Rev. 3.5 rebuild |
|---|---|---|
| Structure | 12 labs / 45 tasks | 11 labs / 42 tasks, matching the new PDF |
| Lab access | Skytap workflow | Instructor-shared CloudShare link/passphrase, corporate email and in-platform Credentials |
| Removed source lab | Lab 4: Zero Trust Browser ZIA | Omitted because it is not in the revised PDF |
| PRA | Lab 5 | Lab 4; RDP target 10.0.0.1 and SSH target now Corp Log Streaming Connector 10.0.0.20 |
| AppProtection | Lab 6 | Lab 5; updated source configuration/screenshots and tenant-specific DVWA DNS |
| Private-app isolation | Lab 7 | Lab 6; baseline and post-policy comparisons |
| ZDX monitoring | Lab 8 | Lab 7; collection, Mail Server application and two probes |
| ZDX alerts/diagnostics | Lab 9 | Lab 8; explicit criteria, thresholds and five-minute session |
| OneAPI | Lab 10 | Lab 9; updated client roles, variables and certificate-ID substitution |
| SDC checkpoint | Before Lab 11 | Before Lab 10 |
| SDC reports / ZWA | Labs 11–12 | Labs 10–11 |
| Runtime/navigation | Hardcoded course script | Latest course-neutral site.js and dedicated course-data.js |
| Progress storage | Earlier task-number keys | New `edu202-rev35` namespace avoids treating the old Lab 4 completions as new PRA progress |
| Task presentation | Earlier concise guide | Rewritten against current source using short action steps, emphasized UI labels and settings tables |
| Screenshots | Earlier source images | 126 selected screenshots from the revised PDF, positioned with the relevant steps; sample access images from the latest template |
| Topology | Earlier raster topology | Source-faithful, full-width light/dark SVG pair with current documented VM addresses |
| Footer | Earlier footer | Author: Rupak Dey / Adapted EDU-202 Lab Guide on every learner page |

## Existing technical explanations retained

No additional technical-explainer topics were enabled for this first rebuild.
The following already-approved material is preserved and renumbered:

- Lab 2: Browser Access and managed/custom certificate responsibilities.
- Lab 4: PRA portal, console, credentials and policy relationships.
- Lab 5: AppProtection mechanisms, control/profile/policy model and paranoia levels.
- The existing DVWA DNS/backend explanation and diagram remain with Task 5.1,
  outside the numbered execution steps.

`explainer-plan.yaml` records the three existing lab-introduction explainers.
Additional topics can be selected after reviewing this version.

## Source inconsistencies corrected or disclosed

1. **Skytap and email:** Introductory pages and some Lab 1 wording still mention
   Skytap, invitation emails or credential emails. The rebuild uses the confirmed
   instructor-provided CloudShare access link/passphrase and CloudShare Credentials.
2. **Console URL:** The `www.console.zsscaler.com` typo is replaced with
   `https://console.zscaler.com`.
3. **Renumbered task references:** PRA references to Task 5.1 now point to 4.1;
   AppProtection references to 6.2 now point to 5.2; probe references to 8.2 now
   point to 7.2; OneAPI references to 10.3 now point to 9.3.
4. **VM credentials:** The explicit VM table is used for lowercase `student`,
   `administrator`, and `admin` logins. Docker uses `Zscaler123!`; the two RHEL
   connectors use `Zscaler1!`. These training defaults are distinct from the
   CloudShare join passphrase and session tenant/SDC passwords.
5. **HVAC account:** The malformed introductory account pattern is normalized to
   `hvac@<Student FQDN>`, consistent with Task 2.4. The documented lab password is
   retained with an instructor-replacement caveat.
6. **Server group:** The later `Corp Servers` spelling is resolved to the existing
   `CorpServers` object created in Task 2.3, rather than making a second group.
7. **PRA credential names:** `PRA_windows` and `PRA_Log_Streaming_Connector` are used
   consistently; source capitalization and `Streamming` variants are not copied
   into mismatched references. The SSH target is the Log Streaming Connector,
   not the Docker server mentioned in an outdated policy sentence.
8. **Enrollment reset:** State-deletion commands are retained from the new source,
   with an immediate destructive-action warning and a fresh-token condition.
   `/etc/issue` is identified as a training-image convenience. Actual enrollment
   remains dependent on the supplied VM and token validity.
9. **Browser Access names:** Tests use each application's copied External Domain,
   rather than hardcoding the source's generic DVWA/internal application name.
10. **DNS explanation:** The A record resolves to 10.0.0.128; it does not itself
    forward or redirect HTTP. The existing explanatory diagram is retained.
11. **Isolation evidence:** Clipboard/printing controls and the isolation banner
    are used alongside upload tests because AppProtection's Block policy can also
    affect uploads from the previous lab.
12. **OneAPI outcome:** Creating a group does not enroll a connector or prove HA.
    The example certificate ID `7877` is replaced with a clearly marked value to
    obtain from the assigned tenant's GET response.
13. **Alert recipient:** The dummy address example is an `example.com` placeholder.
    Email delivery is not claimed unless an approved real recipient is used and
    qualifying conditions actually trigger an alert.
14. **Snapshots:** The source heading says generate snapshots, but its executable
    steps copy/open an existing snapshot. Task 10.3 accurately follows that flow.
15. **SDC permissions:** The source calls SDC read-only but asks learners to update
    metadata, add approvers, notify users and approve escalation. Every task is
    retained with a permission-aware inspect/instructor-demo route. Saving or
    sending is conditional on instructor approval and the assigned role. This is
    an explicit delivery dependency, not a claim that the read-only role can write.

## Navigation and Help references

- Blue pills represent documentation-verified Experience Center breadcrumbs only.
- Some official pages use a different navigation version from the new PDF's
  screenshots. Documented routes are explicitly labeled; Search Menu is retained
  for the exact feature. Unverified routes are not invented.
- Official Help links accompany relevant resource instructions and retained
  concept sections. The connector/group articles are distinguished.
- `NAVIGATION_REFERENCE_REVIEW.json` records feature keywords, selected references
  and documented breadcrumbs. Some Help pages expose only JavaScript shells to
  direct retrieval; indexed official excerpts supplied route/content checks.
- Live-tenant menu validation is still needed. A clickable documentation URL is
  not proof that every tenant has identical menu labels or permissions.

## Validation performed

- Strict template/generated-guide validator: **0 errors, 0 warnings**.
- 13 learner HTML pages: Introduction, 11 labs and SDC checkpoint.
- 11 lab numbers and all 42 task IDs checked against the PDF.
- Local link/anchor, image-reference and duplicate-ID checks passed.
- All task completion checkboxes match course-data.js; every task ends with an
  Expected Result; all 13 learner pages use the author/course footer.
- Three retained explainer anchors match their plan and course-data entries.
- Six template CloudShare regression checks passed.
- JavaScript syntax checks passed for site.js and course-data.js.
- Packaged raster images decode and ZIP integrity checks passed.
- Light/dark topology SVGs were rendered and visually inspected.

## Validation not completed

- Full browser rendering and interactive tests of theme/search/checkbox/lightbox:
  no browser executable exists locally, and the cloud browser's attempted local
  preview connection returned `ERR_CONNECTION_REFUSED` because it cannot reach
  the workspace HTTP server.
- Live CloudShare/Zscaler execution, token enrollment, actual policy changes,
  generated alert delivery, API calls and SDC permissions were not tested.
- No claims of tenant-tested operation or browser-tested responsive rendering
  are made for this first version.

## Review and installation

Extract the **complete ZIP into a new directory** and open `index.html`, or serve
it with `python3 -m http.server 8000` from the extracted root. Prefer a fresh
working tree: this is a full replacement, not an overlay on the 12-lab edition.
If applying to an existing repository, remove the obsolete root `lab-12.html`;
old assets no longer referenced by any page can be removed after comparison.

First review: CloudShare access, connector enrollment (2.2/3.1), both PRA targets,
DVWA DNS/profile settings, the Lab 9 API flow, and SDC permissions in Lab 11.
Keep any source-specific token/image limitations visible during the instructor
walkthrough. No GitHub commit, push or public deployment was performed.
