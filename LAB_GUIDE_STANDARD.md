# Zscaler Web Lab Guide Design Standard

## Core Layout

- Use a wide, desktop-first layout matching the approved EDU-200/EDU-202 design.
- Provide persistent left-side course navigation.
- Provide global course search and a Quick Filter on the Course Index.
- Support light and dark modes.
- Display the floating Zscaler logo consistently.
- Hero/banner styling must match the approved reference design.
- Preserve the approved Course Introduction structure.
- Preserve the approved Experience Center Navigation section structure.
- Preserve the approved SDC checkpoint layout.
- SDC/preconfigured labs must be visually distinguished from hands-on configuration labs.
- Keep the author line and unofficial-learning-aid disclaimer consistent.

## Task Design

- Use simple numbered task steps. Never reproduce PDF nested numbering such as a/b/c or i/ii/iii.
- Treat the source PDF as a source of technical information, not as a layout or visual-design template.
- Rewrite instructions for clarity, brevity, and learner readability.
- Preserve all technically important configuration values.
- Use tables for dense configuration rather than long prose.
- End each task with a clear **Expected Result** block.
- Course-specific content may change; the approved design system must not change unless explicitly requested.

## Screenshots and Media

- Place each screenshot immediately after the step or instruction it illustrates.
- Never collect all screenshots at the bottom of a task.
- Treat source screenshots as configuration/reference evidence, not authoritative navigation maps.
- If a source screenshot shows legacy navigation, preserve the useful configuration view but use verified current Experience Center navigation; otherwise provide a Search Menu keyword.

## Navigation

- Prefer verified current Experience Center navigation.
- Provide Search Menu guidance for Zscaler policies, resources, and features when it improves usability.
- If a current navigation path cannot be verified, provide an appropriate Search Menu keyword rather than inventing a path.
- Navigation guidance should be concise and should not overwhelm the actual task instructions.

## Technical Explainers

- Add technical explainers only when they materially improve understanding of the task.
- Keep technical explainers concise and high-level.
- Prefer diagrams, object relationships, flows, and compact visual explanations over long blocks of prose.
- Keep technical context visually separate from the numbered hands-on instructions.
- Technical explainers should help learners understand **why** they are configuring something, not duplicate the configuration steps.

## Body Text Width

- Normal explanatory paragraphs beneath headings should use the full available content width unless the approved reference layout intentionally places them inside a column.
- Do not apply narrow `max-width` constraints to ordinary explanatory text.

## Screenshot Sizing

- Screenshots must not exceed two-thirds of the maximum guide content width.
- Images must never be enlarged beyond their native resolution.
- Images may scale down responsively when the available viewport or column is narrower than the image.

## Navigation Verification and Switching

- On the Introduction page, teach the current Experience Center navigation and Search Menu. Do not require a navigation-mode switch or add legacy comparison cards. If a historical transition screenshot is relevant, label it as illustrative; do not copy its deadline as a current instruction. Original Navigation retirement was recorded as November 5, 2026, 01:00 UTC in the latest EDU-200 guide. Recheck date-dependent notices before reuse.
- Prefer a currently documented **help.zscaler.com** product/resource path; also give the learner a **Search Menu** keyword and, when useful, a direct official-documentation link.
- Do not copy menu paths from the source PDF without checking current official documentation. If official documents conflict, explain the discrepancy, use a relevant recent product-specific page as the primary reference, and offer Search Menu as fallback. Never invent a path or claim the PDF breadcrumb is current.
- Include source URLs in the generated guide for traceability; learners' live UI and entitlements may differ.

## Source Lab Topology and VM Access

- When the source PDF provides a topology, include a legible, technically accurate topology in **Environment at a Glance**. Prefer a faithful high-contrast redraw over the original PDF image when the source has illegible labels or low contrast; do not retain the unreadable image as a second version.
- Allow technical topology figures to use the full guide content width, subject to native-resolution/no-upscaling rules for raster images.
- Immediately below the topology, add a **VM access/credentials table** if the source explicitly gives VM or gateway usernames/passwords. Distinguish console credentials, RDP credentials and session-provided logins. Clearly mark fields that the source does not specify; never infer credentials.
- Do not publish session-specific passwords, provisioning keys, activation codes, or user secrets; refer learners to CloudShare Credentials in their assigned environment. Warn when a documented default password must be changed.

## Screenshot Height and Aspect Ratio

- Standard screenshots: maximum width **two-thirds of guide maximum content width** and maximum height **the smaller of 1,490 CSS pixels or 80vh**. Apply both constraints together without stretching; preserve the intrinsic aspect ratio.
- Never upscale raster screenshots above their native size. The lightbox may display a larger view within viewport limits.
- Topology diagrams are an explicit width/height exception; use a dedicated `.topology-figure` class instead of forcing network drawings into ordinary screenshot dimensions.

## Explainer Plan (Course-Controlled Technical Context)

