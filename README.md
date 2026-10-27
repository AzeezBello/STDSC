# Surulere Teens Debate Championship (STDC) Website

Public-facing website and private admin dashboard for the Surulere Teens Debate Championship.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** v4
- **shadcn/ui-compatible** component patterns (`Button`, `cn` utility)
- Planned: **Supabase** for authenticated data (not yet wired)
- Deploy target: **Vercel** | Source: **GitHub**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/                 # App Router pages
    page.tsx           # Home
    format/            # Championship format
    schools/           # Information for schools
    sponsors/          # Sponsors & partners
    young-leaders/     # Young Leaders Network
    policies/          # Safeguarding & privacy summaries
    contact/           # Contact form (demo)
    admin/             # Private admin shell (no real data yet)
  components/          # Shared UI
  lib/                 # Utilities
docs/                  # Project documentation (proposal, roadmap, policies…)
```

## Important constraints

1. **Placeholders** — Dates, venue, organisers, contacts, sponsors and funding figures are explicitly marked as unconfirmed. Do not invent them.
2. **Student data** — No production registration or public exposure of student records until authentication, RBAC and formal safeguarding/privacy documents are in place. See `docs/SAFEGUARDING_AND_PRIVACY.md`.
3. **Admin** — The `/admin` area is a structural placeholder only.

## Documentation

See the [`docs/`](./docs/) folder for:

- Master proposal
- Implementation roadmap
- Safeguarding & privacy requirements
- Competition rules framework
- Budget framework
- Sponsor package outline

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |

## Licence

Private project — all rights reserved by the organising body (to be confirmed).
# STDSC
