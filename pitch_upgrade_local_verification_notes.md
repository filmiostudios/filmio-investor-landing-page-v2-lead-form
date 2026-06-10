# Pitch Upgrade Local Verification Notes

## Hero and above-the-fold conversion cockpit

The rebuilt local GitHub Pages preview loaded successfully at `http://localhost:4180/filmio-investor-landing-page-v2/?v=pitch-upgrade-local`. The header displays the Filmio Studios logo treatment, a simplified briefing/deck/discovery-call navigation path, and a prominent `Book a Call` CTA. The hero headline now appears first, followed by a three-step action strip: watch the 5-minute thesis briefing, scan the investor deck, and book a 20-minute discovery call. The video, Canva deck, and booking calendar are grouped immediately below the headline and action strip inside a single conversion cockpit.

The page markdown confirms the local build includes the new logo-backed proof cues for OpenAI, Anthropic, Cursor, Harvey, and Sierra, and that the external booking fallback links remain present.

## Mid-page local visual inspection

After scrolling the local preview, the hero conversion cockpit loaded the HeyGen video, Canva deck, and booking calendar successfully, with the external booking fallback still visible. The initial mid-page inspection surfaced two refinements to address before publication: the compact vertical AI value logo strip is rendering too small for some logos, and the Section 2 narrative composition is too visually dense/overlapped in the current viewport. These should be adjusted before final deployment so the proof logos and first narrative section read as premium rather than crowded.



## QA refinement verification — hero

After the Section 2 density and hero proof-logo refinements, the rebuilt local preview loads successfully at the GitHub Pages base path. The hero continues to present the approved Filmio Studios header, accredited-investor headline, three-step watch/scan/book path, HeyGen briefing frame, Canva deck frame, and constrained booking panel above the fold. The vertical-AI value-signal row now renders with visible brand labels in the DOM and larger proof pills; final lower-page inspection is still needed before publishing.

## Logo asset QA after SVG fix

After replacing the invalid OpenAI, Anthropic, Cursor, and Netflix SVGs with consistent local wordmark SVG assets, the local preview reports valid intrinsic image dimensions for the above-the-fold logo strip. Lazy-loaded lower-page logo images remain unloaded until scrolled into view, which is expected behavior because the reusable logo component uses `loading="lazy"`. The hero continues to display the guided investor-call path with headline-first hierarchy, proof cues, and the video/deck/calendar conversion cockpit.

## Brand-logo asset coverage

The local source and production build both contain SVG assets for every brand/festival/market-reference logo introduced in the pitch-site proof modules: OpenAI, Anthropic, Cursor, Harvey, Sierra, Bloomberg, Netflix, Disney, Universal, Amazon MGM, Sundance, SXSW, and Angel Studios. The generated SVGs are valid local files under `client/public/brand-logos/` and are copied into `dist/public/brand-logos/` during the production build.
