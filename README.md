# Charlie Travels & Cargo

Responsive bus travel and parcel delivery website built with Next.js App Router, TypeScript, React and Bootstrap.

## Local development

```sh
npm ci
npm run dev
```

Open the Local URL printed by Next.js (normally http://localhost:3000).
Copy `.env.example` to `.env.local` when overriding the deployment domain. Environment files stay at the repository root.

## Project structure

```text
src/
  app/                 Routes, root layout, metadata, robots and sitemap
  components/
    layout/            Common header and footer
    ui/                Shared section headings and booking buttons
    home/              Home cards, enquiry form, routes and gallery
  data/                Home content and navigation definitions
  lib/                 Booking URL helpers and site URL configuration
  styles/              Global/layout styles and home page styles
public/                Logo, optimized images and video
```

Keep `public/`, `.env.*`, package files and framework/tool configuration at the repository root. All application imports use `@/`, which resolves to `src/`.

## Working conventions

- Route files belong in `src/app`. Shared layouts belong in `components/layout`, reusable presentation components in `components/ui`, and home-specific components in `components/home`.
- Update repeated content in `src/data/home.ts` and navigation in `src/data/navigation.ts`.
- Build WhatsApp links through `src/lib/booking.ts`; do not duplicate the booking number in components.
- Prefer Server Components. Use `"use client"` only for components that need events, state or browser APIs.
- Keep strict TypeScript checks enabled. Use `import type` for types.
- The existing enquiry form keeps passenger travel, parcel delivery and cargo shipping options. Submitting opens WhatsApp with the enquiry details; sending remains the visitor's action.
- `NEXT_PUBLIC_SITE_URL` controls canonical URLs, social image URLs and the sitemap. Set it to the actual deployment origin before publishing on a different domain.
- Sitemap entries should include only implemented routes.

## Validation

```sh
npm run format       # Apply consistent formatting
npm run check        # Formatting, ESLint and TypeScript
npm run build        # Production compilation and route generation
```

There is no automated browser test suite yet. Check the desktop/mobile layout and booking flow when changing UI behavior.

## Next.js version guidance

Read relevant guides in `node_modules/next/dist/docs/` before changing framework behavior; this project's Next.js version includes changes from earlier versions.
