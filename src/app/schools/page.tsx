import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Shield,
  BookOpen,
  Users,
  ClipboardCheck,
  ArrowRight,
  Mic,
  Atom,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Information for Schools",
};

export default function SchoolsPage() {
  return (
    <div>
      {/* Page Hero */}
      <section className="hero-surface relative overflow-hidden text-white">
        <div className="subtle-grid-pattern absolute inset-0 opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
                School Participation Guide
              </p>
              <h1 className="section-heading mt-2 font-extrabold tracking-tight text-white">
                Information for Secondary Schools
              </h1>
              <p className="prose-measure mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
                Secondary schools in Surulere and invited Lagos districts can field student squads
                across our Debate, STEM Olympiad, and STEM Innovation Showcase tracks through a
                streamlined teacher-coordinator process.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
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
                    className="border-white/30 bg-white/5 text-white hover:bg-white/15"
                  >
                    Review Competition Tracks
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
                <img
                  src="/images/schools-team.jpg"
                  alt="Nigerian secondary school students and their teacher coordinator reviewing debate and STEM preparation materials in a sunlit library"
                  fetchPriority="high"
                  width={1280}
                  height={720}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6 lg:py-18">
        {/* Track Selection for Schools */}
        <section>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
              Flexible Delegation Structure
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Tracks your school can enter
            </h2>
            <p className="prose-measure mt-2 text-[var(--muted)]">
              Schools may express interest in a single track or enter full delegations across all
              three championship divisions (final team quotas per school will be confirmed in the
              official rules).
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--secondary)] text-[var(--primary)]">
                <Mic className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Debate Squad</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Students represent their school in prepared and impromptu civic, ethical, and
                science/technology policy debates.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-800">
                <Atom className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">STEM Olympiad Squad</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Students tackle written analytical qualifiers and live stage buzzer rounds in
                Mathematics, Physics, Chemistry, Biology, and Computing.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-900">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Innovation Project Team</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Students exhibit a hardware, robotics, software, or applied science prototype with
                oversight from a science/technology teacher.
              </p>
            </div>
          </div>
        </section>

        {/* 4-Step Onboarding Process */}
        <section className="rounded-2xl border border-slate-200 bg-[var(--secondary)]/60 p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900">
            4-Step School Onboarding Pathway
          </h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Until the authenticated registration portal opens, schools follow this structured
            expression-of-interest workflow:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "Step 01",
                title: "Express Interest",
                desc: "School principal or designated teacher submits interest via the Contact page indicating preferred tracks.",
              },
              {
                step: "Step 02",
                title: "Coordinator Briefing",
                desc: "Organisers share the draft rulebook, motion themes, STEM Olympiad syllabus, and prototype safety standards.",
              },
              {
                step: "Step 03",
                title: "Safeguarding & Consent",
                desc: "Once portal security and formal policies are live, coordinators complete private team nomination and guardian consent.",
              },
              {
                step: "Step 04",
                title: "Prep & Championship",
                desc: "Teams attend orientation clinics, compete at STDSC, and connect with the Young Leaders Network & STEM Labs.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-xs"
              >
                <span className="text-xs font-extrabold uppercase tracking-wider text-[var(--primary)]">
                  {item.step}
                </span>
                <h3 className="mt-1.5 font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements & Support Grid */}
        <section className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <ClipboardCheck className="h-7 w-7 text-[var(--primary)]" />
            <h2 className="mt-4 text-xl font-bold text-slate-900">What Schools Provide</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
              {[
                "Designated teacher coordinator (Debate coach and/or STEM teacher).",
                "Squad nominations within published age and eligibility rules.",
                "Verifiable parental/guardian consent (handled privately).",
                "Adherence to the Code of Conduct, Safeguarding Policy, and STEM project safety rules.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <BookOpen className="h-7 w-7 text-[var(--primary)]" />
            <h2 className="mt-4 text-xl font-bold text-slate-900">Preparation Support</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Registered schools receive curated preparation packs including sample debate motions,
              adjudication rubrics, STEM Olympiad practice problem sets, and project pitch templates.
              Outstanding participants gain entry pathways into the{" "}
              <Link href="/young-leaders" className="font-semibold text-[var(--primary)] underline">
                Young Leaders Network &amp; STEM Labs
              </Link>
              .
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <Shield className="h-7 w-7 text-[var(--primary)]" />
            <h2 className="mt-4 text-xl font-bold text-slate-900">Student Data &amp; Privacy</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Student personal information is collected strictly as required for participation and
              is <strong>never published on public pages</strong>. Access is restricted to
              authenticated administrators. Production registration will not open until all privacy
              and safeguarding controls are verified.
            </p>
          </div>
        </section>

        {/* Placeholder Notice */}
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:flex-row sm:items-center">
          <p className="text-sm text-amber-950">
            <strong>Placeholder Notice:</strong> Registration deadlines, participation fees (if
            any), exact team quotas, and laboratory equipment guidelines are placeholders until
            confirmed in the official competition documents.
          </p>
          <Link href="/contact" className="shrink-0">
            <Button>Contact the Organisers</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
