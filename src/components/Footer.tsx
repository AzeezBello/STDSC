import Link from "next/link";
import { Award, Atom, Shield, MapPin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0a192f] text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand column */}
          <div className="space-y-4 md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] text-[#0a192f] shadow-sm">
                <Award className="h-5 w-5" />
                <Atom className="absolute -right-1 -bottom-1 h-4 w-4 rounded-full bg-sky-500 p-0.5 text-white ring-2 ring-[#0a192f]" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white">
                  STDSC
                </h3>
                <p className="text-xs text-slate-400">
                  Surulere Teens Debate &amp; STEM Championship
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-300">
              Uniting eloquent discourse with scientific inquiry. STDSC empowers
              secondary school students in Surulere, Lagos through competitive
              debate, STEM Olympiads, applied innovation showcases, and the
              Young Leaders Network.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" />
                Surulere LGA, Lagos (Venue TBC)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-[var(--accent)]" />
                <Link
                  href="/contact"
                  className="underline decoration-slate-600 underline-offset-4 hover:text-white"
                >
                  Enquiry Form
                </Link>
              </span>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <h4 className="mb-3.5 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              Championship Tracks
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

          {/* Partners */}
          <div className="md:col-span-2">
            <h4 className="mb-3.5 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              Participate
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

          {/* Safeguarding & Legal */}
          <div className="md:col-span-2">
            <h4 className="mb-3.5 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              Governance
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
                  href="/policies#conduct"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Safeguarding callout bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <Shield className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
            <p className="text-xs leading-relaxed text-slate-300">
              <strong className="text-white">
                Child Safeguarding, Lab Safety &amp; Data Protection:
              </strong>{" "}
              Student personal records are never displayed publicly. Live team and project
              registration remains gated until authentication, role-based access control, and
              formal safeguarding policies are approved.
            </p>
          </div>
          <Link
            href="/policies"
            className="shrink-0 text-xs font-semibold text-[var(--accent)] hover:underline"
          >
            Review policies →
          </Link>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-slate-800/80 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Surulere Teens Debate &amp; STEM Championship (STDSC). All
            rights reserved.
          </p>
          <p>
            Dates, venue, and confirmed partners are marked as placeholders until formally
            announced.
          </p>
        </div>
      </div>
    </footer>
  );
}
