import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies, Safeguarding & Lab Safety",
};

export default function PoliciesPage() {
  return (
    <div>
      {/* Full-Bleed Background Image Hero with Subtle Directional Overlay */}
      <section className="relative isolate overflow-hidden border-b border-[var(--border)] bg-[#071326] text-white">
        <img
          src="/images/schools-team.jpg"
          alt="Faculty coordinator supervising secondary school students in a Lagos school library"
          fetchPriority="high"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071326]/90 via-[#071326]/80 to-[#071326]/45"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="hero-heading font-bold text-white">
              Policies, Child Safeguarding &amp; Data Privacy
            </h1>
            <p className="prose-measure mt-5 text-base leading-relaxed text-slate-100 sm:text-lg">
              The Surulere Teens Debate &amp; STEM Championship (STDSC) is committed to the safety,
              dignity, laboratory security, and data privacy of every student participant.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid divide-y divide-[var(--border)] rounded-md border border-[var(--border)] bg-white md:grid-cols-2 md:divide-x md:divide-y-0">
          {/* Safeguarding */}
          <section id="safeguarding" className="scroll-mt-24 p-6 sm:p-10">
            <span className="editorial-kicker text-[var(--primary)]">
              POL-01 / CHILD PROTECTION
            </span>
            <h2 className="sub-heading mt-2 font-bold text-slate-900">
              Safeguarding Policy (Summary)
            </h2>
            <ul className="mt-5 divide-y divide-[var(--border)] text-sm text-slate-700">
              {[
                "All adults working with participants (organisers, adjudicators, STEM judges, mentors, and volunteers) must adhere to a binding Code of Conduct.",
                "Appropriate adult supervision ratios and school-chaperone requirements are maintained at all in-person events and STEM workshops.",
                "Concerns about the welfare of any young person are escalated immediately through a defined safeguarding reporting pathway.",
                "Physical, emotional, laboratory, and online safety are treated with equal seriousness.",
                "A full written Safeguarding Policy will be published and reviewed regularly before live operations.",
              ].map((item, idx) => (
                <li key={item} className="flex items-baseline gap-3 py-3">
                  <span className="font-mono-tech text-xs font-bold text-[var(--primary)]">
                    0{idx + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Privacy Notice */}
          <section id="privacy" className="scroll-mt-24 p-6 sm:p-10">
            <span className="editorial-kicker text-[var(--stem-teal)]">
              POL-02 / DATA PROTECTION
            </span>
            <h2 className="sub-heading mt-2 font-bold text-slate-900">
              Privacy Notice (Summary)
            </h2>
            <ul className="mt-5 divide-y divide-[var(--border)] text-sm text-slate-700">
              {[
                "We collect only the personal data strictly necessary to administer the championship, STEM showcase, and related programmes.",
                "Student personal records are never displayed on public pages of this website.",
                "Access to student and school application data is restricted to authenticated administrators with role-based access control.",
                "Data is stored and processed in accordance with applicable Nigerian data-protection principles (NDPA) and best practice.",
                "Parents and guardians hold full rights regarding the data of minors; designated contact pathways for data requests will be published.",
              ].map((item, idx) => (
                <li key={item} className="flex items-baseline gap-3 py-3">
                  <span className="font-mono-tech text-xs font-bold text-[var(--stem-teal)]">
                    0{idx + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xs border border-[var(--border)] bg-[var(--secondary)] p-4 text-xs font-semibold text-slate-900">
              Production student registration remains disabled until authentication, RBAC, and
              formal privacy documentation are fully implemented.
            </div>
          </section>
        </div>

        {/* STEM Safety & Code of Conduct */}
        <div className="grid divide-y divide-[var(--border)] rounded-md border border-[var(--border)] bg-white md:grid-cols-2 md:divide-x md:divide-y-0">
          <section id="stem-safety" className="scroll-mt-24 p-6 sm:p-10">
            <span className="editorial-kicker text-amber-900">
              POL-03 / LABORATORY &amp; PROTOTYPE RULES
            </span>
            <h2 className="sub-heading mt-2 font-bold text-slate-900">
              STEM Showcase Safety &amp; Academic Integrity
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              All entries in the STEM Innovation &amp; Project Showcase must comply with venue
              safety regulations. Hazardous chemicals, unshielded high-voltage wiring, open flames,
              and unsafe biological materials are strictly prohibited. Projects must represent the
              authentic work of the student team under teacher supervision, with proper attribution
              of open-source hardware or code libraries.
            </p>
          </section>

          <section id="conduct" className="scroll-mt-24 p-6 sm:p-10">
            <span className="editorial-kicker text-[var(--primary)]">
              POL-04 / ETHICAL STANDARDS
            </span>
            <h2 className="sub-heading mt-2 font-bold text-slate-900">Code of Conduct</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Participants, coaches, adjudicators, STEM judges, and organisers are expected to treat
              one another with respect, debate and compete in good faith, and uphold the integrity
              of the championship. Harassment, discrimination, plagiarism, or any form of abuse will
              not be tolerated and may result in disqualification or removal from the programme.
            </p>
          </section>
        </div>

        {/* Document Status */}
        <section className="rounded-md border border-[var(--border)] bg-[var(--secondary)] p-6 sm:p-8">
          <span className="editorial-kicker text-[var(--primary)]">
            POL-05 / DOCUMENT APPROVAL SCHEDULE
          </span>
          <h2 className="sub-heading mt-2 font-bold text-slate-900">Document Approval Status</h2>
          <p className="prose-measure mt-2 text-sm leading-relaxed text-[var(--muted)]">
            Full versions of the Safeguarding Policy, Privacy Notice, Debate &amp; STEM Competition
            Rules, Prototype Safety Checklist, and Data Retention Schedule are under preparation.
            This page will be updated as each document is formally approved.
          </p>
        </section>

        <div className="rounded-md border border-[var(--border-strong)] bg-white p-6 text-sm text-slate-800">
          <strong className="font-mono-tech mr-2 text-xs uppercase text-[var(--primary)]">
            [LEGAL NOTICE]
          </strong>
          These summaries are not a substitute for formal legal documents. Final policies will be
          reviewed for compliance before any live student data is processed.
        </div>
      </div>
    </div>
  );
}
