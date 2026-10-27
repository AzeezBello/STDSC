import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Full-Bleed Background Image Hero with Subtle Directional Overlay */}
      <section className="relative isolate overflow-hidden border-b border-[var(--border)] bg-[#071326] text-white">
        {/* Background LCP Image */}
        <img
          src="/images/hero-debate.jpg"
          alt="Nigerian secondary school student speaking at a debate lectern in a Lagos auditorium while teammates take notes"
          fetchPriority="high"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        {/* Subtle directional overlay that preserves image visibility on the right while anchoring text contrast on the left */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071326]/90 via-[#071326]/70 to-[#071326]/35"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071326]/80 via-transparent to-[#071326]/30"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <h1 className="hero-heading font-bold text-white">
              Where articulate voices meet scientific inquiry.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-100 sm:text-lg">
              STDSC convenes secondary school students across Surulere and invited Lagos schools
              for a flagship academic championship uniting{" "}
              <strong className="font-semibold text-white">
                Parliamentary &amp; Tech Policy Debate
              </strong>
              ,{" "}
              <strong className="font-semibold text-white">
                STEM Quiz &amp; Olympiad Rounds
              </strong>
              , and a live{" "}
              <strong className="font-semibold text-white">
                STEM Innovation Showcase
              </strong>
              .
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link href="/schools" className="w-full sm:w-auto">
                <Button size="lg" variant="accent" className="w-full justify-center sm:w-auto">
                  Register School Interest
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/format" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full justify-center border-white/40 bg-black/25 text-white backdrop-blur-xs hover:bg-white/15 sm:w-auto"
                >
                  Explore Format &amp; Tracks
                </Button>
              </Link>
            </div>
          </div>

          {/* Bottom Hero Metadata Bar */}
          <dl className="mt-14 grid max-w-3xl grid-cols-1 gap-4 border-t border-white/20 pt-6 sm:grid-cols-3 sm:gap-8">
            <div>
              <dt className="font-mono-tech text-[11px] uppercase text-slate-300">
                01 / Competitive Tracks
              </dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                Debate • STEM Olympiad • Lab Showcase
              </dd>
            </div>
            <div className="sm:border-l sm:border-white/20 sm:pl-6">
              <dt className="font-mono-tech text-[11px] uppercase text-slate-300">
                02 / Post-Event Pathway
              </dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                Young Leaders Network &amp; STEM Labs
              </dd>
            </div>
            <div className="sm:border-l sm:border-white/20 sm:pl-6">
              <dt className="font-mono-tech text-[11px] uppercase text-slate-300">
                03 / Governance
              </dt>
              <dd className="mt-1 text-sm font-semibold text-[var(--accent)]">
                Safeguarding &amp; Privacy First
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Architectural Status Ledger Bar */}
      <section className="border-b border-[var(--border)] bg-[var(--secondary)]">
        <div className="mx-auto grid max-w-6xl divide-y divide-[var(--border)] px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6">
          <div className="py-3.5 sm:pr-6">
            <span className="font-mono-tech block text-[10px] uppercase text-[var(--muted)]">
              HOST JURISDICTION
            </span>
            <span className="text-xs font-semibold text-slate-900">
              Surulere LGA &amp; Invited Lagos Schools (Venue TBC)
            </span>
          </div>
          <div className="py-3.5 sm:px-6">
            <span className="font-mono-tech block text-[10px] uppercase text-[var(--muted)]">
              CHAMPIONSHIP CALENDAR
            </span>
            <span className="text-xs font-semibold text-slate-900">
              Dates Marked as Placeholder Until Confirmed
            </span>
          </div>
          <div className="flex items-center justify-between py-3.5 sm:pl-6">
            <div>
              <span className="font-mono-tech block text-[10px] uppercase text-[var(--muted)]">
                DELEGATION INTAKE
              </span>
              <span className="text-xs font-semibold text-[var(--primary)]">
                Coordinator Expressions of Interest Open
              </span>
            </div>
            <Link
              href="/schools"
              className="font-mono-tech text-xs font-bold uppercase text-[var(--primary)] underline decoration-[var(--accent)] decoration-2 underline-offset-4"
            >
              Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 02: Asymmetric Bento Grid of the Four Pillars */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid items-end gap-6 border-b border-[var(--border)] pb-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="editorial-kicker text-[var(--primary)]">
              PROGRAMME ARCHITECTURE
            </p>
            <h2 className="section-heading mt-2 font-bold text-slate-900">
              Three competitive arenas and a year-round laboratory fellowship.
            </h2>
          </div>
          <p className="prose-measure text-sm leading-relaxed text-[var(--muted)] lg:col-span-5">
            Modern challenges require young citizens who can both engineer rigorous technical
            systems and defend their ethical and civic consequences. STDSC unites humanities and
            applied sciences within one structured tournament.
          </p>
        </div>

        {/* Asymmetric 12-Column Bento Matrix */}
        <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-12">
          {/* Track 01: 7 Columns */}
          <article className="bento-card group flex flex-col justify-between rounded-md border border-[var(--border)] bg-white p-5 transition-colors hover:border-[var(--primary)] sm:p-8 lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border)] pb-4">
                <span className="font-mono-tech text-xs font-bold text-[var(--primary)]">
                  TRK-01 / PARLIAMENTARY &amp; POLICY CHAMBER
                </span>
                <span className="font-mono-tech rounded-xs bg-[var(--secondary)] px-2.5 py-1 text-[11px] font-semibold text-slate-800">
                  PRELIMINARIES → KNOCKOUTS
                </span>
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-12">
                <div className="sm:col-span-7">
                  <h3 className="sub-heading font-bold text-slate-900">
                    Debate &amp; Science Policy Motions
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    School teams clash across prepared and impromptu motions spanning civic
                    governance, economic policy, artificial intelligence ethics, climate adaptation,
                    and public health. Scored by trained adjudicators on content, style, and
                    strategy.
                  </p>
                </div>
                <div className="sm:col-span-5">
                  <img
                    src="/images/format-adjudication.jpg"
                    alt="Student debater addressing a panel of three Nigerian adjudicators with a digital timer"
                    loading="lazy"
                    width={1280}
                    height={720}
                    className="aspect-[16/10] sm:aspect-[4/3] w-full rounded-xs border border-[var(--border)] object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-[var(--border)]/60 pt-4">
              <Link
                href="/format#debate"
                className="font-mono-tech inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[var(--primary)] group-hover:underline"
              >
                Inspect Debate Rubric &amp; Structure
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>

          {/* Track 02: 5 Columns */}
          <article className="bento-card group flex flex-col justify-between rounded-md border border-[var(--border)] bg-white p-5 transition-colors hover:border-[var(--stem-teal)] sm:p-8 lg:col-span-5">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border)] pb-4">
                <span className="font-mono-tech text-xs font-bold text-[var(--stem-teal)]">
                  TRK-02 / QUANTITATIVE ARENA
                </span>
                <span className="font-mono-tech rounded-xs bg-[var(--stem-teal-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--stem-teal)]">
                  5 STEM DOMAINS
                </span>
              </div>
              <h3 className="sub-heading mt-6 font-bold text-slate-900">
                Competitive STEM Quiz &amp; Olympiad
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                High-tempo analytical qualifiers and live stage buzzer finals testing conceptual
                mastery in Mathematics, Physics, Chemistry, Biology, and Computing.
              </p>
              <div className="mt-5 overflow-clip rounded-xs border border-[var(--border)]">
                <img
                  src="/images/stem-olympiad.jpg"
                  alt="Team of three Nigerian secondary school students solving physics and mathematics problems at an Olympiad buzzer table"
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-6 border-t border-[var(--border)]/60 pt-4">
              <Link
                href="/format#olympiad"
                className="font-mono-tech inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[var(--stem-teal)] group-hover:underline"
              >
                View Olympiad Disciplines
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>

          {/* Track 03: 5 Columns */}
          <article className="bento-card group flex flex-col justify-between rounded-md border border-[var(--border)] bg-white p-5 transition-colors hover:border-[var(--accent)] sm:p-8 lg:col-span-5">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border)] pb-4">
                <span className="font-mono-tech text-xs font-bold text-amber-900">
                  TRK-03 / PROTOTYPE EXHIBITION
                </span>
                <span className="font-mono-tech rounded-xs bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] font-semibold text-amber-950">
                  APPLIED LAB
                </span>
              </div>
              <h3 className="sub-heading mt-6 font-bold text-slate-900">
                STEM Innovation &amp; Project Showcase
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                Student teams design, build, and defend working hardware or software prototypes
                addressing urban challenges in Surulere, from solar micro-grids to civic software.
              </p>
              <div className="mt-5 overflow-clip rounded-xs border border-[var(--border)]">
                <img
                  src="/images/stem-showcase.jpg"
                  alt="Secondary school team presenting a solar-powered agriculture robot prototype to STEM judges"
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-6 border-t border-[var(--border)]/60 pt-4">
              <Link
                href="/format#showcase"
                className="font-mono-tech inline-flex items-center gap-1.5 text-xs font-bold uppercase text-amber-900 group-hover:underline"
              >
                Examine Exhibition Criteria
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>

          {/* Track 04: 7 Columns */}
          <article className="bento-card group flex flex-col justify-between rounded-md border border-[var(--border)] bg-[var(--secondary)] p-5 transition-colors hover:border-[var(--primary)] sm:p-8 lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-strong)] pb-4">
                <span className="font-mono-tech text-xs font-bold text-[var(--primary)]">
                  FELLOWSHIP / POST-CHAMPIONSHIP PIPELINE
                </span>
                <span className="font-mono-tech rounded-xs bg-white px-2.5 py-1 text-[11px] font-semibold text-[var(--primary)]">
                  YEAR-ROUND COHORT
                </span>
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-12">
                <div className="sm:col-span-7">
                  <h3 className="sub-heading font-bold text-slate-900">
                    Young Leaders Network &amp; STEM Labs
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    The championship is a launchpad, not a single day. Standout debaters, Olympiad
                    scholars, and prototype builders are inducted into an ongoing fellowship
                    featuring coding and robotics bootcamps, policy seminars, and mentorship with
                    Nigerian scientists, educators, and civic leaders.
                  </p>
                </div>
                <div className="sm:col-span-5">
                  <img
                    src="/images/young-leaders.jpg"
                    alt="Nigerian mentor leading an interactive roundtable seminar with teenage leaders in a Lagos seminar room"
                    loading="lazy"
                    width={1280}
                    height={720}
                    className="aspect-[16/10] sm:aspect-[4/3] w-full rounded-xs border border-[var(--border)] object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-[var(--border-strong)]/60 pt-4">
              <Link
                href="/young-leaders"
                className="font-mono-tech inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[var(--primary)] group-hover:underline"
              >
                Explore the Fellowship &amp; STEM Labs
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Section 03: School Delegation Ledger */}
      <section className="border-y border-[var(--border)] bg-[var(--secondary)] py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="editorial-kicker text-[var(--primary)]">
                SECONDARY SCHOOL DELEGATIONS
              </p>
              <h2 className="section-heading mt-2 font-bold text-slate-900">
                Built around school coordinators and academic coaches.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                Secondary schools in Surulere and invited districts nominate squads through a
                designated teacher coordinator. Schools may enter a single track or field a complete
                delegation across Debate, the STEM Olympiad, and the Innovation Showcase.
              </p>

              <figure className="mt-6 overflow-hidden rounded-md border border-[var(--border)] bg-white">
                <img
                  src="/images/schools-team.jpg"
                  alt="Nigerian secondary school students and their teacher coordinator preparing debate and STEM briefs in a school library"
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="aspect-[16/10] w-full object-cover"
                />
                <figcaption className="font-mono-tech border-t border-[var(--border)] px-4 py-2.5 text-[11px] text-[var(--muted)]">
                  FIG 03 / FACULTY-SUPERVISED SQUAD PREPARATION
                </figcaption>
              </figure>
            </div>

            <div className="lg:col-span-7">
              <div className="divide-y divide-[var(--border)] rounded-md border border-[var(--border)] bg-white">
                {[
                  {
                    index: "01",
                    title: "Unified Teacher Coordinator Point of Contact",
                    detail:
                      "One designated faculty member coordinates communication, receives the competition briefing pack, and oversees debate coaches and science teachers.",
                  },
                  {
                    index: "02",
                    title: "Curriculum-Aligned Briefings & Practice Sets",
                    detail:
                      "Registered schools receive prepared debate motions, adjudication guides, STEM Olympiad syllabus topics, and prototype safety checklists ahead of the tournament.",
                  },
                  {
                    index: "03",
                    title: "Child Safeguarding & Non-Public Student Records",
                    detail:
                      "Student personal information is never displayed on public website pages. Production registration opens only after authentication, role-based access control, and formal safeguarding documents are in place.",
                  },
                  {
                    index: "04",
                    title: "Pathway into the Young Leaders Network & STEM Labs",
                    detail:
                      "Outstanding speakers, Olympiad finalists, and student inventors receive invitations to post-championship workshops, mentorship, and lab sessions.",
                  },
                ].map((row) => (
                  <div
                    key={row.index}
                    className="grid gap-4 p-6 sm:grid-cols-12 sm:items-baseline"
                  >
                    <span className="font-mono-tech text-xs font-bold text-[var(--accent)] sm:col-span-2">
                      STEP {row.index}
                    </span>
                    <div className="sm:col-span-10">
                      <h3 className="text-base font-bold text-slate-900">{row.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
                        {row.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/schools">
                  <Button size="lg">Read Full School Guide</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="bg-white">
                    Express School Interest
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Institutional Patronage & Governance Notice */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid items-center gap-10 rounded-md border border-[var(--border)] bg-[#071326] p-6 text-white sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="editorial-kicker text-[var(--accent)]">
              INSTITUTIONAL PATRONAGE
            </p>
            <h2 className="section-heading mt-2 font-bold text-white">
              Partner with STDSC to invest in youth intellect and STEM capability.
            </h2>
            <p className="prose-measure mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Corporate sponsors, engineering firms, educational foundations, and civic institutions
              enable the championship through tiered sponsorships, school STEM kit grants, workshop
              hosting, and named category awards.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/sponsors">
                <Button size="lg" variant="accent">
                  Review Sponsorship Tiers
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Contact the Organising Committee
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="overflow-hidden rounded-xs border border-white/15 bg-[#0d213f]">
              <img
                src="/images/sponsors-impact.jpg"
                alt="Championship gold trophy on a mahogany podium with secondary school students applauding in the background"
                loading="lazy"
                width={1280}
                height={720}
                className="aspect-[16/10] w-full object-cover"
              />
              <figcaption className="border-t border-white/15 p-4 text-xs leading-relaxed text-slate-300">
                <strong className="font-mono-tech block uppercase text-[var(--accent)]">
                  TRANSPARENCY &amp; PLACEHOLDER DISCLOSURE
                </strong>
                Event dates, venue, confirmed organisers, and partner logos remain marked as
                placeholders until formally confirmed.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
