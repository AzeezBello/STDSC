export default function AdminDashboardPage() {
  return (
    <div>
      <div className="flex flex-col justify-between gap-3 border-b border-[var(--border)] pb-6 sm:flex-row sm:items-end">
        <div>
          <p className="editorial-kicker text-[var(--primary)]">
            INTERNAL OPERATIONS / STRUCTURAL SHELL
          </p>
          <h1 className="section-heading mt-1 font-bold text-slate-900">
            STDSC Admin Dashboard
          </h1>
          <p className="mt-1.5 text-sm text-[var(--muted)]">
            Private management shell for school applications, Debate motions, STEM Olympiad problem
            sets, Innovation Showcase submissions, sponsor enquiries, and results.
          </p>
        </div>
        <span className="font-mono-tech inline-flex items-center self-start rounded-xs border border-amber-400 bg-amber-50 px-3 py-1 text-xs font-bold uppercase text-amber-950">
          STATUS: AUTHENTICATION GATE PENDING
        </span>
      </div>

      <div className="mt-8 grid divide-y divide-[var(--border)] rounded-md border border-[var(--border)] bg-white sm:grid-cols-2 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {[
          {
            code: "MOD-01",
            title: "School Delegations & Applications",
            status: "Gated (Not Yet Enabled)",
            note: "Manage school coordinator expressions of interest across Debate and STEM tracks. Requires Supabase Auth and RBAC.",
          },
          {
            code: "MOD-02",
            title: "Debate Motions & Schedule",
            status: "Placeholder",
            note: "Publish prepared civic and science/tech policy motions, venue details, and round schedules.",
          },
          {
            code: "MOD-03",
            title: "STEM Olympiad & Showcase",
            status: "Placeholder",
            note: "Manage STEM Quiz syllabi, prototype safety checklists, and technical judging rubrics.",
          },
        ].map((card) => (
          <div key={card.code} className="p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-xs font-bold text-[var(--primary)]">
                {card.code}
              </span>
              <span className="font-mono-tech text-[11px] font-semibold uppercase text-amber-800">
                {card.status}
              </span>
            </div>
            <h2 className="mt-3 text-base font-bold text-slate-900">{card.title}</h2>
            <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
              {card.note}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid divide-y divide-[var(--border)] rounded-md border border-[var(--border)] bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {[
          {
            code: "MOD-04",
            title: "Sponsor & Partner Enquiries",
            status: "Placeholder",
            note: "Track corporate partnership tiers, STEM lab equipment grants, and workshop sponsorships.",
          },
          {
            code: "MOD-05",
            title: "Results & YLN Inductions",
            status: "Placeholder",
            note: "Publish aggregate team standings and manage Young Leaders Network & STEM Lab cohort invitations.",
          },
        ].map((card) => (
          <div key={card.code} className="p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-xs font-bold text-[var(--primary)]">
                {card.code}
              </span>
              <span className="font-mono-tech text-[11px] font-semibold uppercase text-amber-800">
                {card.status}
              </span>
            </div>
            <h2 className="mt-3 text-base font-bold text-slate-900">{card.title}</h2>
            <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
              {card.note}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 space-y-4 rounded-md border border-[var(--border-strong)] bg-[var(--secondary)] p-6 text-sm text-slate-900">
        <span className="editorial-kicker text-[var(--primary)]">
          SECURITY &amp; SAFEGUARDING GATES
        </span>
        <h2 className="sub-heading font-bold">Mandatory Pre-Launch Requirements</h2>
        <ul className="list-disc space-y-1.5 pl-5 text-slate-700">
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
        <p className="pt-1 font-medium text-slate-900">
          This dashboard is currently a structural placeholder. No real student data is processed
          here.
        </p>
      </div>
    </div>
  );
}
