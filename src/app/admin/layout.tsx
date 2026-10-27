import type { Metadata } from "next";
import Link from "next/link";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[65vh] bg-slate-50">
      <div className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-6">
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 font-bold text-[var(--primary)]"
            >
              <Lock className="h-4 w-4 text-[var(--accent)]" />
              <span>STDSC Admin Shell</span>
            </Link>
            <nav className="hidden gap-4 text-xs font-medium text-[var(--muted)] md:flex">
              <span className="cursor-not-allowed opacity-60">School Applications</span>
              <span className="cursor-not-allowed opacity-60">Debate Motions</span>
              <span className="cursor-not-allowed opacity-60">STEM Olympiad &amp; Projects</span>
              <span className="cursor-not-allowed opacity-60">Sponsors</span>
              <span className="cursor-not-allowed opacity-60">Results</span>
            </nav>
          </div>
          <Link
            href="/"
            className="text-xs font-semibold text-[var(--primary)] hover:underline"
          >
            ← Back to public site
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">{children}</div>
    </div>
  );
}
