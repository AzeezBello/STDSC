# Surulere Teens Debate Championship (STDC) — Project Documentation

This folder contains supporting documentation for the STDC website and programme.

## Contents

| Document | Description |
|----------|-------------|
| [MASTER_PROPOSAL.md](./MASTER_PROPOSAL.md) | Improved master project proposal (source of truth for confirmed details; placeholders for unconfirmed) |
| [IMPLEMENTATION_ROADMAP.md](./IMPLEMENTATION_ROADMAP.md) | Phased technical and operational roadmap |
| [SAFEGUARDING_AND_PRIVACY.md](./SAFEGUARDING_AND_PRIVACY.md) | Safeguarding and privacy requirements that must be met before live student registration |
| [COMPETITION_RULES.md](./COMPETITION_RULES.md) | Draft competition rules framework |
| [BUDGET_FRAMEWORK.md](./BUDGET_FRAMEWORK.md) | High-level budget categories and assumptions |
| [SPONSOR_PACKAGE.md](./SPONSOR_PACKAGE.md) | Outline of sponsor tiers and benefits |
| [STDSC_Pitch_Deck.pdf](./STDSC_Pitch_Deck.pdf) | 10-slide widescreen institutional pitch deck PDF |
| [STDSC_Business_Model_Canvas.pdf](./STDSC_Business_Model_Canvas.pdf) | 2-page widescreen Business Model Canvas & operating flywheel PDF |

## Technical stack (confirmed direction)

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui-compatible components
- **Hosting:** Vercel
- **Source control:** GitHub
- **Data (planned):** Supabase (auth + database) with strict access controls

## Critical constraint

> A production registration system must not expose student records publicly. Authentication, role-based access and documented privacy/safeguarding controls are prerequisites for enabling real student data.

## Placeholders policy

Unconfirmed dates, venue, organisers, contacts, sponsors and funding figures remain as explicit placeholders. Do not invent them.
