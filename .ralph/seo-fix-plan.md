# SEO Fix Plan — novamir.com
## Baseline: 46/100 (Grade F) | Target: 90+ (Grade A)

> This file is the shared memory for the Ralph Loop. Each iteration reads this file
> to find the next unchecked task. Mark tasks [x] when done or [SKIP] with a reason.

---

### Phase 1: Critical (Errors)

- [x] T1: ~~Fix viewport meta~~ VERIFIED — all 5 HTML files already have clean viewports (`width=device-width, initial-scale=1.0`). No restrictions found.
- [x] T2: Fixed H1 tags — improved Hero.tsx sr-only H1 text from "Novamir" to "Novamir - AI Systems That Reclaim Your Time" for JS-capable crawlers. Added aria-hidden to Logo SVG. All public pages verified with exactly 1 H1 each.
- [ ] T3: Add/fix meta descriptions — all pages need unique descriptions (120-160 chars). Check index.html and all public/*.html. Current descriptions exist but may be too long or too short — audit each and adjust to 120-160 char range.
- [ ] T4: Fix meta titles — adjust length to 30-60 chars where needed. Current titles: "Novamir - AI Systems That Reclaim Your Time" (44 chars, OK), "About Novamir - AI Systems That Reclaim Your Time" (50 chars, OK), "Contact Novamir - Book a Free AI Consultation" (46 chars, OK), "Privacy Policy - Novamir" and "Terms & Conditions - Novamir" — verify all public page titles are in 30-60 char range.
- [ ] T5: Verify JSON-LD structured data — confirm Organization has `url` and `logo` fields (they appear to exist already at index.html:74-75). Ensure all JSON-LD blocks validate. Check public pages for proper WebPage/AboutPage/ContactPage schema types.

### Phase 2: High Priority (Warnings)

- [ ] T6: Add og:description and og:image to any subpages missing them. Verify all public/*.html have complete OG tags (og:title, og:description, og:image, og:url, og:type, og:site_name).
- [ ] T7: Add missing image alt text — audit all `<img>` tags across components/*.tsx and public/*.html. Every image must have descriptive alt text (not empty, not just filename).
- [ ] T8: Fix heading hierarchy — remove empty headings, fix heading level skips (e.g., h1 -> h3 without h2). Check components like CallToAction.tsx which uses h3 without preceding h2 in its section. Check VideoSection.tsx line 31 for empty h2.
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
