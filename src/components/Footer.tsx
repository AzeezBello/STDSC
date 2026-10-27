import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#071326] text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 border-b border-slate-800/90 pb-12 md:grid-cols-12">
          {/* Brand column */}
          <div className="space-y-4 md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                STDSC
              </span>
              <span className="h-5 w-[1.5px] bg-[var(--accent)]" aria-hidden="true" />
              <span className="font-mono-tech text-xs uppercase tracking-widest text-slate-400">
                SURULERE, LAGOS
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-300">
              Surulere Teens Debate &amp; STEM Championship. An annual academic institution
              equipping secondary school students in Lagos with rigorous argumentation, quantitative
              science mastery, and applied engineering skills.
            </p>
            <p className="font-mono-tech pt-1 text-xs text-slate-400">
              HOST AREA: SURULERE LGA (VENUE TBC) /{" "}
              <Link
                href="/contact"
                className="text-[var(--accent)] underline underline-offset-4 hover:text-white"
              >
                ENQUIRY DESK
              </Link>
            </p>
          </div>

          {/* 01 Tracks */}
          <div className="md:col-span-3">
            <h4 className="editorial-kicker mb-4 text-[var(--accent)]">
              01 / Championship Tracks
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/format#debate"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Debate &amp; Tech Policy Track
                </Link>
              </li>
              <li>
                <Link
                  href="/format#olympiad"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  STEM Quiz &amp; Olympiad
                </Link>
              </li>
              <li>
                <Link
                  href="/format#showcase"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  STEM Innovation Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="/young-leaders"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Young Leaders Network &amp; Labs
                </Link>
              </li>
            </ul>
          </div>

          {/* 02 Participate */}
          <div className="md:col-span-2">
            <h4 className="editorial-kicker mb-4 text-[var(--accent)]">
              02 / Delegations
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/schools"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  For Schools
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsors"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Sponsors &amp; Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Contact Organisers
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1 text-slate-400 transition-colors hover:text-white"
                >
                  Admin Shell
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* 03 Governance */}
          <div className="md:col-span-2">
            <h4 className="editorial-kicker mb-4 text-[var(--accent)]">
              03 / Governance
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/policies#safeguarding"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Safeguarding Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/policies#privacy"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Student Privacy Notice
                </Link>
              </li>
              <li>
                <Link
                  href="/policies#stem-safety"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  STEM Lab Safety
                </Link>
              </li>
              <li>
                <Link
                  href="/policies#conduct"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Safeguarding ledger bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-slate-800/80 pb-8 sm:flex-row sm:items-center">
          <p className="max-w-3xl text-xs leading-relaxed text-slate-300">
            <strong className="font-mono-tech uppercase text-[var(--accent)]">
              Safeguarding &amp; Privacy Covenant:
            </strong>{" "}
            Student personal records are never displayed on public pages. Production team and
            project registration remains gated until authentication, role-based access control, and
            formal safeguarding policies are approved.
          </p>
          <Link
            href="/policies"
            className="font-mono-tech shrink-0 text-xs font-semibold uppercase text-[var(--accent)] hover:underline"
          >
            Read Policy Summaries →
          </Link>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Surulere Teens Debate &amp; STEM Championship (STDSC). All
            rights reserved.
          </p>
          <p className="font-mono-tech text-[11px]">
            STATUS: DATES, VENUE &amp; PARTNERS MARKED AS PLACEHOLDERS UNTIL CONFIRMED
          </p>
        </div>
      </div>
    </footer>
  );
}
