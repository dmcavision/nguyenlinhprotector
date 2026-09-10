# Validation record

Measured September 10, 2026 against the local production build at `http://127.0.0.1:4321` using installed Google Chrome. Generated reports and screenshots are in ignored `reports/`; the scripts in `scripts/` reproduce the checks.

## Build and generated output

- `npm run check`: 0 errors, 0 warnings, 0 hints.
- `npm run build`: 33 static HTML pages (32 canonical content pages plus 404).
- `npm run validate`: no errors across internal links/fragments, unique metadata, language pairs, canonicals, hreflang, sitemap, robots, H1s, image attributes, and JSON-LD parsing.
- All pages except the two contact routes have zero executable client JavaScript; the contact routes contain one small form-status script and JSON-LD.
- Homepage HTML is approximately 12 KB before compression; CSS is bundled and filename-hashed by Astro. No external font or third-party runtime requests.
- `npm audit --omit=dev`: 0 known vulnerabilities at the time of the check. The full install audit also reported 0.
- Source scan found no common credential patterns or unfinished placeholders. Approved SVG copies match their original SHA-256 hashes.

## Browser coverage

All 32 content routes were visited at 1440px, 390px, and 320px widths. Automated checks cover successful HTTP responses, horizontal overflow and WCAG A/AA axe rules on all mobile routes, a keyboard-accessible skip link and mobile menu, representative 200% text-size views, and reduced-motion behavior. Desktop/mobile screenshots of both homepages, contact, articles, and the Counter Claim service were captured; representative English and Vietnamese layouts were visually inspected.

The numeric service labels were darkened to meet contrast requirements. Navigation now wraps when text is enlarged; workflow columns adapt to the available text width. Tests normalize whitespace in the skip-link label to avoid mistaking HTML formatting for an accessibility defect.

## Lighthouse mobile results

| Sample               | Performance | Accessibility | Best Practices | SEO |   LCP | CLS |   TBT |
| -------------------- | ----------: | ------------: | -------------: | --: | ----: | --: | ----: |
| English home         |         100 |           100 |            100 | 100 | 0.9 s |   0 | 70 ms |
| Vietnamese home      |         100 |           100 |            100 | 100 | 0.9 s |   0 | 60 ms |
| English DMCA article |         100 |           100 |            100 | 100 | 0.9 s |   0 |  0 ms |
| Vietnamese contact   |         100 |           100 |            100 | 100 | 0.9 s |   0 |  0 ms |

These are single-run local lab measurements with mobile simulation, not live-domain guarantees. INP was not measured; field interaction data is needed after launch. The automated Chrome session disables back/forward cache by default, which appears as an unscored diagnostic in these reports. No scored Lighthouse audits failed in the final samples.

## Launch checks still requiring the live service

GitHub, Vercel, apex/www DNS, HTTPS, Google Search Console, and sitemap submission are active. Continue to verify live caching/redirect response headers, webhook events, rich-result interpretation, and field performance. Email submission was exercised in production; telephone service was not. The owner should confirm operational privacy practices, content, and publication dates.

## Homepage and navigation update

Added direct service navigation, a bilingual issue selector, and three homepage article cards. Astro check completed with 0 errors, warnings, or hints; the 27-page build and all generated-link/metadata checks passed. Targeted Chrome review covered both languages on home, insights, and brand pages at 1440px, 390px, and 320px; open-menu keyboard navigation, mobile axe checks, and 200% homepage text sizing passed. Results are in `reports/home-enhancements.json`. Screenshots of the new sections and expanded menus were inspected. Lighthouse scores above are the earlier baseline, not a new measurement of this update.

## Platform login update

Added a header Login button and paired `/platform-logins/` and `/vi/dang-nhap-nen-tang/` routes. The page links to the supplied Meta IP Tools, Brand Protection, and Content Protection subdomains over HTTPS. The 29-page build and generated-output validation passed. All 28 content routes passed layout checks at 1440px, 390px, and 320px, mobile axe checks, keyboard navigation, and representative 200% text sizing. A targeted review also verified all three exact portal destinations, the page language pair, and both platform pages with no mobile WCAG A/AA violations.

## Resend contact form update

Added bilingual contact forms and a root Vercel Function using Resend. The Function validates all submitted values, allows only HTTP(S) URLs, escapes inquiry HTML, rejects oversized and invalid-origin requests, includes a honeypot, applies a best-effort per-instance rate limit, and keeps credentials in server-side environment variables. Unit tests covered validation, spam handling, origin restrictions (including exact Vercel preview matching), rate limiting, unavailable configuration, mocked inquiry delivery, and mocked acknowledgment delivery. Browser tests covered both languages at 1440px, 390px, and 320px, WCAG A/AA checks, and the complete success interaction with a mocked endpoint. The privacy policy now discloses Vercel endpoint and Resend email processing. Real email delivery remains a deployment check because no Resend API key was placed in the repository.

Production diagnosis later confirmed a successful `200 OK` inquiry through the deployed endpoint. The form now maps server error codes to specific bilingual messages, including malformed URLs, rate limits, missing configuration, delivery rejection, invalid origin, and network failure. Allowed deployment origins also recognize Vercel's generated deployment, branch, and production URL environment variables.

## Counter Claim service update

Added paired `/counter-claim/` and `/vi/phan-doi-yeu-cau-go-bo/` service pages, direct navigation, homepage service and issue cards, related DMCA guide links, structured service data, and Counter Claim selections in the contact form and API validation. The service copy distinguishes administrative counter-notification support from legal advice or general moderation appeals and links to the U.S. Copyright Office Section 512 resources. All 30 routes passed desktop/mobile layout and mobile WCAG A/AA checks; the Vietnamese service page was visually inspected at desktop and mobile widths.

## Delivery tracking, social image, and Counter Claim guide update

Added signed Resend webhook handling for delivered, bounced, failed, and complained events, with non-PII log records tied to outbound `inquiry_id` tags. Contact success states now display the server-generated inquiry reference in JavaScript and no-JavaScript flows. Added localized 1200 × 630 Open Graph images using the approved mark and a generated navy/cobalt evidence-network background. Added paired Counter Claim/DMCA counter-notification guides with official statutory sources. Signature rejection, all four tracked events, inquiry-reference rendering, image metadata, HTTP status, responsive layout, and mobile WCAG A/AA checks passed.
