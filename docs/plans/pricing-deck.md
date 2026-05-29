---
plan name: pricing-deck
plan description: Build printable pricing deck
plan status: done
---

## Idea
Implement a dedicated Next.js pricing deck route for Flaat Studio that renders the agreed 9-slide pricing content as presentation-style 16:9 sections, uses the site's existing typography and color system, excludes the standard site sidebar for clean presentation output, and includes print-specific styling plus a client-side download button that triggers browser PDF export with one slide per printed page.

## Implementation
- Create a new standalone route group or page for the pricing deck that does not inherit the existing site sidebar layout.
- Model the 9 slide sections from the approved pricing concept into structured TypeScript data for consistent rendering and easier copy updates.
- Build reusable presentational components for slide frame, section header, pricing tier cards, and support content while keeping the visual language aligned with current brand fonts and colors.
- Implement screen layout so the page reads as slide-by-slide sections with fixed 16:9 presentation proportions and professional spacing on desktop and mobile.
- Add a client-side Download PDF control that triggers browser print and hides non-slide UI during print output.
- Add print CSS so each slide becomes its own printed page, preserves backgrounds/colors, and avoids sidebar/navigation artifacts.
- Run lint and a production build to verify the route, component structure, and print-safe markup compile cleanly.

## Required Specs
<!-- SPECS_START -->
<!-- SPECS_END -->