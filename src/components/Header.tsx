"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Award, Atom, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/format", label: "Debate & STEM Format" },
  { href: "/schools", label: "For Schools" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/young-leaders", label: "Young Leaders & Labs" },
  { href: "/policies", label: "Policies" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/85">
      {/* Top institutional bar */}
      <div className="border-b border-slate-100 bg-[#0a192f] text-xs text-slate-300">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <span className="font-medium text-white">Surulere, Lagos</span>
            <span className="hidden text-slate-400 sm:inline">
              • Competitive Debate, STEM Olympiad &amp; Innovation Showcase
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/policies#safeguarding"
              className="inline-flex items-center gap-1 text-slate-300 transition-colors hover:text-[var(--accent)]"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-[var(--accent)]" />
              <span>Safeguarding First</span>
            </Link>
            <Link
              href="/admin"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-3 text-[var(--primary)] focus-visible:outline-none"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--accent)] shadow-sm transition-transform group-hover:scale-105">
            <Award className="h-5 w-5" />
            <Atom className="absolute -right-1 -bottom-1 h-4 w-4 rounded-full bg-[#0a192f] p-0.5 text-sky-400 ring-2 ring-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold leading-none tracking-tight text-[var(--primary)]">
              STDSC
            </span>
            <span className="mt-0.5 text-[11px] font-medium tracking-wide text-[var(--muted)]">
              Surulere Teens Debate &amp; STEM
            </span>
          </div>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[var(--secondary)] font-semibold text-[var(--primary)]"
                    : "text-slate-700 hover:bg-slate-100 hover:text-[var(--primary)]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link href="/schools" className="hidden sm:block">
            <Button size="sm" variant="default">
              School Interest
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav-menu"
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav-menu"
        className={cn(
          "border-t border-slate-200 bg-white lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4"
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[var(--secondary)] font-semibold text-[var(--primary)]"
                    : "text-slate-700 hover:bg-slate-100"
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
            <Link href="/schools" onClick={() => setOpen(false)}>
              <Button className="w-full justify-center" size="sm">
                Register School Interest
              </Button>
            </Link>
            <Link href="/admin" onClick={() => setOpen(false)}>
              <Button
                variant="outline"
                className="w-full justify-center"
                size="sm"
              >
                Admin Dashboard
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
