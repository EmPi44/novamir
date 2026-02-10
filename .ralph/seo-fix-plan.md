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
- [ ] T9: Add `<main>` landmark to public page templates — ensure each public/*.html wraps its primary content in a `<main>` element. index.html already has `<main>` in the SEO fallback.
- [ ] T10: Add `rel="noopener noreferrer"` to ALL external links that use `target="_blank"`. Check components/*.tsx and public/*.html for external links.
- [ ] T11: Add `loading="lazy"` to below-fold images. Check components that render images (ProductSection.tsx, Hero.tsx, etc.) and add lazy loading to images not in the initial viewport.

### Phase 3: Content & Compliance

- [ ] T12: Ensure content pages have meaningful text — check /contact page has sufficient content (not just a form/links). Add descriptive paragraphs where content is thin.
- [ ] T13: Review keyword density — check homepage for over-optimization of any terms. Adjust if any keyword appears excessively.
- [ ] T14: Fix empty anchor text — find any `<a>` tags wrapping images or icons without visible text and add `aria-label` or visible text for accessibility/SEO.
- [ ] T15: Ensure all links use HTTPS — find any `http://` links in the codebase and upgrade to `https://`. Check all HTML files and components.

### Phase 4: Verification & Cleanup

- [ ] T16: Run `npm run build` to verify no build errors after all changes.
- [ ] T17: Run `squirrel audit https://novamir.com --format llm` and record the new score. If the site hasn't been deployed yet, note this for post-deploy verification.
- [ ] T18: Git commit all remaining uncommitted changes with a summary message.
