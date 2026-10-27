import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Award,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Handshake,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sponsors & Partners",
};

export default function SponsorsPage() {
  return (
    <div>
      {/* Page Hero */}
      <section className="hero-surface relative overflow-hidden text-white">
        <div className="subtle-grid-pattern absolute inset-0 opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
                Invest in Youth Excellence
              </p>
              <h1 className="section-heading mt-2 font-extrabold tracking-tight text-white">
                Sponsors &amp; Institutional Partners
              </h1>
              <p className="prose-measure mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
                The Surulere Teens Debate &amp; STEM Championship (STDSC) partners with forward-looking
                corporations, technology firms, educational foundations, and civic institutions who
                believe in youth leadership, scientific literacy, and critical thinking.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button size="lg" variant="accent">
                    Enquire About Sponsorship
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
                <img
                  src="/images/sponsors-impact.jpg"
                  alt="Championship gold trophy on a podium with Nigerian secondary school students applauding in the auditorium"
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
        {/* Why Partner */}
        <section>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
              Strategic Alignment
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Why partner with STDSC?
            </h2>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Cpu,
                title: "STEM & Digital Talent Pipeline",
                desc: "Support practical robotics, software, and science problem-solving among secondary school students in Lagos.",
              },
              {
                icon: GraduationCap,
                title: "Civic & Leadership Impact",
                desc: "Champion articulate public discourse, evidence-based reasoning, and ethical technology leadership.",
              },
              {
                icon: Sparkles,
                title: "High-Trust Brand Visibility",
                desc: "Prominent recognition across championship stages, STEM showcase booths, school packs, and digital platforms.",
              },
              {
                icon: ShieldCheck,
                title: "Safeguarding & Governance First",
                desc: "Associate with a programme built on rigorous child protection, data privacy, and transparent adjudication.",
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

        {/* Indicative Sponsorship Tiers */}
        <section>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
              Partnership Structure (Outline)
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Indicative Sponsorship Tiers
            </h2>
            <p className="prose-measure mt-2 text-sm text-[var(--muted)]">
              Investment levels and exact deliverables will be finalised once event scale and costs
              are confirmed. Contact us to receive the current Sponsor Package outline or discuss
              bespoke partnership goals.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                tier: "Title / Presenting",
                focus: "Primary Championship Partner",
                featured: true,
                benefits: [
                  "Headline naming rights recognition",
                  "Premier logo placement across all Debate & STEM stages",
                  "Keynote / award presentation opportunity",
                  "Flagship Young Leaders Network & STEM Lab integration",
                ],
              },
              {
                tier: "Gold Partner",
                focus: "Major Track or Category Support",
                featured: false,
                benefits: [
                  "Track co-branding (Debate, STEM Olympiad, or Innovation Showcase)",
                  "Prominent logo on event backdrops & website",
                  "Exhibition presence & media mentions",
                ],
              },
              {
                tier: "Silver Partner",
                focus: "Significant Programme Support",
                featured: false,
                benefits: [
                  "Logo placement on official website & selected materials",
                  "Recognition during awards ceremony",
                  "Opportunity to provide technical judges or mentors",
                ],
              },
              {
                tier: "Bronze / Supporter",
                focus: "Contributing Community Partner",
                featured: false,
                benefits: [
                  "Official website partner listing",
                  "Certificate of institutional appreciation",
                  "Acknowledgement in post-event impact report",
                ],
              },
            ].map((pkg) => (
              <div
                key={pkg.tier}
                className={`flex flex-col justify-between rounded-2xl border p-6 ${
                  pkg.featured
                    ? "border-[var(--primary)] bg-[#0a192f] text-white shadow-lg"
                    : "border-slate-200 bg-white text-slate-900 shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        pkg.featured ? "text-[var(--accent)]" : "text-[var(--primary)]"
                      }`}
                    >
                      {pkg.focus}
                    </span>
                    {pkg.featured && (
                      <Award className="h-4 w-4 text-[var(--accent)]" />
                    )}
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{pkg.tier}</h3>
                  <p
                    className={`mt-1 text-xs ${
                      pkg.featured ? "text-slate-300" : "text-[var(--muted)]"
                    }`}
                  >
                    Investment &amp; final scope: <em>To be confirmed</em>
                  </p>
                  <ul className="mt-5 space-y-2.5 text-xs">
                    {pkg.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2
                          className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                            pkg.featured ? "text-[var(--accent)]" : "text-[var(--primary)]"
                          }`}
                        />
                        <span className={pkg.featured ? "text-slate-200" : "text-slate-700"}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/20">
                  <Link href="/contact">
                    <Button
                      variant={pkg.featured ? "accent" : "outline"}
                      size="sm"
                      className="w-full justify-center"
                    >
                      Request Package
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional STEM & In-Kind Support */}
        <section className="grid gap-8 rounded-2xl border border-slate-200 bg-[var(--secondary-warm)] p-6 sm:p-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
              <Handshake className="h-4 w-4" />
              <span>Targeted &amp; In-Kind Contributions</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Additional ways to support Debate &amp; STEM tracks
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                <span>
                  <strong>STEM Kits &amp; Lab Grants:</strong> Microcontrollers, robotics kits,
                  scientific calculators, or lab supplies for participating secondary schools.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                <span>
                  <strong>Young Leaders Network Masterclasses:</strong> Host a coding workshop,
                  engineering tour, or public-speaking clinic for inducted fellows.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                <span>
                  <strong>In-Kind Event Support &amp; Named Awards:</strong> Venue hosting, educational
                  prizes, printed materials, or category awards (subject to safeguarding and
                  fairness policies).
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 lg:col-span-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Current Partners (Placeholder)</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Confirmed sponsors and institutional partners will be displayed here with official
                logos and partner descriptions once formal agreements are executed.
              </p>
            </div>
            <div className="mt-6">
              <Link href="/contact">
                <Button className="w-full justify-center">
                  Start a Partnership Conversation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
