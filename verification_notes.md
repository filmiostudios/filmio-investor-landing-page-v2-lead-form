# Filmio Investor Landing Page Deployment Verification

Temporary public review URL:

https://3000-irvomslesbwe1lwarzuvg-fe6b8e28.us2.manus.computer

## Build and server status

`pnpm run check` and `pnpm run build` both completed successfully after customization. The production Express server is running on port 3000 with `NODE_ENV=production` and serving the built Vite application from `dist/public`.

## Verified in browser

The customized landing page loads with the title `Invest in Filmio Studios`, the Filmio Studios branded wordmark, the primary headline `Be the Reason Hollywood's Next Hit Gets Made.`, and the investor messaging for ROI, IRR, cash-flow ROI, equity discount, the Film Fund, Raise, Investment Terms, Team, Track Record, and footer sections.

The missing `/manus-storage/...` image dependencies from the zip backup were replaced with production-safe branded visual elements: a CSS Filmio wordmark, team-member initials cards, and a track-record credit panel. This prevents broken images in the deployed production build.

The booking iframe area is still visually blank on the temporary proxied domain, likely because the third-party booking provider blocks or delays rendering inside the preview iframe/domain. A direct fallback link labeled `Open booking calendar in a new tab` now appears beneath the iframe and points to `https://api.leadconnectorhq.com/widget/bookings/filmio-studios-discovery`.

Footer links for `/privacy-policy` and `/terms-of-use` now route to lightweight production legal pages instead of the 404 page.

## Production notes

Before publishing to a permanent domain, the booking provider should be checked for domain allowlisting or embedding restrictions. If Filmio has final lawyer-approved privacy/terms documents, the placeholder legal page copy should be replaced with those definitive documents.

## Legal route verification

The `/privacy-policy` route was opened in the browser and confirmed to render the new branded Filmio legal page, including the Filmio wordmark, privacy sections, and a `Return to Investor Page` link. This confirms footer legal navigation is no longer routed to the 404 page.
