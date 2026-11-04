[ ] Every lab uses the approved hero layout
[ ] Every task uses standard numbered steps
[ ] No PDF-style a/b/c/i/ii numbering remains
[ ] Every screenshot follows the step it illustrates
[ ] No image is upscaled
[ ] No image exceeds the global screenshot width limit
[ ] All Experience Center resources have navigation/search guidance
[ ] All configuration values from the source are preserved
[ ] All tasks have an Expected Result
[ ] Left navigation matches page/task order
[ ] Course index matches actual lab files
[ ] Previous/Next links work
[ ] Dark mode works
[ ] Search works
[ ] Copy buttons work
[ ] No broken image paths
[ ] No obsolete source navigation presented as current
[ ] Introduction teaches current navigation/Search Menu without requiring a retired navigation switch
[ ] Current documented resource path + Search Menu keyword provided; official source linked where useful
[ ] Conflicting documentation paths or tenant-specific UI variation disclosed, not guessed away
[ ] Readable, source-faithful topology included when provided (with ports/subnets preserved); no obsolete low-contrast duplicate
[ ] VM credentials table appears immediately below the lab topology if values are explicitly documented
[ ] No invented VM usernames/passwords or exposed session-specific secrets
[ ] Standard screenshots <= min(1490px, 80vh) tall and <= 2/3 guide max width, without distortion/upscaling
[ ] Topology diagrams may use full page width without upscaling raster files
[ ] Course has explainer-plan.yaml and settings agree with intended generation mode
[ ] Only enabled explainers are rendered; disabled suggestions remain out of the pages/search/sidebar
[ ] Each enabled explainer appears at intended lab/task placement and uses its declared id
[ ] Explain-the-why content does not repeat numbered configuration steps
[ ] Active explainers appear in course-data.js search/sidebar entries and match HTML anchors
[ ] Technical context depth/visuals match the plan; existing context is not duplicated

## Technical Figure / Explainer Quality

- [ ] In both light and dark mode, all topology labels, paths, arrows and subnet values remain legible at normal zoom; redraw dark-source topologies without losing source details.
- [ ] Each enabled explainer explains the security/forwarding mechanism and ties it to a specific lab test, not merely a generic caption or superficial paragraph.
- [ ] Difference between underlying product mechanism and specific lab policy match is explicit and verified; official docs linked for product behavior.
- [ ] Sidebar subtitle is specific to the course while the independent/unofficial disclaimer remains visible on the guide.

## Concept and Navigation Review

- [ ] Enabled explainers define the underlying technology and why it is needed before referencing lab-specific values.
- [ ] Explain the mechanism, decision/enforcement point, practical tradeoffs, and how the lab verifies the effect.
- [ ] All full navigation breadcrumbs follow the most directly relevant current Zscaler documentation, start at the product root, and include Search Menu terms.
- [ ] Review that the Help Portal link supports the actual written navigation path; disclose any UI-version differences.

## Theme Topology and Footer QA

- [ ] The readable/accurate topology is the only primary topology; any obsolete,
      unreadable PDF rendition has been removed from learner-facing pages.
- [ ] Light and dark SVG variants present identical technical information, and
      the correct variant is visible and enlarges properly after theme toggles.
- [ ] Footer appears on Introduction, **every** lab, and any access checkpoint.
- [ ] Footer has left `Author: <name>` and right `Adapted <course ID> Lab Guide`;
      responsive small-screen layout remains legible.
- [ ] The unofficial-learning-aid disclaimer remains intact outside the footer.


## Experience Center Navigation Pills

- [ ] Documented, verified menu paths use `ec-nav-path` / `ec-nav-step` pills, not a plain arrow string.
- [ ] Search Menu keywords and documentation references remain separate, functional, and legible.
- [ ] Non-navigation arrows (traffic flows, command sequences, numbered steps) are **not** styled as breadcrumbs.
- [ ] Long paths are horizontally scrollable on phones; legible in light and dark themes.
- [ ] Unknown or legacy-only routes are not presented as confidently verified current paths.

## CloudShare and reusable improvements

- [ ] Configuration defaults to CloudShare; instructor provides link AND passphrase.
- [ ] Introduction and first access task require corporate email and reject Gmail/Yahoo.
- [ ] No invitation/credential-email workflow or session-password input remains.
- [ ] Tenant and applicable SDC logins come from CloudShare Credentials; join passphrase and tenant/VM/SDC passwords are distinguished.
- [ ] Sample credential images are clearly marked, match the current platform, and are not used as live login values.
- [ ] SDC checkpoint remains before its first lab; components contain no fixed course/lab numbers.
- [ ] Full-width technical SVGs enlarge and switch themes; raster diagrams and UI screenshots do not upscale.
- [ ] Technical concepts remain outside numbered steps; test evidence supports the claimed rule/action and enforcement point.
- [ ] Explicit schemes/ports and destructive-action warnings are present where relevant.
- [ ] Reference examples, templates, configuration and standards agree; course-specific runtime/navigation data has not replaced reusable code.
