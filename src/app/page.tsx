import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Trophy,
  BookOpen,
  Shield,
  Atom,
  Cpu,
  Mic,
  CheckCircle2,
  Sparkles,
  Calendar,
  MapPin,
  Award,
} from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-surface relative overflow-hidden text-white">
        <div className="subtle-grid-pattern absolute inset-0 opacity-70 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Hero Copy */}
            <div className="lg:col-span-7">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[var(--accent)] backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Surulere Teens Debate &amp; STEM Championship (STDSC)</span>
              </div>

              <h1 className="hero-heading font-extrabold tracking-tight text-white">
                Where articulate voices meet scientific innovation
              </h1>

              <p className="prose-measure mt-6 text-lg leading-relaxed text-slate-200">
                STDSC brings secondary school students across Surulere and invited Lagos schools
                together for a flagship academic championship — uniting{" "}
                <strong className="font-semibold text-white">competitive debate</strong>,{" "}
                <strong className="font-semibold text-white">STEM Quiz &amp; Olympiad rounds</strong>,
                and a hands-on{" "}
                <strong className="font-semibold text-white">
                  STEM Innovation &amp; Project Showcase
                </strong>
                .
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/schools">
                  <Button size="lg" variant="accent">
                    Register School Interest
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/format">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-white/5 text-white hover:bg-white/15"
                  >
                    Explore Debate &amp; STEM Tracks
                  </Button>
                </Link>
              </div>

              {/* Quick Trust Pills */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/15 pt-6 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Core Pillars
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Debate • Olympiad • Prototype Lab
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Post-Event Pathway
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Young Leaders &amp; STEM Labs
                  </p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Governance
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[var(--accent)]">
                    Safeguarding &amp; Privacy First
                  </p>
                </div>
              </div>
            </div>

            {/* Hero LCP Image Composition */}
            <div className="relative lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-2xl">
                <img
                  src="/images/hero-debate.jpg"
                  alt="Nigerian secondary school student speaking at a debate lectern in a Lagos auditorium while teammates take notes"
                  fetchPriority="high"
                  width={1280}
                  height={720}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="bg-gradient-to-t from-[#0a192f] via-[#0a192f]/80 to-transparent p-5">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="inline-flex items-center gap-1.5 font-medium text-[var(--accent)]">
                      <Mic className="h-3.5 w-3.5" />
                      Track 01: Parliamentary &amp; Tech Policy Debate
                    </span>
                    <span className="rounded bg-white/10 px-2 py-0.5 text-[11px] text-white">
                      Secondary Schools
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Secondary Card showing STEM Showcase */}
              <div className="mt-4 flex items-center gap-4 rounded-xl border border-white/15 bg-[#0f2442]/95 p-3.5 shadow-xl backdrop-blur-md sm:-mt-8 sm:ml-6 sm:max-w-sm">
                <img
                  src="/images/stem-showcase.jpg"
                  alt="Students demonstrating a solar robotics prototype to STEM judges"
                  width={320}
                  height={180}
                  className="h-16 w-24 shrink-0 rounded-lg object-cover ring-1 ring-white/20"
                />
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-sky-300">
                    <Cpu className="h-3 w-3" />
                    Tracks 02 &amp; 03
                  </span>
                  <p className="text-xs font-semibold text-white">
                    STEM Olympiad &amp; Applied Innovation Showcase
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-300">
                    Robotics, coding, clean energy &amp; core sciences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Status Strip */}
      <section className="border-b bg-[var(--secondary-warm)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 text-xs sm:px-6 sm:text-sm">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-700">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <MapPin className="h-4 w-4 text-[var(--primary)]" />
              <strong>Host Area:</strong> Surulere LGA, Lagos (Venue TBC)
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Calendar className="h-4 w-4 text-[var(--primary)]" />
              <strong>Championship Dates:</strong> Placeholder — To Be Confirmed
            </span>
          </div>
          <Link
            href="/schools"
            className="font-semibold text-[var(--primary)] underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--primary-light)]"
          >
            View school onboarding steps →
          </Link>
        </div>
      </section>

      {/* Four Championship Pillars */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
            Expanded Championship Scope
          </p>
          <h2 className="section-heading mt-2 font-bold text-slate-900">
            Four integrated pillars for future-ready teen leaders
          </h2>
          <p className="prose-measure mt-3 text-[var(--muted)]">
            Modern challenges demand young leaders who can both engineer rigorous technical
            solutions and articulate their ethical, civic, and policy implications. STDSC bridges
            humanities and science under one championship roof.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Mic,
              badge: "Track 01",
              title: "Debate & Science Policy",
              description:
                "Team debates across civic, economic, and STEM policy motions — from AI governance and climate resilience to public health and ethics.",
              href: "/format#debate",
            },
            {
              icon: Atom,
              badge: "Track 02",
              title: "STEM Quiz & Olympiad",
              description:
                "High-energy analytical and rapid-response rounds testing secondary school mastery in Mathematics, Physics, Chemistry, Biology, and Computing.",
              href: "/format#olympiad",
            },
            {
              icon: Cpu,
              badge: "Track 03",
              title: "STEM Innovation Showcase",
              description:
                "Project exhibition where school teams pitch working prototypes in robotics, software, renewable energy, and community problem-solving.",
              href: "/format#showcase",
            },
            {
              icon: BookOpen,
              badge: "Post-Event Pathway",
              title: "Young Leaders & STEM Labs",
              description:
                "Ongoing mentorship, coding & robotics workshops, debate masterclasses, and alumni opportunities beyond championship day.",
              href: "/young-leaders",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary)]/40 hover:shadow-md"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--secondary)] text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)] group-hover:text-[var(--accent)]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[var(--primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary)]">
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Visual Showcase: Debate + STEM in Action */}
      <section className="border-y bg-[var(--secondary)] py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
                Inside the Arena
              </p>
              <h2 className="section-heading mt-2 font-bold text-slate-900">
                Rigorous competition across chamber, stage, and lab
              </h2>
            </div>
            <Link href="/format">
              <Button variant="outline" className="bg-white">
                Read Full Format &amp; Rules Framework
              </Button>
            </Link>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {/* Card 1: Debate Adjudication */}
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
              <img
                src="/images/format-adjudication.jpg"
                alt="Student debater addressing a panel of three Nigerian adjudicators with a digital timer"
                loading="lazy"
                width={1280}
                height={720}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
                  Debate Chamber
                </span>
                <h3 className="mt-1.5 text-xl font-bold text-slate-900">
                  Transparent Adjudication &amp; Tech Policy Motions
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted)]">
                  Trained adjudicators evaluate teams on content, style, and strategy. Prepared and
                  impromptu motions challenge students to weigh scientific evidence alongside civic
                  ethics.
                </p>
              </div>
            </article>

            {/* Card 2: STEM Olympiad */}
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
              <img
                src="/images/stem-olympiad.jpg"
                alt="Team of three Nigerian secondary school students solving physics and mathematics problems at an Olympiad buzzer table"
                loading="lazy"
                width={1280}
                height={720}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  STEM Quiz &amp; Olympiad
                </span>
                <h3 className="mt-1.5 text-xl font-bold text-slate-900">
                  Collaborative Problem-Solving Under Pressure
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted)]">
                  Timed quantitative rounds and buzzer stages test conceptual depth and teamwork
                  across mathematics, physical sciences, life sciences, and algorithmic thinking.
                </p>
              </div>
            </article>

            {/* Card 3: STEM Innovation Showcase */}
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
              <img
                src="/images/stem-showcase.jpg"
                alt="Secondary school team presenting a solar-powered agriculture robot prototype to STEM judges"
                loading="lazy"
                width={1280}
                height={720}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  Innovation Exhibition
                </span>
                <h3 className="mt-1.5 text-xl font-bold text-slate-900">
                  Applied Prototypes for Real Community Needs
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted)]">
                  Student teams design, build, and defend hardware or software prototypes — combining
                  engineering execution with clear oral presentation before technical judges.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* School Participation & Preparation Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <img
                src="/images/schools-team.jpg"
                alt="Nigerian secondary school students and their teacher coordinator preparing debate and STEM briefs in a school library"
                loading="lazy"
                width={1280}
                height={720}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
              Built for Secondary Schools
            </p>
            <h2 className="section-heading mt-2 font-bold text-slate-900">
              How schools participate and prepare their squads
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              Schools in Surulere and invited districts can register interest for Debate teams,
              STEM Olympiad squads, and Innovation Showcase projects through a single teacher
              coordinator workflow.
            </p>

            <ul className="mt-6 space-y-3.5 text-sm text-slate-700">
              {[
                "Single school coordinator point of contact for Debate and STEM tracks.",
                "Curriculum-aligned preparation packs, sample motions, and STEM syllabus guides.",
                "Strict child safeguarding, lab safety standards, and non-public student data handling.",
                "Post-championship induction of standout students into the Young Leaders Network & STEM Labs.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/schools">
                <Button>School Registration Guide</Button>
              </Link>
              <Link href="/young-leaders">
                <Button variant="secondary">Explore Young Leaders Network</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors & Safeguarding Split Banner */}
      <section className="border-t bg-[#0a192f] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                <Award className="h-3.5 w-3.5" />
                Institutional Partnerships &amp; Sponsorship
              </span>
              <h2 className="section-heading mt-3 font-bold text-white">
                Partner with STDSC to back the next generation of thinkers and builders
              </h2>
              <p className="prose-measure mt-4 text-slate-300">
                Corporate sponsors, STEM foundations, educational institutions, and civic leaders
                make the championship possible — through tiered sponsorship, STEM lab equipment
                grants, workshop hosting, and named awards.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/sponsors">
                  <Button size="lg" variant="accent">
                    Explore Sponsorship Tiers
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Contact the Organising Team
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-slate-900">
                <img
                  src="/images/sponsors-impact.jpg"
                  alt="Championship gold trophy on a mahogany podium with secondary school students applauding in the background"
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <Shield className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                    <p className="text-xs leading-relaxed text-slate-300">
                      <strong className="text-white">Governance &amp; Status Notice:</strong> Event
                      dates, venue, confirmed organisers, and sponsor logos are marked as
                      placeholders until formally confirmed. Live student registration remains
                      disabled until safeguarding and privacy controls are fully audited.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
