import { Shield, Lock, Database, FileText, Cpu } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-[var(--primary)]">
            STDSC Admin Dashboard (Structural Shell)
          </h1>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Private management area for school applications, Debate motions, STEM Olympiad problem
            sets, Innovation Showcase submissions, sponsor enquiries, and results.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
          <Lock className="h-3.5 w-3.5" />
          Authentication Gate Pending
        </span>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: FileText,
            title: "School Delegations & Applications",
            status: "Gated — Not yet enabled",
            note: "Manage school coordinator expressions of interest across Debate and STEM tracks. Requires Supabase Auth + RBAC.",
          },
          {
            icon: Database,
            title: "Debate Motions & Event Schedule",
            status: "Placeholder",
            note: "Publish prepared civic & science/tech policy motions, venue details, and round schedules.",
          },
          {
            icon: Cpu,
            title: "STEM Olympiad & Innovation Showcase",
            status: "Placeholder",
            note: "Manage STEM Quiz syllabi, prototype safety checklists, and technical judging rubrics.",
          },
          {
            icon: Shield,
            title: "Sponsor & Partner Enquiries",
            status: "Placeholder",
            note: "Track corporate partnership tiers, STEM lab equipment grants, and workshop sponsorships.",
          },
          {
            icon: Lock,
            title: "Results & YLN Inductions",
            status: "Placeholder",
            note: "Publish aggregate team standings and manage Young Leaders Network & STEM Lab cohort invitations.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
          >
            <card.icon className="mb-3 h-6 w-6 text-[var(--primary)]" />
            <h3 className="font-bold text-slate-900">{card.title}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
              {card.status}
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted)]">{card.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 space-y-4 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-950">
        <h2 className="font-bold">Mandatory Security, Safeguarding &amp; Privacy Gates</h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            Authentication (via Supabase Auth or equivalent) must be enforced before any school or
            student application data is stored.
          </li>
          <li>
            Role-based access control (RBAC) is required so only authorised organisers can view or
            manage sensitive records.
          </li>
          <li>
            Student personal data must never appear on public routes or unauthenticated API
            responses.
          </li>
          <li>
            Formal Safeguarding Policy, STEM Prototype Safety Rules, Privacy Notice, and Data
            Retention Schedule must be approved before live registration opens.
          </li>
        </ul>
        <p className="pt-1 font-medium">
          This dashboard is currently a structural placeholder. No real student data is processed
          here.
        </p>
      </div>
    </div>
  );
}
