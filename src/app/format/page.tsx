import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Mic,
  Atom,
  Cpu,
  Scale,
  CheckCircle2,
  ShieldCheck,
  Award,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Debate & STEM Championship Format",
};

export default function FormatPage() {
  return (
    <div>
      {/* Page Hero */}
      <section className="hero-surface relative overflow-hidden text-white">
        <div className="subtle-grid-pattern absolute inset-0 opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-18">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
              Competition Architecture
            </p>
            <h1 className="section-heading mt-2 font-extrabold tracking-tight text-white">
              Debate &amp; STEM Championship Format
            </h1>
            <p className="prose-measure mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
              The Surulere Teens Debate &amp; STEM Championship (STDSC) combines three distinct yet
              complementary competitive tracks: Parliamentary &amp; Policy Debate, the STEM Quiz
              &amp; Olympiad, and the Applied STEM Innovation Showcase.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5 text-xs font-semibold">
              <a
                href="#debate"
                className="rounded-lg border border-white/20 bg-white/10 px-3.5 py-2 text-white transition-colors hover:bg-white/20"
              >
                01. Debate &amp; Tech Policy
              </a>
              <a
                href="#olympiad"
                className="rounded-lg border border-white/20 bg-white/10 px-3.5 py-2 text-white transition-colors hover:bg-white/20"
              >
                02. STEM Quiz &amp; Olympiad
              </a>
              <a
                href="#showcase"
                className="rounded-lg border border-white/20 bg-white/10 px-3.5 py-2 text-white transition-colors hover:bg-white/20"
              >
                03. STEM Innovation Showcase
              </a>
              <a
                href="#adjudication"
                className="rounded-lg border border-white/20 bg-white/10 px-3.5 py-2 text-white transition-colors hover:bg-white/20"
              >
                04. Adjudication &amp; Rules
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6 lg:py-18">
        {/* Track 1: Debate */}
        <section
          id="debate"
          className="scroll-mt-24 grid items-center gap-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-bold text-[var(--primary)]">
              <Mic className="h-3.5 w-3.5" />
              <span>Track 01 • Competitive Debate</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              Parliamentary Debate &amp; Science/Tech Policy Motions
            </h2>
            <p className="prose-measure mt-3 text-[var(--muted)]">
              School teams compete across preliminary rounds followed by knockout stages. Alongside
              classic civic, economic, and educational themes, STDSC integrates dedicated{" "}
              <strong className="font-semibold text-slate-900">
                Science, Technology &amp; Ethics policy motions
              </strong>{" "}
              — challenging debaters to engage with artificial intelligence, renewable energy
              transitions, digital privacy, and public health policy.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-[var(--secondary)]/60 p-4">
                <h3 className="text-sm font-bold text-slate-900">Prepared &amp; Impromptu Rounds</h3>
                <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">
                  Prepared motions are released ahead of the tournament for deep research; impromptu
                  motions test rapid analytical synthesis under timed room conditions.
                </p>
              </div>
              <div className="rounded-xl bg-[var(--secondary)]/60 p-4">
                <h3 className="text-sm font-bold text-slate-900">Three-Pillar Scoring</h3>
                <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">
                  Adjudicators score speakers on <strong>Content</strong> (logic &amp; evidence),{" "}
                  <strong>Style</strong> (clarity &amp; persuasion), and <strong>Strategy</strong>{" "}
                  (clash, structure &amp; time management).
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <img
                src="/images/format-adjudication.jpg"
                alt="Nigerian secondary school debater speaking before a three-member adjudication panel"
                fetchPriority="high"
                width={1280}
                height={720}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Track 2: STEM Quiz & Olympiad */}
        <section
          id="olympiad"
          className="scroll-mt-24 grid items-center gap-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8 lg:grid-cols-12"
        >
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <img
                src="/images/stem-olympiad.jpg"
                alt="Team of three Nigerian students collaborating over scientific calculators and physics scratchpads at an Olympiad buzzer desk"
                loading="lazy"
                width={1280}
                height={720}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-800">
              <Atom className="h-3.5 w-3.5" />
              <span>Track 02 • STEM Quiz &amp; Olympiad</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              Multi-Disciplinary STEM Quiz &amp; Analytical Olympiad
            </h2>
            <p className="prose-measure mt-3 text-[var(--muted)]">
              Designed to celebrate quantitative rigor and scientific reasoning, the STEM Olympiad
              challenges school squads across five core secondary school disciplines:
              <strong> Mathematics, Physics, Chemistry, Biology, and Computing/Logic</strong>.
            </p>

            <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-700" />
                <span>
                  <strong>Foundational &amp; Analytical Qualifier:</strong> Collaborative written
                  and structured problem-solving rounds establishing team rankings.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-700" />
                <span>
                  <strong>Live Stage Buzzer Finals:</strong> Timed head-to-head rounds featuring
                  rapid computation, scientific deduction, and team-conferred bonus challenges.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-700" />
                <span>
                  <strong>Age-Appropriate Syllabus:</strong> Aligned with Nigerian senior and junior
                  secondary curricula (exact age/class bands to be published in official rules).
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Track 3: STEM Innovation Showcase */}
        <section
          id="showcase"
          className="scroll-mt-24 grid items-center gap-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-900">
              <Cpu className="h-3.5 w-3.5" />
              <span>Track 03 • STEM Innovation &amp; Project Showcase</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              Robotics, Coding &amp; Applied Science Exhibition
            </h2>
            <p className="prose-measure mt-3 text-[var(--muted)]">
              School teams bring theory to life by exhibiting original prototypes, software tools,
              or experimental models addressing practical challenges in Surulere and wider urban
              communities — from clean energy and smart agriculture to civic technology.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: "Scientific & Technical Rigor",
                  desc: "Sound engineering principles, data collection, or code quality.",
                },
                {
                  title: "Community Impact",
                  desc: "Clear relevance to real-world problems in education, environment, or health.",
                },
                {
                  title: "Prototype Execution",
                  desc: "Working demonstration, safety compliance, and resourcefulness.",
                },
                {
                  title: "Oral Defense & Pitch",
                  desc: "Ability to explain methodology and answer technical judge Q&A clearly.",
                },
              ].map((criterion) => (
                <div
                  key={criterion.title}
                  className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5"
                >
                  <h3 className="text-xs font-bold uppercase tracking-wide text-[var(--primary)]">
                    {criterion.title}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--muted)]">{criterion.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <img
                src="/images/stem-showcase.jpg"
                alt="Three Nigerian secondary school students demonstrating a solar robotics prototype to two judges"
                loading="lazy"
                width={1280}
                height={720}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Governance, Eligibility, Adjudication & Awards */}
        <section id="adjudication" className="scroll-mt-24 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <ShieldCheck className="h-7 w-7 text-[var(--primary)]" />
            <h3 className="mt-4 text-lg font-bold text-slate-900">Eligibility &amp; Safeguarding</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              Open to secondary school students registered through their schools. Age bands, team
              sizes per track, and lab safety rules for physical prototypes will be set out in the
              official competition rulebook. Student personal data is never publicly exposed.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <Scale className="h-7 w-7 text-[var(--primary)]" />
            <h3 className="mt-4 text-lg font-bold text-slate-900">Independent Judging Panels</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              Debate rounds are scored by trained adjudicators; STEM Olympiad and Innovation
              Showcase entries are evaluated by educators, scientists, and engineers using
              transparent rubrics and constructive feedback.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <Award className="h-7 w-7 text-[var(--primary)]" />
            <h3 className="mt-4 text-lg font-bold text-slate-900">Recognition &amp; YLN Induction</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              Team results and awards are published after the championship. Standout debaters,
              Olympiad scholars, and student inventors are invited into the{" "}
              <Link href="/young-leaders" className="font-semibold text-[var(--primary)] underline">
                Young Leaders Network &amp; STEM Labs
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Placeholder Notice & CTA */}
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:flex-row sm:items-center">
          <div className="text-sm text-amber-950">
            <strong>Status Notice:</strong> Full competition rulebooks, motion banks, STEM Olympiad
            syllabi, prototype safety guidelines, and event schedules are currently in draft and
            will replace placeholders once confirmed by the organising committee.
          </div>
          <Link href="/schools" className="shrink-0">
            <Button size="sm">
              School Information
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
