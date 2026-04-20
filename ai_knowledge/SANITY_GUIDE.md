# Sanity Guide

Reusable Sanity + Next.js setup based on this project.

## Stack
- Next.js App Router
- Sanity Studio mounted inside app
- `next-sanity` client
- Optional Live Content API
- `@sanity/image-url` for image helpers

## Repo Structure
- `sanity.config.ts` - Studio config
- `sanity.cli.ts` - CLI config
- `sanity/env.ts` - env helpers
- `sanity/lib/client.ts` - Sanity client
- `sanity/lib/live.ts` - live query helpers
- `sanity/lib/image.ts` - image URL builder
- `sanity/schemaTypes/*` - schema definitions
- `sanity/structure.ts` - Studio navigation
- `app/dashboard/[[...tool]]/page.tsx` - Studio route

## Environment Variables
Required:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

Optional:
- `NEXT_PUBLIC_SANITY_API_VERSION` default: `2026-01-01`

## Studio Route
Use this route in a Next.js App Router project:

```tsx
// app/dashboard/[[...tool]]/page.tsx
/**
 * Catch-all route for Sanity Studio under /dashboard
 */
import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export const dynamic = 'force-static'
export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <NextStudio config={config} />
}
```

## Studio Config
`sanity.config.ts` uses:
- `basePath: '/dashboard'`
- `projectId` and `dataset` from `sanity/env.ts`
- `schema` from `sanity/schemaTypes`
- plugins:
  - `structureTool({ structure })`
  - `visionTool({ defaultApiVersion: apiVersion })`

## CLI Config
`sanity.cli.ts` reads:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

Use it to run Sanity CLI commands in the repo.

## Schemas
Current schema set is blog-style:
- `post`
- `author`
- `category`
- `blockContent`

### `post`
Fields:
- `title` string
- `slug` slug from title
- `author` reference to `author`
- `mainImage` image with hotspot and `alt`
- `categories` reference array to `category`
- `publishedAt` datetime
- `body` `blockContent`

### `author`
Fields:
- `name` string
- `slug` slug from name
- `image` image with hotspot
- `bio` portable text blocks

### `category`
Fields:
- `title` string
- `slug` slug from title
- `description` text

### `blockContent`
Portable text array with:
- blocks: normal, H1, H2, H3, H4, quote
- lists: bullet
- marks: strong, em, link
- inline images with `alt`

## Client Helpers
### `sanity/lib/client.ts`
Creates client with:
- `projectId`
- `dataset`
- `apiVersion`
- `useCdn: true`

### `sanity/lib/live.ts`
Exports:
- `sanityFetch`
- `SanityLive`

Render `SanityLive` in layout if using live updates.

### `sanity/lib/image.ts`
Exports:
- `urlFor(source)`

## Studio Structure
Current structure groups:
- Posts
- Categories
- Authors

If you reuse this in another project, change structure to match business content types like:
- services
- case studies
- testimonials
- team members

## Porting Checklist
1. Install deps: `sanity`, `next-sanity`, `@sanity/vision`, `sanity/structure`, `@sanity/image-url`, `@sanity/icons`
2. Copy `sanity/` folder and `sanity.config.ts`
3. Add `app/dashboard/[[...tool]]/page.tsx`
4. Set env vars
5. Point `basePath` at `/dashboard`
6. Make sure analytics or other site-only scripts skip `/dashboard`
7. Verify Studio loads and schema types appear

## Reuse Notes
- This repo is still blog-shaped. For a client site, replace blog schemas with business schemas.
- Keep tokens server-side. Do not expose secrets via `NEXT_PUBLIC_`.
- If you use analytics, disable them in Studio routes.

## Troubleshooting
- Missing env var: `sanity/env.ts` throws early
- Studio 404: route or `basePath` mismatch
- Broken images: wrong project or dataset in `urlFor`
- Vision issues: API version mismatch