- Each course must include `explainer-plan.yaml`, copied from `explainer-plan-template.yaml`. Read it before writing any lab or technical context. Its purpose is to control **where, why, and how deeply** technical explainers are added.
- `settings.generation: specified_only` is the default: render only `explainers` entries with `enabled: true`. Entries with `enabled: false` are suggestions and must not appear in HTML or course-data navigation. `suggest_additional_topics: true` permits suggestions in build notes, **not automatic insertion** in this mode.
- `specified_plus_auto` may add carefully justified context beyond enabled entries; document each added explainer and avoid unnecessary concepts in straightforward labs. Do not silently override explicit disabled entries.
- A `lab_intro` explainer appears after lab objectives and before the first task; a task-specific `before_steps` explainer (with `task: "N.M"`) appears immediately before that task's numbered steps. Never displace or duplicate the Expected Result.
- Each enabled explainer must have a stable `id` matching its rendered HTML anchor (`id="..."`) and the corresponding `course-data.js` `labs[].explainers[]` record, so sidebar and global search can find it. When changing a pre-existing explainer, revise rather than duplicating it.
- Recommended word ranges: `brief` 50–100, `standard` 150–250, `detailed` 250–400, subject to replacing prose with a useful diagram or table. Explain **what/why/how it relates to the exercise**, not click-by-click steps.
- Valid visual hints: `none`, `flow_diagram`, `architecture_diagram`, `comparison_table`, `sequence_diagram`, or `auto`. The builder should select a visual only when it improves clarity. Never manufacture unsupported product details.
- Cite relevant official Zscaler documentation when adding product-specific architecture or behavior; keep source-derived claims distinct from verified external explanations. The course PDF remains authoritative for lab steps and values.
- The YAML is **build-time input only**: do not load it in the browser. Validate it with `scripts/validate.py` and maintain its references as the course is built.

## Contrast-Safe Technical Diagrams and Substantive Explainers

- Test topology and architecture diagrams in light **and** dark site modes. If the PDF topology contains low-contrast lines or labels, create a clear high-contrast *source-grounded* redraw as the primary figure and omit the obsolete original from the learner-facing page. Preserve documented addresses, interfaces and relationships. Do not invent physical wiring.
- An explainer is **not** just a heading, a generic flow graphic or a caption that says “conceptual overview.” Explain how the product feature actually works, why the mechanism matters, the traffic path or object relationships, and how the specific lab proves the claimed behavior. A diagram should illustrate this explanation rather than replace it.
- For segmentation, distinguish broad subnet-based policy matches from the forwarding behavior that makes same-subnet endpoint traffic visible to the enforcement point. Never claim a subnet-wide firewall rule is a device-specific rule. Describe non-default modes or exceptions only when relevant, with authoritative references.
- Use compact, course-specific sidebar subtitles (for example, “ZTB Lab Guide”). Keep the independent/unofficial learning-aid disclaimer elsewhere; it need not be the sidebar subtitle.


## Concept-First Technical Context and Verified Navigation (Mandatory)

- Treat a technical-explainer request as a **teaching requirement**, not a request for a diagram caption. Open with a plain-language definition of the technology/policy, then explain the operational problem it solves, its decision/enforcement mechanism, and its real-life consequences. Only after that map the concept to the exact lab task and its validation.
- For `standard` and `detailed` explainers, use meaningful subsections (e.g., **What it is**, **Why it matters**, **How it works**, **How this lab demonstrates it**) and a worked example or comparison. An explainer that consists chiefly of exercise-specific settings does not satisfy the requirement.
- For policies, distinguish **policy intent**, **matching criteria**, **action**, **enforcement point**, **operational tradeoffs**, and **what the test actually proves**. Do not conflate a DNS Override with Redirect or a routing policy with a firewall permit rule.
- Documentation links and configuration breadcrumbs must be checked against the **relevant action and current product-specific article**, not merely an article about the same product. Write a **complete breadcrumb**, starting with the product root (e.g. **Zero Trust Branch → Resources → Objects**), rather than an abbreviated menu suffix. Link directly to the article used to verify the breadcrumb.
- For each actionable navigation element, provide both the verified path and a **Search Menu** keyword. If documentation conflicts, prefer the newer article that explicitly states the full path; if still uncertain, label the path as potentially version-dependent instead of inventing certainty.
- Perform a course-wide navigation audit before publication, including asset discovery, object management, site policy tabs, firewall policy screens, and routing policy screens; validate the page/document match, not just URL reachability.
- Treat the source PDF as authoritative for exercise values and intended outcomes, while official help.zscaler.com material provides externally verified product background and navigation. Distinguish lab-specific observations from general product capabilities.

## Approved Light/Dark Topology Pair

- If the supplied PDF topology is illegible, **replace it** in the learner-facing
  guide with a faithful, accessible redrawn diagram; do not include the obsolete
  diagram in an expandable panel solely for comparison. Preserve the PDF as the
  technical reference outside the published guide.
- When a matching light and dark topology pair exists, prefer SVG versions with
  identical devices, addresses, ports, subnet labels and network relationships.
  Use `templates/components/theme-topology.html`, which switches with the
  guide's existing `[data-theme]` light/dark setting and keeps enlargement working.
