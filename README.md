# Nguyen Linh Protector

A bilingual corporate website for Nguyen Linh Protector LLC, prepared for Git-based Vercel deployment. Built with statically generated Astro pages, strict TypeScript, plain CSS, Astro Content Collections, and one Vercel Function that sends contact inquiries through Resend. There is no framework hydration, analytics, external font, or general third-party runtime.

## Local development

Use Node.js 22.x and npm. The lockfile is included with the project. TypeScript is pinned to 6.0.x because the installed Astro checker requires its programmatic API.

```sh
npm ci
npm run dev
```

Production build and review:

```sh
npm run check
npm run build
npm run validate
npm run preview
```

Build output: `dist/`. Preview: `http://localhost:4321`. All 30 content routes are prerendered, with a separate `404.html`. The static site builds without credentials. Successful contact delivery requires the environment variables listed in `.env.example`; use `vercel dev` for an end-to-end local Function test.

## Project structure

- `src/i18n/routes.ts`: typed route pairs and supplied business information; also used by the sitemap and validation.
- `src/i18n/copy.ts`: navigation, page metadata, homepage copy, and contact translations.
- `src/i18n/discovery.ts`: bilingual issue-selection and homepage guide introductions.
- `src/i18n/content.ts`: substantive service pages, privacy policy, and terms in both languages.
- `src/content.config.ts`: article schema and content loader.
- `src/content/insights/`: three English articles and corresponding Vietnamese translations.
- `src/components/`: shared page rendering, header, footer, language switcher, breadcrumbs, service cards, process steps, inquiry CTA, SEO, and JSON-LD.
- `api/contact.ts`: validated Vercel Function for Resend inquiry and acknowledgment emails.
- `src/layouts/Base.astro`: shared document shell.
- `src/pages/[...path].astro`: static page and article routes from typed route pairs.
- `src/styles/global.css`: design tokens, responsive layouts, focus treatment, and reduced-motion support.
- `public/brand/`: approved SVG logo assets and an Apple Touch Icon exported from the approved mark.
- `scripts/`: generated-output, browser accessibility/layout, and Lighthouse checks.

The header provides direct links to all four services through a native desktop disclosure and the mobile navigation. Both homepages include an issue selector and reuse `InsightCards.astro` to feature the three localized Content Collection articles.

## Content and branding

Original root-level logo assets remain unchanged. The supplied outlined logo, mark, and favicon SVG are copied without modification. The missing Apple Touch Icon was exported at 180 × 180 from the approved mark on a white background; it introduces no new artwork. No white mark, ICO, or Open Graph image was supplied, so those assets were not invented. SVG favicon support is used.

Each article has paired localized routes, title, description, publication/update dates, organizational author, reading time calculated from its content, a table of contents, breadcrumbs, related services, and Article structured data. Legal explanations link near the relevant text to the U.S. Copyright Office statute and fair-use resources or official USPTO guidance. Articles are educational and do not provide individualized legal advice.

To edit an article, update its Markdown and `updated` date. For a new article pair, add both Markdown files, its route pair in `routes.ts`, and the permitted translation key in the content schema. Keep both translations aligned. Rerun all build/output checks after changes.

Metadata is generated centrally: unique titles/descriptions, absolute self-referencing canonicals, `en`, `vi`, and `x-default` alternates, Open Graph/X metadata, and visible-content JSON-LD. The official Astro sitemap integration uses the same route map, including translated slugs. The nonindexable 404 is excluded from the sitemap.

## Verification

```sh
npm run check
npm run build
npm run validate
# Start preview before the following commands:
npm run test:browser
npm run test:lighthouse
```

The browser script uses installed Google Chrome through Playwright. It visits every content route at 1440px, 390px, and 320px, scans all routes at mobile size with axe WCAG A/AA checks, exercises keyboard navigation, checks representative pages at 200% text size, and verifies reduced motion. It saves screenshots and results under ignored `reports/`.

Lighthouse runs against the local production preview using mobile simulation for both homepages, the English DMCA article, and the Vietnamese contact page. Chrome is discovered automatically; set `CHROME_PATH` if necessary. Reports are saved under `reports/`. Scores are lab measurements, not guarantees for a deployed site. INP needs real user interaction data; a zero-JavaScript implementation and measured TBT are not an INP measurement.

`npm run validate` checks every generated content route, unique metadata, one H1, canonical and alternate URLs, corresponding language switches, internal links and fragments, JSON-LD parsing, image attributes, absence of client scripts/forms, common placeholders, sitemap alternatives, robots, and the 404 noindex directive. JSON-LD parsing does not substitute for search-engine rich-result eligibility checks after deployment.

Production HTML and CSS are minified. Astro emits hashed CSS under `/_astro/`, suitable for Vercel’s static asset caching. The only browser script handles contact-form status without a UI framework. The root `api/contact.ts` endpoint is deployed as a Vercel Function, so no Astro server adapter or `vercel.json` is required. Retest response headers, function delivery, and performance on the live domain.

## Contact form and Resend

