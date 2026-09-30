# Agent Zero SEO review brief

## Target

Production: https://theater.mmmpaykin.workers.dev/

Repository: mpaykin1/theater

Goal: independently review and improve organic discoverability without spam, invented events, fake scarcity, or misleading structured data.

## Priority pages

1. /
2. /chem-zanyatsya-tbilisi/
3. /kak-ponyat-chego-ya-hochu/
4. /afisha/
5. /raspisanie-tbilisi/
6. /druzya-tbilisi/
7. /tvorcheskie-znakomstva-tbilisi/
8. /kurs/
9. /individual/
10. /about/

## Current SEO intent map

- Home: theatre in Tbilisi / formats
- /chem-zanyatsya-tbilisi/: "куда пойти в Тбилиси", "чем заняться в Тбилиси" + personalized choice
- /kak-ponyat-chego-ya-hochu/: informational "как понять, чего я хочу"
- /afisha/: performances in Tbilisi / show format
- /raspisanie-tbilisi/: current schedule / afisha
- /druzya-tbilisi/: finding friends through shared creative activity
- /tvorcheskie-znakomstva-tbilisi/: creative social connections
- /kurs/: course "Проявись"
- /individual/: individual theatre-therapy format
- /about/: entity/person biography and trust

## Independent review questions

1. Are page intents distinct enough to avoid cannibalization?
2. Do title, H1 and description describe the actual page and likely query intent?
3. Are important pages reachable through descriptive internal links?
4. Is visible copy sufficiently useful without requiring the quiz?
5. Does JSON-LD reflect content that is actually visible on the page?
6. Are LocalBusiness / PerformingArtsTheater entity facts consistent across the site?
7. Is any Event markup misleading? Do not recommend Event markup for a schedule/list page unless each real event has a unique leaf URL and accurate date/location.
8. Are sitemap, canonical, robots and status codes consistent?
9. Are there mobile UX / Core Web Vitals issues?
10. Which 5 changes would most likely improve non-branded search impressions and useful clicks?

## Current production changes to review

- Homepage links directly to schedule, the Tbilisi activity chooser, and "Как понять, чего я хочу?"
- /chem-zanyatsya-tbilisi/ now targets both "куда пойти" and "чем заняться", contains useful static guidance, visible FAQ, and links to schedule/desire test.
- /kak-ponyat-chego-ya-hochu/ contains 3 practical exercises and useful copy independent of the quiz.
- /afisha/ has a query-aligned title/H1 and direct schedule/personal-selection links.
- /raspisanie-tbilisi/ has afisha/schedule language and visible facts matching its FAQ schema.
- Sitemap lastmod is updated for changed pages.
- CI workflow verifies exact Cloudflare production HTML, JSON-LD, sitemap, robots, titles, H1s and expected internal links.

## Output format

Return:
- up to 12 findings, ordered by expected impact;
- exact affected URL(s);
- evidence;
- concrete recommended edit;
- risk / tradeoff;
- 3 things NOT to do.

Do not publish or edit anything during the independent review.
