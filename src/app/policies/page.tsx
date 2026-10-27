import type { Metadata } from "next";
import { Shield, Lock, Scale, FileCheck, FlaskConical, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Policies, Safeguarding & Lab Safety",
};

export default function PoliciesPage() {
  return (
    <div>
      {/* Page Hero */}
      <section className="hero-surface relative overflow-hidden text-white">
        <div className="subtle-grid-pattern absolute inset-0 opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
              Governance, Safety &amp; Trust
            </p>
            <h1 className="section-heading mt-2 font-extrabold tracking-tight text-white">
              Policies, Child Safeguarding &amp; Data Privacy
            </h1>
            <p className="prose-measure mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
              The Surulere Teens Debate &amp; STEM Championship (STDSC) is committed to the safety,
              dignity, laboratory security, and data privacy of every student participant.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-10 px-4 py-14 sm:px-6 lg:py-18">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Safeguarding */}
          <section
            id="safeguarding"
            className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--secondary)] text-[var(--primary)]">
                <Shield className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                Safeguarding Policy (Summary)
              </h2>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              {[
                "All adults working with participants (organisers, adjudicators, STEM judges, mentors, and volunteers) must adhere to a binding Code of Conduct.",
                "Appropriate adult supervision ratios and school-chaperone requirements are maintained at all in-person events and STEM workshops.",
                "Concerns about the welfare of any young person are escalated immediately through a defined safeguarding reporting pathway.",
                "Physical, emotional, laboratory, and online safety are treated with equal seriousness.",
                "A full written Safeguarding Policy will be published and reviewed regularly before live operations.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Privacy Notice */}
          <section
            id="privacy"
            className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--secondary)] text-[var(--primary)]">
                <Lock className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Privacy Notice (Summary)</h2>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              {[
                "We collect only the personal data strictly necessary to administer the championship, STEM showcase, and related programmes.",
                "Student personal records are never displayed on public pages of this website.",
                "Access to student and school application data is restricted to authenticated administrators with role-based access control.",
                "Data is stored and processed in accordance with applicable Nigerian data-protection principles (NDPA) and best practice.",
                "Parents and guardians hold full rights regarding the data of minors; designated contact pathways for data requests will be published.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl bg-slate-100 p-3.5 text-xs font-semibold text-slate-900">
              Production student registration remains disabled until authentication, RBAC, and
              formal privacy documentation are fully implemented.
            </div>
          </section>

          {/* STEM Prototype & Lab Safety */}
          <section
            id="stem-safety"
            className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-800">
                <FlaskConical className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                STEM Showcase Safety &amp; Academic Integrity
              </h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              All entries in the STEM Innovation &amp; Project Showcase must comply with venue
              safety regulations. Hazardous chemicals, unshielded high-voltage wiring, open flames,
              and unsafe biological materials are strictly prohibited. Projects must represent the
              authentic work of the student team under teacher supervision, with proper attribution
              of open-source hardware or code libraries.
            </p>
          </section>

          {/* Code of Conduct */}
          <section
            id="conduct"
            className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-900">
                <Scale className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Code of Conduct</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Participants, coaches, adjudicators, STEM judges, and organisers are expected to treat
              one another with respect, debate and compete in good faith, and uphold the integrity
              of the championship. Harassment, discrimination, plagiarism, or any form of abuse will
              not be tolerated and may result in disqualification or removal from the programme.
            </p>
          </section>
        </div>

        {/* Document Status */}
        <section className="rounded-2xl border border-slate-200 bg-[var(--secondary)]/60 p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <FileCheck className="mt-0.5 h-6 w-6 shrink-0 text-[var(--primary)]" />
            <div>
              <h2 className="text-lg font-bold text-slate-900">Document Approval Status</h2>
              <p className="prose-measure mt-2 text-sm text-[var(--muted)]">
                Full versions of the Safeguarding Policy, Privacy Notice, Debate &amp; STEM
                Competition Rules, Prototype Safety Checklist, and Data Retention Schedule are under
                preparation. This page will be updated as each document is formally approved.
              </p>
            </div>
          </div>
        </section>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950">
          <strong>Legal Notice:</strong> These summaries are not a substitute for formal legal
          documents. Final policies will be reviewed for compliance before any live student data is
          processed.
        </div>
      </div>
    </div>
  );
}
