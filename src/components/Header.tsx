"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MegaMenuKey = "championship" | "participate" | null;

const championshipItems = [
  {
    code: "TRK-01",
    title: "Debate & Tech Policy",
    description: "Parliamentary debates on civic, economic, and science/AI policy motions.",
    href: "/format#debate",
  },
  {
    code: "TRK-02",
    title: "STEM Quiz & Olympiad",
    description: "Analytical qualifiers and live buzzer finals across 5 STEM disciplines.",
    href: "/format#olympiad",
  },
  {
    code: "TRK-03",
    title: "STEM Innovation Showcase",
    description: "Student-built robotics, software, and renewable energy prototypes.",
    href: "/format#showcase",
  },
  {
    code: "GOV-04",
    title: "Adjudication & Rules",
    description: "Scoring rubrics, eligibility criteria, and independent judging panels.",
    href: "/format#governance",
  },
];

const participateItems = [
  {
    code: "SCH-01",
    title: "For Secondary Schools",
    description: "How school coordinators nominate Debate, Olympiad, and Showcase squads.",
    href: "/schools",
  },
  {
    code: "YLN-02",
    title: "Young Leaders & STEM Labs",
    description: "Year-round fellowship, coding/robotics bootcamps, and mentorship circles.",
    href: "/young-leaders",
  },
  {
    code: "SPN-03",
    title: "Sponsors & Partners",
    description: "Institutional patronage tiers, school STEM kit grants, and named awards.",
    href: "/sponsors",
  },
  {
    code: "POL-04",
    title: "Policies & Safeguarding",
    description: "Child protection, student data privacy, and prototype lab safety rules.",
    href: "/policies",
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<MegaMenuKey>(null);
  const [mobileSection, setMobileSection] = useState<MegaMenuKey>("championship");
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  // Close menus on route change
  useEffect(() => {
    setActiveMega(null);
    setMobileOpen(false);
  }, [pathname]);

  // Close mega menu on outside click or Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveMega(null);
        setMobileOpen(false);
      }
    }
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMega(null);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isChampionshipActive = pathname?.startsWith("/format");
  const isParticipateActive =
    pathname?.startsWith("/schools") ||
    pathname?.startsWith("/young-leaders") ||
    pathname?.startsWith("/sponsors") ||
    pathname?.startsWith("/policies");

  return (
    <header
      ref={headerRef}
      onMouseLeave={() => setActiveMega(null)}
      className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[#faf8f5]/95 backdrop-blur-md"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Compact Brand Lockup */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[var(--primary)] focus-visible:outline-none"
        >
          <span className="font-display text-xl font-bold tracking-tight text-[var(--primary)]">
            STDSC
          </span>
          <span
            className="hidden h-4 w-[1px] bg-[var(--border-strong)] sm:inline-block"
            aria-hidden="true"
          />
          <span className="hidden text-xs font-medium text-[var(--muted)] sm:inline">
            Surulere Debate &amp; STEM
          </span>
        </Link>

        {/* Compact Desktop Nav with Mega Menu Triggers */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 md:flex"
        >
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            onMouseEnter={() => setActiveMega(null)}
            className={cn(
              "relative py-4 text-sm transition-colors",
              pathname === "/"
                ? "font-semibold text-[var(--primary)] after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-[var(--accent)]"
                : "font-medium text-slate-700 hover:text-[var(--primary)]"
            )}
          >
            Home
          </Link>

          {/* Mega Menu Trigger 1: Championship */}
          <button
            type="button"
            aria-expanded={activeMega === "championship"}
            onMouseEnter={() => setActiveMega("championship")}
            onClick={() =>
              setActiveMega(activeMega === "championship" ? null : "championship")
            }
            className={cn(
              "relative inline-flex cursor-pointer items-center gap-1 py-4 text-sm transition-colors focus-visible:outline-none",
              isChampionshipActive || activeMega === "championship"
                ? "font-semibold text-[var(--primary)] after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-[var(--accent)]"
                : "font-medium text-slate-700 hover:text-[var(--primary)]"
            )}
          >
            <span>Championship</span>
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-150",
                activeMega === "championship" && "rotate-180 text-[var(--accent)]"
              )}
            />
          </button>

          {/* Mega Menu Trigger 2: Participate */}
          <button
            type="button"
            aria-expanded={activeMega === "participate"}
            onMouseEnter={() => setActiveMega("participate")}
            onClick={() =>
              setActiveMega(activeMega === "participate" ? null : "participate")
            }
            className={cn(
              "relative inline-flex cursor-pointer items-center gap-1 py-4 text-sm transition-colors focus-visible:outline-none",
              isParticipateActive || activeMega === "participate"
                ? "font-semibold text-[var(--primary)] after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-[var(--accent)]"
                : "font-medium text-slate-700 hover:text-[var(--primary)]"
            )}
          >
            <span>Participate</span>
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-150",
                activeMega === "participate" && "rotate-180 text-[var(--accent)]"
              )}
            />
          </button>

          <Link
            href="/contact"
            aria-current={pathname?.startsWith("/contact") ? "page" : undefined}
            onMouseEnter={() => setActiveMega(null)}
            className={cn(
              "relative py-4 text-sm transition-colors",
              pathname?.startsWith("/contact")
                ? "font-semibold text-[var(--primary)] after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-[var(--accent)]"
                : "font-medium text-slate-700 hover:text-[var(--primary)]"
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-2">
          <Link href="/schools" className="hidden md:block">
            <Button size="sm" variant="default">
              Register Interest
            </Button>
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] text-slate-800 hover:bg-[var(--secondary)] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu Panel */}
      {activeMega && (
        <div className="hidden border-t border-[var(--border)] bg-[#faf8f5] shadow-xl md:block">
          <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
            {activeMega === "championship" && (
              <div className="grid gap-6 lg:grid-cols-12">
                {/* 8-Column Architectural Submenu Grid */}
                <div className="hairline-grid grid grid-cols-2 overflow-clip rounded-md border border-[var(--border)] lg:col-span-8">
                  {championshipItems.map((item) => (
                    <Link
                      key={item.code}
                      href={item.href}
                      onClick={() => setActiveMega(null)}
                      className="group flex flex-col justify-between bg-white p-4 transition-colors hover:bg-[var(--secondary)]"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-mono-tech text-[11px] font-bold text-[var(--primary)]">
                            {item.code}
                          </span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--primary)]" />
                        </div>
                        <p className="mt-1.5 text-sm font-bold text-slate-900 group-hover:text-[var(--primary)]">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* 4-Column Featured Spotlight inside Mega Menu */}
                <div className="flex flex-col justify-between rounded-md border border-[var(--border)] bg-[#071326] p-4 text-white lg:col-span-4">
                  <div>
                    <img
                      src="/images/stem-showcase.jpg"
                      alt="Students demonstrating a solar robotics prototype to STEM judges"
                      fetchPriority="low"
                      width={480}
                      height={270}
                      className="aspect-[16/9] w-full rounded-xs object-cover"
                    />
                    <p className="font-mono-tech mt-3 text-[10px] font-bold uppercase text-[var(--accent)]">
                      EXPANDED SCOPE / DEBATE + STEM
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">
                      Three Arenas, One Championship
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-300">
                      Schools can field squads in Parliamentary Debate, the STEM Olympiad, and the
                      Innovation Showcase.
                    </p>
                  </div>
                  <Link
                    href="/format"
                    onClick={() => setActiveMega(null)}
                    className="font-mono-tech mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase text-[var(--accent)] hover:underline"
                  >
                    View Complete Format Overview →
                  </Link>
                </div>
              </div>
            )}

            {activeMega === "participate" && (
              <div className="grid gap-6 lg:grid-cols-12">
                {/* 8-Column Architectural Submenu Grid */}
                <div className="hairline-grid grid grid-cols-2 overflow-clip rounded-md border border-[var(--border)] lg:col-span-8">
                  {participateItems.map((item) => (
                    <Link
                      key={item.code}
                      href={item.href}
                      onClick={() => setActiveMega(null)}
                      className="group flex flex-col justify-between bg-white p-4 transition-colors hover:bg-[var(--secondary)]"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-mono-tech text-[11px] font-bold text-[var(--primary)]">
                            {item.code}
                          </span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--primary)]" />
                        </div>
                        <p className="mt-1.5 text-sm font-bold text-slate-900 group-hover:text-[var(--primary)]">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* 4-Column Delegation Action Card */}
                <div className="flex flex-col justify-between rounded-md border border-[var(--border)] bg-[var(--secondary)] p-5 lg:col-span-4">
                  <div>
                    <span className="font-mono-tech text-[10px] font-bold uppercase text-[var(--primary)]">
                      DELEGATION &amp; PATRONAGE DESK
                    </span>
                    <p className="sub-heading mt-1.5 font-bold text-slate-900">
                      Ready to get your school or organisation involved?
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                      Express interest as a secondary school coordinator, enquire about sponsorship
                      tiers, or volunteer as an adjudicator or STEM mentor.
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-[var(--border)] pt-3">
                    <Link href="/contact" onClick={() => setActiveMega(null)}>
                      <Button size="sm">Contact Desk</Button>
                    </Link>
                    <Link
                      href="/admin"
                      onClick={() => setActiveMega(null)}
                      className="font-mono-tech text-xs font-semibold text-[var(--muted)] hover:text-[var(--primary)]"
                    >
                      Admin Shell →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Accordion Mega Menu */}
      <div
        id="mobile-nav-menu"
        className={cn(
          "max-h-[calc(100dvh-3.5rem)] overflow-y-auto overscroll-contain border-t border-[var(--border)] bg-[#faf8f5] shadow-lg md:hidden",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-6xl flex-col divide-y divide-[var(--border)]/70 px-4 py-3"
        >
          <Link
            href="/"
            className="py-3 text-sm font-semibold text-slate-900"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Submenu 1: Championship */}
          <div className="py-2">
            <button
              type="button"
              onClick={() =>
                setMobileSection(
                  mobileSection === "championship" ? null : "championship"
                )
              }
              className="flex w-full items-center justify-between py-2 text-sm font-semibold text-slate-900"
            >
              <span>Championship Tracks</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  mobileSection === "championship" && "rotate-180"
                )}
              />
            </button>
            {mobileSection === "championship" && (
              <div className="mt-1.5 grid gap-1.5 border-l-2 border-[var(--accent)] pl-3 pb-2">
                {championshipItems.map((item) => (
                  <Link
                    key={item.code}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xs py-1.5 active:bg-[var(--secondary)]"
                  >
                    <span className="font-mono-tech block text-[10px] font-bold text-[var(--primary)]">
                      {item.code}
                    </span>
                    <span className="block text-xs font-semibold text-slate-900">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-[11px] leading-snug text-[var(--muted)]">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Submenu 2: Participate */}
          <div className="py-2">
            <button
              type="button"
              onClick={() =>
                setMobileSection(
                  mobileSection === "participate" ? null : "participate"
                )
              }
              className="flex w-full items-center justify-between py-2 text-sm font-semibold text-slate-900"
            >
              <span>Participate &amp; Governance</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  mobileSection === "participate" && "rotate-180"
                )}
              />
            </button>
            {mobileSection === "participate" && (
              <div className="mt-1.5 grid gap-1.5 border-l-2 border-[var(--accent)] pl-3 pb-2">
                {participateItems.map((item) => (
                  <Link
                    key={item.code}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xs py-1.5 active:bg-[var(--secondary)]"
                  >
                    <span className="font-mono-tech block text-[10px] font-bold text-[var(--primary)]">
                      {item.code}
                    </span>
                    <span className="block text-xs font-semibold text-slate-900">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-[11px] leading-snug text-[var(--muted)]">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="py-3 text-sm font-semibold text-slate-900"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>

          <div className="flex flex-col gap-2 pt-3 pb-2">
            <Link href="/schools" onClick={() => setMobileOpen(false)}>
              <Button className="w-full justify-center" size="sm">
                Register School Interest
              </Button>
            </Link>
            <Link href="/admin" onClick={() => setMobileOpen(false)}>
              <Button variant="outline" className="w-full justify-center" size="sm">
                Admin Shell
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
