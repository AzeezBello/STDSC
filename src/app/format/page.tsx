import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Debate & STEM Championship Format",
};

export default function FormatPage() {
  return (
    <div>
      {/* Full-Bleed Background Image Hero with Subtle Directional Overlay */}
      <section className="relative isolate overflow-hidden border-b border-[var(--border)] bg-[#071326] text-white">
        <img
          src="/images/format-adjudication.jpg"
          alt="Nigerian secondary school debater speaking before a three-member adjudication panel"
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
          <div className="max-w-3xl">
            <h1 className="hero-heading font-bold text-white">
              Debate &amp; STEM Championship Format
            </h1>
            <p className="prose-measure mt-5 text-base leading-relaxed text-slate-100 sm:text-lg">
              The Surulere Teens Debate &amp; STEM Championship (STDSC) is structured across three
              complementary competitive arenas: Parliamentary &amp; Policy Debate, the STEM Quiz
              &amp; Olympiad, and the Applied STEM Innovation Showcase.
            </p>

            {/* Architectural Anchor Index */}
            <nav
              aria-label="Section index"
              className="mt-8 grid grid-cols-2 gap-px overflow-clip rounded-xs border border-white/25 bg-white/20 sm:grid-cols-4"
            >
              {[
                { href: "#debate", code: "TRK-01", label: "Debate & Tech Policy" },
                { href: "#olympiad", code: "TRK-02", label: "STEM Quiz & Olympiad" },
                { href: "#showcase", code: "TRK-03", label: "Innovation Showcase" },
                { href: "#governance", code: "GOV-04", label: "Judging & Rules" },
              ].map((tab) => (
                <a
                  key={tab.href}
                  href={tab.href}
                  className="bg-[#071326]/90 p-3.5 transition-colors hover:bg-[#0d213f]"
                >
                  <span className="font-mono-tech block text-[10px] font-bold text-[var(--accent)]">
                    {tab.code}
                  </span>
                  <span className="mt-0.5 block text-xs font-semibold text-white">
                    {tab.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6 lg:py-24">
        {/* Track 01: Debate */}
        <section id="debate" className="scroll-mt-24">
          <div className="grid items-start gap-10 border-t-2 border-[var(--primary)] pt-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="editorial-kicker text-[var(--primary)]">
                TRK-01 / PARLIAMENTARY &amp; POLICY CHAMBER
              </p>
              <h2 className="section-heading mt-2 font-bold text-slate-900">
                Parliamentary Debate &amp; Science/Tech Policy Motions
              </h2>
              <p className="prose-measure mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                School teams compete across preliminary rounds followed by knockout stages.
                Alongside foundational civic, economic, and educational themes, STDSC integrates
                dedicated{" "}
                <strong className="font-semibold text-slate-900">
                  Science, Technology &amp; Ethics policy motions
                </strong>
                . Speakers evaluate emerging technologies, environmental resilience, digital
                governance, and public health interventions.
              </p>

              {/* Hairline Specification Table */}
              <div className="mt-8 grid divide-y divide-[var(--border)] rounded-md border border-[var(--border)] bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <div className="p-5">
                  <span className="font-mono-tech text-[11px] font-bold text-[var(--primary)]">
                    01 / CONTENT (40%)
                  </span>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                    Analytical depth, logical rigor, factual accuracy, and direct engagement with
                    scientific or policy evidence.
                  </p>
                </div>
                <div className="p-5">
                  <span className="font-mono-tech text-[11px] font-bold text-[var(--primary)]">
                    02 / STYLE (40%)
                  </span>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                    Clarity of expression, rhetorical poise, vocal pacing, and persuasive audience
                    connection without reliance on jargon.
                  </p>
                </div>
                <div className="p-5">
                  <span className="font-mono-tech text-[11px] font-bold text-[var(--primary)]">
                    03 / STRATEGY (20%)
                  </span>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                    Speech structure, prioritisation of key clashes, role fulfilment, and disciplined
                    time management.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <figure className="overflow-hidden rounded-md border border-[var(--border)] bg-white">
                <img
                  src="/images/format-adjudication.jpg"
                  alt="Nigerian secondary school debater speaking before a three-member adjudication panel"
                  fetchPriority="high"
                  width={1280}
                  height={720}
                  className="aspect-[16/10] w-full object-cover"
                />
                <figcaption className="font-mono-tech border-t border-[var(--border)] px-4 py-3 text-[11px] text-[var(--muted)]">
                  FIG 01 / THREE-MEMBER ADJUDICATION PANEL &amp; TIMED FLOOR SPEECH
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Track 02: STEM Quiz & Olympiad */}
        <section id="olympiad" className="scroll-mt-24">
          <div className="grid items-start gap-10 border-t-2 border-[var(--stem-teal)] pt-8 lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <figure className="overflow-hidden rounded-md border border-[var(--border)] bg-white">
                <img
                  src="/images/stem-olympiad.jpg"
                  alt="Team of three Nigerian students collaborating over scientific calculators and physics scratchpads at an Olympiad buzzer desk"
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="aspect-[16/10] w-full object-cover"
                />
                <figcaption className="font-mono-tech border-t border-[var(--border)] px-4 py-3 text-[11px] text-[var(--muted)]">
                  FIG 02 / COLLABORATIVE COMPUTATION &amp; STAGE BUZZER FINALS
                </figcaption>
              </figure>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-7">
              <p className="editorial-kicker text-[var(--stem-teal)]">
                TRK-02 / QUANTITATIVE &amp; ANALYTICAL ARENA
              </p>
              <h2 className="section-heading mt-2 font-bold text-slate-900">
                Multi-Disciplinary STEM Quiz &amp; Olympiad
              </h2>
              <p className="prose-measure mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                Built to reward conceptual mastery and collaborative problem-solving under time
                constraints, the STEM Olympiad tests school squads across five secondary school
                disciplines: <strong>Mathematics, Physics, Chemistry, Biology, and Computing</strong>.
              </p>

              <div className="mt-8 divide-y divide-[var(--border)] rounded-md border border-[var(--border)] bg-white">
                {[
                  {
                    stage: "STAGE A / WRITTEN & ANALYTICAL QUALIFIER",
                    desc: "Structured multi-step problems completed collaboratively by school squads to establish seeding for the knockout rounds.",
                  },
                  {
                    stage: "STAGE B / RAPID-RESPONSE & BUZZER ROUNDS",
                    desc: "Live auditorium stage rounds featuring timed individual computations, team-conferred bonus questions, and visual data interpretation.",
                  },
                  {
                    stage: "STAGE C / CURRICULUM ALIGNMENT",
                    desc: "Questions are calibrated to Nigerian secondary school science and mathematics standards (exact class bands to be published in official rules).",
                  },
                ].map((item) => (
                  <div key={item.stage} className="p-4 sm:p-5">
                    <h3 className="font-mono-tech text-xs font-bold text-[var(--stem-teal)]">
                      {item.stage}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Track 03: STEM Innovation Showcase */}
        <section id="showcase" className="scroll-mt-24">
          <div className="grid items-start gap-10 border-t-2 border-[var(--accent)] pt-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="editorial-kicker text-amber-900">
                TRK-03 / APPLIED ENGINEERING &amp; PROTOTYPE EXHIBITION
              </p>
              <h2 className="section-heading mt-2 font-bold text-slate-900">
                Robotics, Coding &amp; Applied Science Showcase
              </h2>
              <p className="prose-measure mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                School teams translate classroom theory into tangible prototypes, software
                applications, or experimental models addressing real challenges in Surulere and
                wider urban communities, including clean energy, smart agriculture, environmental
                monitoring, and educational technology.
              </p>

              <div className="mt-8 grid divide-y divide-[var(--border)] rounded-md border border-[var(--border)] bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                <div className="divide-y divide-[var(--border)]">
                  <div className="p-5">
                    <span className="font-mono-tech text-[11px] font-bold text-amber-900">
                      CRITERION 01 / SCIENTIFIC RIGOR
                    </span>
                    <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">
                      Sound engineering design, reproducible methodology, data logging, or clean
                      software architecture.
                    </p>
                  </div>
                  <div className="p-5">
                    <span className="font-mono-tech text-[11px] font-bold text-amber-900">
                      CRITERION 02 / COMMUNITY RELEVANCE
                    </span>
                    <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">
                      Direct applicability to practical problems faced by schools, households, or
                      enterprises in Lagos.
                    </p>
                  </div>
                </div>
                <div className="divide-y divide-[var(--border)]">
                  <div className="p-5">
                    <span className="font-mono-tech text-[11px] font-bold text-amber-900">
                      CRITERION 03 / PROTOTYPE EXECUTION
                    </span>
                    <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">
                      Working live demonstration, resourcefulness with materials, and strict
                      adherence to venue safety rules.
                    </p>
                  </div>
                  <div className="p-5">
                    <span className="font-mono-tech text-[11px] font-bold text-amber-900">
                      CRITERION 04 / ORAL DEFENSE
                    </span>
                    <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">
                      Clarity of team pitch and ability to answer technical cross-examination from
                      reviewing scientists and engineers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <figure className="overflow-hidden rounded-md border border-[var(--border)] bg-white">
                <img
                  src="/images/stem-showcase.jpg"
                  alt="Three Nigerian secondary school students demonstrating a solar robotics prototype to two judges"
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="aspect-[16/10] w-full object-cover"
                />
                <figcaption className="font-mono-tech border-t border-[var(--border)] px-4 py-3 text-[11px] text-[var(--muted)]">
                  FIG 03 / PROTOTYPE INSPECTION &amp; TECHNICAL CROSS-EXAMINATION
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Governance, Eligibility & Recognition Ledger */}
        <section
          id="governance"
          className="scroll-mt-24 grid divide-y divide-[var(--border)] rounded-md border border-[var(--border)] bg-[var(--secondary)] md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          <div className="p-6 sm:p-8">
            <span className="font-mono-tech text-xs font-bold text-[var(--primary)]">
              GOV-01 / ELIGIBILITY &amp; SAFEGUARDING
            </span>
            <h3 className="sub-heading mt-3 font-bold text-slate-900">
              School-Nominated Squads
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted)]">
              Open to secondary school students registered through their school coordinator. Age
              bands, team sizes per track, and prototype safety standards will be published in the
              official rulebook. Student personal data is never publicly exposed.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <span className="font-mono-tech text-xs font-bold text-[var(--primary)]">
              GOV-02 / INDEPENDENT PANELS
            </span>
            <h3 className="sub-heading mt-3 font-bold text-slate-900">
              Adjudicators &amp; STEM Judges
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted)]">
              Debate chambers are scored by trained adjudicators. STEM Olympiad and Innovation
              Showcase entries are evaluated by educators, scientists, and engineers using published
              rubrics and constructive feedback.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <span className="font-mono-tech text-xs font-bold text-[var(--primary)]">
              GOV-03 / FELLOWSHIP INDUCTION
            </span>
            <h3 className="sub-heading mt-3 font-bold text-slate-900">
              Results &amp; YLN Pathway
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted)]">
              Aggregate team results and awards are published after the championship. Standout
              debaters, Olympiad finalists, and student inventors are invited into the{" "}
              <Link href="/young-leaders" className="font-semibold text-[var(--primary)] underline">
                Young Leaders Network &amp; STEM Labs
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Placeholder Notice */}
        <div className="flex flex-col items-start justify-between gap-4 rounded-md border border-[var(--border-strong)] bg-white p-6 sm:flex-row sm:items-center">
          <div className="text-sm text-slate-800">
            <strong className="font-mono-tech mr-2 text-xs uppercase text-[var(--primary)]">
              [PLACEHOLDER STATUS]
            </strong>
            Full competition rulebooks, motion banks, STEM Olympiad syllabi, prototype safety
            checklists, and event schedules are in draft and will replace placeholders once
            confirmed.
          </div>
          <Link href="/schools" className="shrink-0">
            <Button size="sm">
              School Delegation Guide
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
