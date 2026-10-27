# STDC Implementation Roadmap

## Phase 0 — Foundations (current starter)

- [x] Public website structure (Home, Format, Schools, Sponsors, Young Leaders, Policies, Contact)
- [x] Admin dashboard shell (no real data, no auth yet)
- [x] Project documentation set
- [x] Tech stack scaffold: Next.js + TypeScript + Tailwind
- [ ] GitHub repository + Vercel project linked
- [ ] Basic CI / lint on push

## Phase 1 — Content & Brand

- [ ] Confirm and insert real dates, venue, organisers, contacts (replace placeholders)
- [ ] Finalise visual identity (logo, colours, photography guidelines)
- [ ] Complete and approve Safeguarding Policy + Privacy Notice
- [ ] Publish competition rules and sample motions
- [ ] Sponsor package finalisation

## Phase 2 — Secure Backend Foundations

- [ ] Introduce Supabase (or equivalent) project
- [ ] Implement authentication for admin users only
- [ ] Define roles and row-level security policies
- [ ] Schema for: schools, applications, event config, motions, sponsor enquiries, results
- [ ] **No student registration endpoint goes live until Phase 3 checklist is signed off**

## Phase 3 — Registration & Admin Features (gated)

**Prerequisite checklist (all must be true):**

- [ ] Formal Safeguarding Policy approved and published
- [ ] Privacy Notice approved and published
- [ ] Authentication + RBAC working and tested
- [ ] Data retention and access-logging approach documented
- [ ] Consent / parental-permission process defined

Then:

- [ ] School application forms (admin review workflow)
- [ ] Event information and motion management UI
- [ ] Sponsor enquiry handling
- [ ] Results publishing (public-safe only)
- [ ] Content editing for public pages (optional CMS-lite)

## Phase 4 — Operations & Continuous Improvement

- [ ] Live event support (results entry, announcements)
- [ ] Young Leaders Network membership flow
- [ ] Post-event feedback and impact reporting
- [ ] Annual cycle improvements

## Technical Notes

- Prefer server components and server actions for data mutations.
- Keep all student PII behind authenticated routes and RLS.
- Public API routes must never return student-level records.
- Use environment variables for all secrets; never commit them.
