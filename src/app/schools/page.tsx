import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Information for Schools",
};

export default function SchoolsPage() {
  return (
    <div>
      {/* Full-Bleed Background Image Hero with Subtle Directional Overlay */}
      <section className="relative isolate overflow-hidden border-b border-[var(--border)] bg-[#071326] text-white">
        <img
          src="/images/schools-team.jpg"
          alt="Nigerian secondary school students and their teacher coordinator reviewing debate and STEM preparation materials in a sunlit library"
          fetchPriority="high"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071326]/90 via-[#071326]/75 to-[#071326]/40"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 lg:py-26">
          <div className="max-w-2xl">
            <h1 className="hero-heading font-bold text-white">
              Information for Secondary Schools
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-100 sm:text-lg">
              Secondary schools in Surulere and invited Lagos districts nominate student squads
              across our Debate, STEM Olympiad, and STEM Innovation Showcase tracks through a
              single faculty coordinator workflow.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" variant="accent">
                  Express School Interest
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/format">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-black/25 text-white backdrop-blur-xs hover:bg-white/15"
                >
                  Examine Track Rules
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6 lg:py-24">
        {/* Delegation Composition Ledger */}
        <section>
          <div className="max-w-3xl">
            <p className="editorial-kicker text-[var(--primary)]">
              DELEGATION STRUCTURE
            </p>
            <h2 className="section-heading mt-2 font-bold text-slate-900">
              Three competitive divisions under one school registration.
            </h2>
            <p className="prose-measure mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              Schools may express interest in a single division or field a complete delegation
              across all three championship tracks. Final team quotas per school will be confirmed
              in the official competition rulebook.
            </p>
          </div>

          <div className="mt-10 grid divide-y divide-[var(--border)] rounded-md border border-[var(--border)] bg-white md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="p-6 sm:p-8">
              <span className="font-mono-tech text-xs font-bold text-[var(--primary)]">
                DIV-01 / DEBATE SQUAD
              </span>
              <h3 className="sub-heading mt-3 font-bold text-slate-900">
                Parliamentary &amp; Tech Policy Debate
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted)]">
                Students represent their school in prepared and impromptu civic, economic, and
                science/technology policy debates, coached by a debate or humanities teacher.
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <span className="font-mono-tech text-xs font-bold text-[var(--stem-teal)]">
                DIV-02 / OLYMPIAD SQUAD
              </span>
              <h3 className="sub-heading mt-3 font-bold text-slate-900">
                STEM Quiz &amp; Analytical Olympiad
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted)]">
                Students tackle written analytical qualifiers and live stage buzzer rounds in
                Mathematics, Physics, Chemistry, Biology, and Computing.
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <span className="font-mono-tech text-xs font-bold text-amber-900">
                DIV-03 / PROTOTYPE TEAM
              </span>
              <h3 className="sub-heading mt-3 font-bold text-slate-900">
                STEM Innovation Showcase
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted)]">
                Students exhibit a hardware, robotics, software, or applied science prototype built
                under the supervision of a science or technology teacher.
              </p>
            </div>
          </div>
        </section>

        {/* 4-Step Onboarding Ledger */}
        <section className="rounded-md border border-[var(--border)] bg-[var(--secondary)] p-6 sm:p-10">
          <div className="max-w-2xl">
            <p className="editorial-kicker text-[var(--primary)]">
              ONBOARDING SEQUENCE
            </p>
            <h2 className="section-heading mt-2 font-bold text-slate-900">
              How school coordinators register and prepare.
            </h2>
          </div>

          <div className="hairline-grid mt-8 grid overflow-clip rounded-md border border-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "STEP 01",
                title: "Express Interest",
                desc: "School principal or designated teacher submits interest via the Contact Desk indicating preferred tracks.",
              },
              {
                step: "STEP 02",
                title: "Coordinator Briefing",
                desc: "Organisers issue the draft rulebook, motion themes, STEM Olympiad syllabus, and prototype safety standards.",
              },
              {
                step: "STEP 03",
                title: "Safeguarding & Consent",
                desc: "Once portal security and formal policies are live, coordinators complete private squad nomination and guardian consent.",
              },
              {
                step: "STEP 04",
                title: "Tournament & Labs",
                desc: "Squads attend orientation clinics, compete at STDSC, and connect with the Young Leaders Network & STEM Labs.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white p-6">
                <span className="font-mono-tech text-xs font-bold text-[var(--accent)]">
                  {item.step}
                </span>
                <h3 className="mt-2 text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements, Preparation & Privacy Specification */}
        <section className="grid gap-8 lg:grid-cols-12">
          <div className="rounded-md border border-[var(--border)] bg-white p-6 sm:p-8 lg:col-span-6">
            <span className="editorial-kicker text-[var(--primary)]">
              REQ-01 / SCHOOL COMMITMENTS
            </span>
            <h2 className="sub-heading mt-2 font-bold text-slate-900">
              What Participating Schools Provide
            </h2>
            <ul className="mt-5 divide-y divide-[var(--border)] text-sm text-slate-700">
              {[
                "Designated faculty coordinator (Debate coach and/or STEM teacher).",
                "Student squad nominations within published age and eligibility bands.",
                "Verifiable parental or guardian consent (collected and stored privately).",
                "Full compliance with the Code of Conduct, Safeguarding Policy, and STEM prototype safety rules.",
              ].map((item, idx) => (
                <li key={item} className="flex items-baseline gap-3 py-3">
                  <span className="font-mono-tech text-xs font-bold text-[var(--primary)]">
                    0{idx + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:col-span-6">
            <div className="rounded-md border border-[var(--border)] bg-white p-6 sm:p-8">
              <span className="editorial-kicker text-[var(--stem-teal)]">
                REQ-02 / ACADEMIC SUPPORT
              </span>
              <h2 className="sub-heading mt-2 font-bold text-slate-900">
                Preparation Packs &amp; Syllabus Guidance
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                Registered schools receive curated preparation packs including sample debate
                motions, adjudication rubrics, STEM Olympiad practice problem sets, and project
                pitch templates. Standout students gain entry pathways into the{" "}
                <Link
                  href="/young-leaders"
                  className="font-semibold text-[var(--primary)] underline"
                >
                  Young Leaders Network &amp; STEM Labs
                </Link>
                .
              </p>
            </div>

            <div className="rounded-md border border-[var(--border)] bg-white p-6 sm:p-8">
              <span className="editorial-kicker text-amber-900">
                REQ-03 / DATA PROTECTION COVENANT
              </span>
              <h2 className="sub-heading mt-2 font-bold text-slate-900">
                Student Data &amp; Safeguarding Controls
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                Student personal information is collected strictly as required for participation and
                is <strong>never published on public pages</strong>. Access is restricted to
                authenticated administrators. Production registration will not open until all
                privacy and safeguarding controls are verified.
              </p>
            </div>
          </div>
        </section>

        {/* Placeholder Notice */}
        <div className="flex flex-col items-start justify-between gap-4 rounded-md border border-[var(--border-strong)] bg-white p-6 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-800">
            <strong className="font-mono-tech mr-2 text-xs uppercase text-[var(--primary)]">
              [PLACEHOLDER STATUS]
            </strong>
            Registration deadlines, participation fees (if any), exact team quotas, and laboratory
            equipment guidelines are placeholders until confirmed in the official competition
            documents.
          </p>
          <Link href="/contact" className="shrink-0">
            <Button>Contact the Organisers</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
