# EDU-202 Engineer Web Lab Guide

Unofficial web adaptation of **Zscaler for Users – Engineer (EDU-202) Hands-on Lab Guide**, using the established EDU-200 Web Guide v7 visual and interaction pattern.

## Included

- Introduction and course index
- 12 lab pages / 45 tasks
- Persistent left navigation and global search
- Light/dark mode
- Browser-local task completion tracking
- Copy controls for commands and reusable values
- Screenshot lightbox
- Source-guide screenshots used as configuration references
- Dedicated SDC checkpoint before Lab 11
- Static HTML/CSS/JS suitable for GitHub Pages

## Navigation note

The June 2026 source guide contains screenshots and paths from an earlier Experience Center menu layout. This first export preserves the source task intent and feature names. Where menu placement differs, learners should use Experience Center **Search Menu** to locate the named feature. A later revision can normalize individual paths after current-tenant validation.

## Publishing

Place `index.html` at the repository root and deploy the repository root with GitHub Pages.

## Disclaimer

This is an independent learning adaptation authored by Rupak Dey and is not an official Zscaler lab guide. Source materials contain Zscaler proprietary/confidential notices; confirm redistribution rights before publishing outside an authorized audience.
- v2 design pass: rebuilt the Introduction, Experience Center navigation section, session/environment foundation, and Course Index to match the EDU-200 v7 visual pattern. Lab content was intentionally left unchanged.
- v3 design pass: fixed the Course Index Quick filter presentation and rebuilt the SDC checkpoint to match the EDU-200 v7 layout, including the watermarked sample SDC credential image.
- v4 content pass: Labs 1–2 were rewritten to use the EDU-200 v7 task pattern (simple numbered steps, concise language, settings tables, contextual screenshots, and Expected Result callouts). Screenshots are now placed immediately after the steps they support.
- v5 content pass: Labs 3–12 now use the same task-writing pattern approved for Labs 1–2. PDF-style nested numbering was removed, instructions were shortened/rephrased, settings were converted to tables where useful, and screenshots were moved directly beside the steps they support.
- v6 design pass: screenshots no longer exceed 1120px (two-thirds of the 1680px maximum guide width), remain centered, and are never upscaled beyond their native resolution.
- v7 concept pass: added concise technical explainers for ZPA Browser Access (including Managed vs Unmanaged/Custom certificates) and Privileged Remote Access (PRA core objects and policies).
- v8 technical-context pass: Lab 6 now explains ZIA vs ZPA inspection behavior, AppProtection purpose and control/profile/policy model, OWASP CRS and paranoia levels, application-centric threat protection, and the DVWA 10.0.0.128 DNS/backend flow using the supplied diagram.
- v9 navigation/design pass: lab subtitles now use the full content width. Experience Center navigation was audited across Labs 2–12 and concise Search menu keywords were added wherever a learner opens a policy/resource page. Lab 4 now uses 'Isolation profile', explicit URL Filtering navigation, and 'Cloud App Policy'.
- v10 cosmetic pass: normal explanatory paragraphs under stacked section headings now use the full available page width instead of wrapping at a fixed text-width limit.
