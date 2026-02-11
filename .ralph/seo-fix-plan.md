# SEO Fix Plan — novamir.com
## Baseline: 46/100 (Grade F) | Target: 90+ (Grade A)

> This file is the shared memory for the Ralph Loop. Each iteration reads this file
> to find the next unchecked task. Mark tasks [x] when done or [SKIP] with a reason.

---

### Phase 1: Critical (Errors)

- [x] T1: ~~Fix viewport meta~~ VERIFIED — all 5 HTML files already have clean viewports (`width=device-width, initial-scale=1.0`). No restrictions found.
- [x] T2: Fixed H1 tags — improved Hero.tsx sr-only H1 text from "Novamir" to "Novamir - AI Systems That Reclaim Your Time" for JS-capable crawlers. Added aria-hidden to Logo SVG. All public pages verified with exactly 1 H1 each.
- [x] T3: ~~Fix meta descriptions~~ VERIFIED — all 5 pages have unique descriptions in 120-160 char range: index(146), about(132), contact(132), privacy(136), terms(151).
- [x] T4: ~~Fix meta titles~~ VERIFIED — all 5 titles in 30-60 char range: index(43), about(49), contact(45), privacy(38), terms(44).
- [x] T5: ~~Verify JSON-LD~~ VERIFIED — Organization has url+logo, all pages use correct schema types (AboutPage, ContactPage, WebPage). All JSON-LD blocks valid.

### Phase 2: High Priority (Warnings)

- [x] T6: ~~Add OG tags~~ VERIFIED — all 5 pages have complete OG tags (type, title, description, url, site_name, image with width/height).
- [x] T7: ~~Fix image alt text~~ VERIFIED — all rendered images have descriptive alt text. Client logos use company names, product images use product titles, developer section uses role names.
- [x] T8: Fixed heading hierarchy — added sr-only h2 "Our Solutions" to ProductSection before its h3 product titles, fixing h1→h3 skip. CallToAction/VideoSection/DevelopersSection are unused (not in App.tsx). Footer h2→h3 hierarchy is correct.
- [x] T9: ~~Add main landmark~~ VERIFIED — all 5 HTML files already have `<main>` elements wrapping primary content.
- [x] T10: ~~Add rel noopener~~ VERIFIED — all external links with target="_blank" already have rel="noopener noreferrer" (contact.html, BookingSection.tsx, footer-section.tsx).
- [x] T11: ~~Add lazy loading~~ VERIFIED — Hero images use loading="eager" (above-fold), ProductSection images use loading="lazy" (below-fold). All correct.

### Phase 3: Content & Compliance

- [x] T12: ~~Fix thin content~~ VERIFIED — contact page has substantial content (intro, consultation CTA, 4 contact cards with descriptions, "What Happens Next" section). No thin content issues found.
- [x] T13: ~~Fix keyword density~~ VERIFIED — "novamir" appears 24x on homepage but mostly in meta/JSON-LD/nav (expected). No over-optimization in body copy.
- [x] T14: Fixed empty anchor text — added aria-label="Novamir - Home" to Header logo link which wrapped an SVG without visible text.
- [x] T15: ~~Fix HTTP links~~ VERIFIED — only http:// instances are SVG xmlns declarations (standard/correct). All actual hyperlinks use HTTPS.

### Phase 4: Verification & Cleanup

- [x] T16: Build verified — `npm run build` succeeds with no errors. Only informational chunk size warning (not a build error).
- [x] T17: Local audit complete — **83/100 (Grade B)** up from 46/100 (Grade F). Remaining issues are localhost-specific (HTTPS, compression, HTTP2, sitemap domain mismatch) that Vercel handles in production. 12 categories score 100/100. Re-audit live site after deploy to confirm final production score.
- [ ] T18: Git commit all remaining uncommitted changes with a summary message.
