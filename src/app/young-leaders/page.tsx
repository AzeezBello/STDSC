import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Users,
  Cpu,
  BookOpen,
  Compass,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Young Leaders Network & STEM Labs",
};

export default function YoungLeadersPage() {
  return (
    <div>
      {/* Page Hero */}
      <section className="hero-surface relative overflow-hidden text-white">
        <div className="subtle-grid-pattern absolute inset-0 opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Year-Round Fellowship &amp; Innovation Pipeline</span>
              </div>
              <h1 className="section-heading font-extrabold tracking-tight text-white">
                Young Leaders Network &amp; STEM Labs
              </h1>
              <p className="prose-measure mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
                The Young Leaders Network extends the impact of STDSC far beyond championship day —
                combining advanced debate masterclasses, hands-on STEM &amp; coding labs, and
                mentorship for standout secondary school participants.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button size="lg" variant="accent">
                    Express Interest
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
                <img
                  src="/images/young-leaders.jpg"
                  alt="Nigerian mentor leading an interactive roundtable seminar with teenage leaders in a Lagos innovation space"
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
        {/* Four Core Pillars of the Network */}
        <section>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
              Beyond the Trophy
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              What members experience in the network
            </h2>
            <p className="prose-measure mt-2 text-[var(--muted)]">
              Designed to sustain critical-thinking habits, technical curiosity, and peer networks
              formed during STDSC while opening pathways into higher education and civic leadership.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Cpu,
                title: "STEM Workshops & Labs",
                desc: "Practical sessions in coding, robotics prototyping, data literacy, and experimental design led by STEM practitioners.",
              },
              {
                icon: BookOpen,
                title: "Debate & Policy Seminars",
                desc: "Periodic masterclasses in argumentation, public policy analysis, scientific communication, and ethics.",
              },
              {
                icon: Users,
                title: "Mentorship Connections",
                desc: "Structured group mentorship with educators, engineers, scientists, legal professionals, and university scholars.",
              },
              {
                icon: Compass,
                title: "Ambassador & Alumni Pathways",
                desc: "Opportunities to incubate community projects, access curated academic resources, and support future STDSC editions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
              >
                <item.icon className="h-7 w-7 text-[var(--primary)]" />
                <h3 className="mt-4 font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Join + Visual Feature */}
        <section className="grid items-center gap-10 rounded-2xl border border-slate-200 bg-[var(--secondary)]/60 p-6 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold text-slate-900">
              Selection, Eligibility &amp; Mentorship Support
            </h2>
            <p className="prose-measure mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Selection and invitation criteria will be published once the network structure is
              finalised. Outstanding speakers, STEM Olympiad finalists, and Innovation Showcase
              builders from participating schools will be prioritised for induction.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
              {[
                "All workshops and mentorship activities operate under strict child-safeguarding supervision.",
                "Schools can nominate promising debaters and STEM students when expressing interest.",
                "Educators, STEM professionals, and partner organisations can apply to host a lab or mentor session.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button>Express Interest in the Network</Button>
              </Link>
              <Link href="/policies#safeguarding">
                <Button variant="outline" className="bg-white">
                  Safeguarding Principles
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <img
                src="/images/stem-showcase.jpg"
                alt="Secondary school innovators presenting their solar robotics project during a STEM session"
                loading="lazy"
                width={1280}
                height={720}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-4 text-xs text-[var(--muted)]">
                <strong className="text-slate-900">Prototype Continuation:</strong> Promising STEM
                showcase projects receive guidance to refine their designs after the championship.
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder Notice */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950">
          <strong>Status Notice:</strong> Programme curriculum, lab cohort dates, eligibility
          criteria, and launch timeline are placeholders until confirmed by the organising team.
        </div>
      </div>
    </div>
  );
}