- Topologies may use the full content width. Check line contrast and label
  readability in both themes, including at normal laptop viewport sizes.
- An accurate single-theme high-contrast diagram is acceptable when two faithful
  variants are not available. Never invent network details in a redraw.

## Reusable Footer Convention

- Every generated page (Introduction, each lab, and optional access checkpoint)
  must have the same two-field footer: **Author: {{AUTHOR}}** on the left and
  **Adapted {{COURSE_ID}} Lab Guide** on the right. Other course types may use
  an equivalent accurate adapted-source label.
- Use the standard `.footer.guide-footer`, `.footer-author`, and `.footer-course`
  markup. Align left/right on desktop; stack in readable order on narrow screens.
- Keep the separate unofficial-learning-aid disclaimer elsewhere in the guide;
  the shorter footer is not a claim of official authorship or endorsement.


## Highlighted Experience Center Navigation Paths

- Render **only verified Experience Center menu breadcrumbs** with `templates/components/navigation-path.html`. Each menu level is a separate `.ec-nav-step` blue pill; chevrons between steps use `.ec-nav-separator`.
- Preserve the full documented breadcrumb and official Zscaler Help link. Keep Search Menu keywords in their existing `.search-hint` (not in the blue breadcrumb pills).
- Never use the pill component for configuration instructions, UI actions within a form, CLI commands, terminal output, routing flows, network diagrams, source screenshots, or ordinary technical explanations—even when those contain arrows.
- If a full current breadcrumb is not verified, **do not invent one**: show Search Menu guidance alone and add an appropriate note. Treat legacy paths only as a documented alternative, clearly labeled.
- Keep labels accessible, high-contrast in both themes, and horizontally scrollable when a long breadcrumb cannot fit the available width.

## CloudShare Access and Credentials (Default)

- CloudShare replaces the previous virtual-lab platform by default. Keep `course-template.yaml`, the Introduction, first access task, SDC checkpoint, reference pages, captions, and screenshots consistent.
- The instructor provides the **CloudShare access link and passphrase** to join the session. **No invitation or credential emails are sent.** Do not claim every learner receives a unique link; use the instructor-shared link and the learner's assigned workspace.
- Learners join with their **corporate/work email**. Free personal email providers such as Gmail and Yahoo are not accepted. This is a CloudShare sign-in requirement, separate from Zscaler tenant credentials.
- After joining, learners open **Credentials** inside CloudShare for the Zscaler tenant URL, administrator account, and password; SDC credentials are in their own section where applicable. The CloudShare join passphrase, VM login, tenant password, and SDC password are distinct values.
- Use `cloudshare-session-access.html` on the Introduction and adapt `cloudshare-access-steps.html` for the first access task. Keep the SDC checkpoint immediately before the first SDC lab, without hardcoding course lab numbers in reusable components.
- No session-password text box or live session secrets in the guide or YAML. Watermarked sample credentials demonstrate where to look; never instruct learners to copy them. Remove redundant assigned-tenant reminders from later labs unless a task actually switches environments.
- Adapt VM names, clipboard controls, unlock actions and enrollment methods to course evidence. Do not assume a Windows username, Send Password action, OAuth token path or VM set applies to every course.

## Technical Diagram Width

- Conceptual diagrams, flows and architecture drawings may use full content width, just like topology figures, with click-to-enlarge. Use `.technical-diagram` and `technical-diagram.html`.
- Add `.diagram-vector` only for SVGs so they fill the column. Raster diagrams keep native resolution; standard UI and credential screenshots retain the two-thirds maximum width and min(1490px, 80vh) height limits. Preserve aspect ratio and theme switching.
- Use crisp text, solid consistent colours, logical arrow routing, and adequate spacing. Preserve technical facts in both theme variants.

## Editorial and Validation Evidence

- Rewrite source prose into short action steps, emphasize selected UI labels, and use parameter/value tables when easier to scan. Preserve prerequisites, protocols, ports, settings and expected outcomes. Do not optimize toward an arbitrary word-reduction or table-count target.
- State what a test proves. A timeout, failed page load, TLS error, changed IP or missing log alone does not prove which policy acted. Where applicable correlate the named rule, action, user, destination and time with the correct product logs and note logging/ingestion dependencies.
- Keep technical explanations outside numbered execution steps. Explain optional metadata that later tasks do not consume; do not imply assigning an attribute automatically provisions access.
- Specify literal HTTP/HTTPS schemes and required ports when the lab depends on them. Note browser HTTPS upgrades only when relevant. Separate client forwarding, cloud policy evaluation, entitlement, authorization and backend connectivity rather than promising a cloud-policy log for a request dropped earlier.
- Warn immediately before destructive resets or re-enrollment; document token expiry and retrieval from course-supported evidence. Mark image-specific conveniences and tenant-dependent behavior explicitly.
- Help links must match the actual operation (creating a group versus enrolling its connector), not merely the product. Validate content relevance as well as link reachability.
- Keep `site.js` course-neutral and keep course titles, tasks and explainer navigation in `course-data.js`. Do not copy a course-specific script merely because its guide is newer.
