import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sponsors & Institutional Partners",
};

export default function SponsorsPage() {
  return (
    <div>
      {/* Full-Bleed Background Image Hero with Subtle Directional Overlay */}
      <section className="relative isolate overflow-hidden border-b border-[var(--border)] bg-[#071326] text-white">
        <img
          src="/images/sponsors-impact.jpg"
          alt="Championship gold trophy on a podium with Nigerian secondary school students applauding in the auditorium"
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
              Sponsors &amp; Institutional Partners
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-100 sm:text-lg">
              The Surulere Teens Debate &amp; STEM Championship (STDSC) collaborates with
              corporations, engineering firms, educational foundations, and civic institutions
              committed to youth leadership, scientific literacy, and critical thinking in Lagos.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" variant="accent">
                  Enquire About Sponsorship
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6 lg:py-24">
        {/* Strategic Rationale Ledger */}
        <section>
          <div className="max-w-3xl">
            <p className="editorial-kicker text-[var(--primary)]">
              § 02 / STRATEGIC ALIGNMENT
            </p>
            <h2 className="section-heading mt-2 font-bold text-slate-900">
              Why partner with STDSC?
            </h2>
          </div>

          <div className="mt-10 grid divide-y divide-[var(--border)] rounded-md border border-[var(--border)] bg-white sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {[
              {
                code: "VAL-01",
                title: "STEM & Digital Talent Pipeline",
                desc: "Support practical robotics, software engineering, and quantitative science problem-solving among secondary school students in Lagos.",
              },
              {
                code: "VAL-02",
                title: "Civic & Leadership Impact",
                desc: "Champion articulate public discourse, evidence-based reasoning, and ethical technology leadership in Nigerian secondary schools.",
              },
              {
                code: "VAL-03",
                title: "Institutional Brand Visibility",
                desc: "Prominent recognition across debate chambers, STEM showcase booths, school briefing packs, and official digital publications.",
              },
              {
                code: "VAL-04",
                title: "Safeguarding & Governance First",
                desc: "Associate with a programme built on rigorous child protection, laboratory safety rules, data privacy, and transparent adjudication.",
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

        {/* Indicative Sponsorship Tiers Matrix */}
        <section>
          <div className="max-w-3xl">
            <p className="editorial-kicker text-[var(--primary)]">
              § 03 / PARTNERSHIP SCHEDULE (OUTLINE)
            </p>
            <h2 className="section-heading mt-2 font-bold text-slate-900">
              Indicative Sponsorship Tiers
            </h2>
            <p className="prose-measure mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Investment levels and exact deliverables will be finalised once event scale and costs
              are confirmed. Contact our team to request the current Sponsor Package outline or
              discuss custom partnership goals.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                code: "TIER 01",
                tier: "Title / Presenting",
                focus: "Primary Championship Partner",
                featured: true,
                benefits: [
                  "Headline naming rights recognition",
                  "Premier logo placement across all Debate & STEM stages",
                  "Keynote & grand finale award presentation",
                  "Flagship Young Leaders Network & STEM Lab integration",
                ],
              },
              {
                code: "TIER 02",
                tier: "Gold Partner",
                focus: "Major Track Co-Sponsor",
                featured: false,
                benefits: [
                  "Track co-branding (Debate, STEM Olympiad, or Innovation Showcase)",
                  "Prominent logo on event backdrops & website",
                  "Exhibition presence & press mentions",
                ],
              },
              {
                code: "TIER 03",
                tier: "Silver Partner",
                focus: "Programme Partner",
                featured: false,
                benefits: [
                  "Logo placement on official website & selected materials",
                  "Recognition during awards ceremony",
                  "Opportunity to nominate technical judges or mentors",
                ],
              },
              {
                code: "TIER 04",
                tier: "Bronze / Supporter",
                focus: "Contributing Partner",
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
                className={`flex flex-col justify-between rounded-md border p-6 ${
                  pkg.featured
                    ? "border-[#071326] bg-[#071326] text-white shadow-lg"
                    : "border-[var(--border)] bg-white text-slate-900"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-current/15 pb-3">
                    <span
                      className={`font-mono-tech text-xs font-bold ${
                        pkg.featured ? "text-[var(--accent)]" : "text-[var(--primary)]"
                      }`}
                    >
                      {pkg.code}
                    </span>
                    <span
                      className={`font-mono-tech text-[11px] ${
                        pkg.featured ? "text-slate-300" : "text-[var(--muted)]"
                      }`}
                    >
                      {pkg.focus}
                    </span>
                  </div>
                  <h3 className="sub-heading mt-4 font-bold">{pkg.tier}</h3>
                  <p
                    className={`font-mono-tech mt-1 text-[11px] uppercase ${
                      pkg.featured ? "text-slate-400" : "text-[var(--muted)]"
                    }`}
                  >
                    Investment Scope: To Be Confirmed
                  </p>
                  <ul className="mt-5 space-y-2.5 text-xs leading-relaxed">
                    {pkg.benefits.map((b, idx) => (
                      <li key={b} className="flex items-baseline gap-2">
                        <span
                          className={`font-mono-tech text-[10px] font-bold ${
                            pkg.featured ? "text-[var(--accent)]" : "text-[var(--primary)]"
                          }`}
                        >
                          0{idx + 1}.
                        </span>
                        <span className={pkg.featured ? "text-slate-200" : "text-slate-700"}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-current/15 pt-4">
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

        {/* Targeted STEM & In-Kind Support */}
        <section className="grid gap-8 rounded-md border border-[var(--border)] bg-[var(--secondary)] p-6 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="editorial-kicker text-[var(--primary)]">
              § 04 / TARGETED &amp; IN-KIND CONTRIBUTIONS
            </p>
            <h2 className="sub-heading mt-2 font-bold text-slate-900">
              Additional ways to back Debate &amp; STEM tracks
            </h2>
            <dl className="mt-5 space-y-4 text-sm text-slate-700">
              <div>
                <dt className="font-bold text-slate-900">01. STEM Kits &amp; School Lab Grants</dt>
                <dd className="mt-1 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  Microcontrollers, robotics kits, scientific calculators, or laboratory equipment
                  for participating secondary schools.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">
                  02. Young Leaders Network &amp; STEM Lab Hosting
                </dt>
                <dd className="mt-1 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  Host a coding workshop, engineering facility tour, or public-speaking masterclass
                  for inducted student fellows.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">
                  03. In-Kind Event Support &amp; Named Category Awards
                </dt>
                <dd className="mt-1 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  Venue hosting, educational prizes, printed materials, or named awards across
                  Debate, Olympiad, and Innovation categories (subject to safeguarding and fairness
                  policies).
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col justify-between rounded-md border border-[var(--border)] bg-white p-6 lg:col-span-5">
            <div>
              <span className="font-mono-tech text-xs font-bold uppercase text-[var(--primary)]">
                ROSTER STATUS / PLACEHOLDER
              </span>
              <h3 className="sub-heading mt-2 font-bold text-slate-900">
                Confirmed Partners Roster
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted)]">
                Confirmed sponsors and institutional partners will be listed here with official
                emblems and partner citations once formal agreements are executed.
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
