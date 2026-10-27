# Safeguarding and Privacy Requirements

**This document is a requirements checklist. Formal legal policies must still be drafted, reviewed and approved before any live processing of student data.**

---

## 1. Core Principles

1. The welfare of young people is paramount.
2. Student personal data is collected only when necessary and is never published on public website pages.
3. Access to student and school application data is restricted to authenticated, authorised administrators.
4. Production registration features remain disabled until the checklist below is complete.

## 2. Safeguarding Requirements (pre-live)

- [ ] Written Safeguarding Policy covering in-person and online interactions.
- [ ] Named safeguarding lead / reporting pathway.
- [ ] Code of conduct for staff, volunteers, coaches and adjudicators.
- [ ] Adult supervision ratios defined for events.
- [ ] Process for handling concerns or allegations.
- [ ] Clear rules on photography, filming and social media involving participants.

## 3. Privacy & Data Protection Requirements (pre-live)

- [ ] Privacy Notice explaining what data is collected, why, how long it is kept, and rights of data subjects / parents.
- [ ] Lawful basis documented for each processing purpose (especially data of minors).
- [ ] Parental / guardian consent process where required.
- [ ] Data minimisation: only fields necessary for the championship and network.
- [ ] Storage location and security measures documented.
- [ ] Access control: authentication + role-based permissions + (preferably) row-level security.
- [ ] Retention schedule and deletion / anonymisation process.
- [ ] Process for subject access / correction / deletion requests.
- [ ] Incident / breach response outline.

## 4. Technical Controls (website & admin)

| Control | Requirement |
|---------|-------------|
| Public site | No student PII, no unauthenticated access to application data |
| Admin authentication | Required for any management of applications or student-related records |
| Authorisation | Roles that limit who can view / edit sensitive data |
| API / Server Actions | Never return student records to unauthenticated callers |
| Logging | Access to sensitive data should be auditable |
| Secrets | Environment variables only; not committed to git |

## 5. Explicit Gate for Student Registration

The following statement must remain true until the checklist is signed off:

> **Production student registration is not enabled.**

The public website and admin shell may be deployed earlier for content and sponsor information, but any form or database that stores student personal data requires completion of Sections 2–4.

## 6. Document Ownership

- Policy drafts: organising committee + legal/advisory review (as applicable).
- Technical implementation of controls: development team.
- Sign-off before go-live: designated project owner.

---

*Update this checklist as items are completed. Do not enable real student data flows until it is complete.*
