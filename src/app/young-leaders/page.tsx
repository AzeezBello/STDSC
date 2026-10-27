import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Young Leaders Network & STEM Labs",
};

export default function YoungLeadersPage() {
  return (
    <div>
      {/* Full-Bleed Background Image Hero with Subtle Directional Overlay */}
      <section className="relative isolate overflow-hidden border-b border-[var(--border)] bg-[#071326] text-white">
        <img
          src="/images/young-leaders.jpg"
          alt="Nigerian mentor leading an interactive roundtable seminar with teenage leaders in a Lagos innovation space"
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
              Young Leaders Network &amp; STEM Labs
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-100 sm:text-lg">
              The Young Leaders Network extends the impact of STDSC beyond tournament day. It
              combines advanced debate masterclasses, practical STEM and coding labs, and
              mentorship for standout secondary school participants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" variant="accent">
                  Express Interest
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6 lg:py-24">
        {/* Four Fellowship Tracks */}
        <section>
          <div className="max-w-3xl">
            <p className="editorial-kicker text-[var(--primary)]">
              § 02 / FELLOWSHIP CURRICULUM
            </p>
            <h2 className="section-heading mt-2 font-bold text-slate-900">
              Four pillars of post-championship development.
            </h2>
            <p className="prose-measure mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              Built to sustain analytical habits, technical curiosity, and peer networks formed
              during STDSC while opening pathways into higher education and civic leadership.
            </p>
          </div>

          <div className="mt-10 grid divide-y divide-[var(--border)] rounded-md border border-[var(--border)] bg-white sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {[
              {
                code: "LAB-01",
                title: "STEM Workshops & Labs",
                desc: "Practical sessions in coding, robotics prototyping, data literacy, and experimental design led by STEM practitioners.",
              },
              {
                code: "LAB-02",
                title: "Debate & Policy Seminars",
                desc: "Periodic masterclasses in argumentation, public policy analysis, scientific communication, and ethics.",
              },
              {
                code: "LAB-03",
                title: "Mentorship Circles",
                desc: "Structured group mentorship with educators, engineers, scientists, legal professionals, and university scholars.",
              },
              {
                code: "LAB-04",
                title: "Ambassador Pathways",
                desc: "Opportunities to incubate community projects, access curated academic resources, and support future STDSC editions.",
              },
            ].map((item) => (
              <div key={item.code} className="p-6">
                <span className="font-mono-tech text-xs font-bold text-[var(--primary)]">
                  {item.code}
                </span>
                <h3 className="mt-2.5 text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Induction & Prototype Continuation */}
        <section className="grid items-center gap-10 rounded-md border border-[var(--border)] bg-[var(--secondary)] p-6 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="editorial-kicker text-[var(--primary)]">
              § 03 / INDUCTION &amp; CONTINUATION
            </p>
            <h2 className="section-heading mt-2 font-bold text-slate-900">
              Selection, safeguarding, and prototype incubation.
            </h2>
            <p className="prose-measure mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Selection and invitation criteria will be published once the network structure is
              finalised. Standout speakers, STEM Olympiad finalists, and Innovation Showcase
              builders from participating schools will be prioritised for induction.
            </p>
            <ul className="mt-5 divide-y divide-[var(--border-strong)]/60 text-sm text-slate-700">
              {[
                "All workshops and mentorship sessions operate under strict child-safeguarding supervision.",
                "Schools can nominate promising debaters and STEM students when expressing interest.",
                "Educators, STEM professionals, and partner organisations can apply to host a lab or mentor session.",
              ].map((point, idx) => (
                <li key={point} className="flex items-baseline gap-3 py-3">
                  <span className="font-mono-tech text-xs font-bold text-[var(--primary)]">
                    0{idx + 1}.
                  </span>
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
            <figure className="overflow-hidden rounded-md border border-[var(--border)] bg-white">
              <img
                src="/images/stem-showcase.jpg"
                alt="Secondary school innovators presenting their solar robotics project during a STEM session"
                loading="lazy"
                width={1280}
                height={720}
                className="aspect-[16/10] w-full object-cover"
              />
              <figcaption className="border-t border-[var(--border)] p-4 text-xs leading-relaxed text-[var(--muted)]">
                <strong className="font-mono-tech block uppercase text-[var(--primary)]">
                  FIG 02 / PROTOTYPE INCUBATION
                </strong>
                Promising STEM showcase projects receive technical mentorship to refine their
                designs after the championship.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Placeholder Notice */}
        <div className="rounded-md border border-[var(--border-strong)] bg-white p-6 text-sm text-slate-800">
          <strong className="font-mono-tech mr-2 text-xs uppercase text-[var(--primary)]">
            [PLACEHOLDER STATUS]
          </strong>
          Programme curriculum, lab cohort dates, eligibility criteria, and launch timeline are
          placeholders until confirmed by the organising team.
        </div>
      </div>
    </div>
  );
}