The form is available on both contact routes and sends the same structured inquiry to `CONTACT_TO_EMAIL`. The Function sends a separate acknowledgment to the visitor after the internal message is accepted. It validates field lengths, email and URL formats, accepted option values, consent, origin, request size, a honeypot, and a best-effort per-instance rate limit. Validation, rate-limit, network, configuration, and delivery failures produce localized user-facing messages. The form does not accept attachments.

Copy `.env.example` to a local untracked environment file or configure these values directly in Vercel:

- `RESEND_API_KEY`: secret Resend API key.
- `CONTACT_FROM_EMAIL`: sender using a domain verified in Resend.
- `CONTACT_TO_EMAIL`: inbox receiving website inquiries; defaults to `inquiry@nguyenlinhprotector.net`.

Never expose `RESEND_API_KEY` in public Astro variables or browser code. The local unit test mocks Resend and does not deliver real email:

```sh
npm run test:contact
```

For stronger distributed abuse protection, add a Vercel Firewall rate-limit rule for `/api/contact` after deployment. The in-function rate limit is intentionally an additional best-effort layer because serverless instances do not share memory.

## Vercel launch steps

1. Push the project to GitHub. Create a repository, commit the source and `package-lock.json`, add its remote, and push your main branch. Do not commit `node_modules`, `dist`, `reports`, or credentials.
2. Import the repository into Vercel.
3. Allow Vercel to detect Astro.
4. Confirm the build command is `npm run build`, the output directory is `dist`, and Node.js meets the package engine requirement.
5. In Resend, add and verify the chosen sending domain or subdomain with the DNS records Resend supplies.
6. Add `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` to Vercel's Production, Preview, and Development environments as appropriate, then redeploy.
7. Add `nguyenlinhprotector.net` in the Vercel project’s domain settings.
8. Add `www.nguyenlinhprotector.net`.
9. Set the apex domain as primary.
10. Redirect `www` to the apex domain using Vercel’s domain settings. Apply exactly the DNS records Vercel provides at the DNS host; preserve existing email MX/TXT records and the new Resend records.
11. Verify HTTPS, the `www` redirect, form delivery and acknowledgment, then check live canonicals, robots, sitemap, navigation, email, and telephone actions. Confirm the live hosting cache headers for hashed assets.
12. Add a Vercel Firewall rate-limit rule for `/api/contact`, monitor Function logs, verify the domain in Google Search Console, and submit `https://nguyenlinhprotector.net/sitemap-index.xml`.

No production deployment or domain connection has been performed. GitHub repository creation/push, Vercel import, DNS changes, and Search Console verification remain owner actions.

## Owner review before publication

- Business details are reproduced from the supplied brief; no independent corporate verification or telephone/email delivery test was performed.
- Confirm the inquiry mailbox and telephone are operational. Links invoke the visitor’s email/calling application and do not submit through this website.
- Article publication and policy update dates are September 10, 2026, the implementation date. Change them if the actual publication date differs.
- Confirm the privacy policy matches actual email/telephone providers, access controls, retention practices, and disclosure procedures. The website itself has no analytics or nonessential cookies; enabling any later requires reviewing that policy.
- Confirm the English and Vietnamese content and the proposed inquiry/engagement workflow before publishing. No fees, turnaround times, clients, outcomes, or accreditations have been assumed.

## Complete route list

| English                                             | Vietnamese                                             |
| --------------------------------------------------- | ------------------------------------------------------ |
| `/`                                                 | `/vi/`                                                 |
| `/copyright-enforcement/`                           | `/vi/bao-ve-ban-quyen/`                                |
| `/dmca-takedown/`                                   | `/vi/go-bo-dmca/`                                      |
| `/counter-claim/`                                   | `/vi/phan-doi-yeu-cau-go-bo/`                          |
| `/brand-protection/`                                | `/vi/bao-ve-thuong-hieu/`                              |
| `/how-it-works/`                                    | `/vi/quy-trinh/`                                       |
| `/about/`                                           | `/vi/gioi-thieu/`                                      |
| `/insights/`                                        | `/vi/kien-thuc/`                                       |
| `/contact/`                                         | `/vi/lien-he/`                                         |
| `/platform-logins/`                                 | `/vi/dang-nhap-nen-tang/`                              |
| `/privacy-policy/`                                  | `/vi/chinh-sach-bao-mat/`                              |
| `/terms-of-use/`                                    | `/vi/dieu-khoan-su-dung/`                              |
| `/insights/document-online-copyright-infringement/` | `/vi/kien-thuc/ghi-nhan-vi-pham-ban-quyen-truc-tuyen/` |
| `/insights/dmca-notice-information/`                | `/vi/kien-thuc/thong-tin-thong-bao-dmca/`              |
| `/insights/brand-protection-evidence-checklist/`    | `/vi/kien-thuc/danh-sach-bang-chung-thuong-hieu/`      |

Additional output: `/404.html`, `/robots.txt`, `/sitemap-index.xml`, and `/sitemap-0.xml`.
