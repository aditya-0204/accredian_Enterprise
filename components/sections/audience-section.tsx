import { audiences } from "@/data/site";

export function AudienceSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#246be8] px-8 py-12 text-white shadow-[0_30px_70px_rgba(36,107,232,0.28)] sm:px-12 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative">
            <p className="text-2xl font-medium text-white/90">Who Should Join?</p>
            <h2 className="mt-3 text-5xl font-semibold tracking-tight">
              Strategic Skill Enhancement
            </h2>
            <div className="relative mt-12 h-80 overflow-hidden rounded-[2rem] border border-white/15 bg-[radial-gradient(circle_at_top,#7fb2ff,#246be8_58%)]">
              <div className="absolute left-6 top-6 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/85">
                Team Snapshot
              </div>
              <div className="absolute right-6 top-6 rounded-2xl bg-white/12 px-4 py-3 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">Capability Lift</p>
                <p className="mt-1 text-2xl font-semibold">+38%</p>
              </div>

              <div className="absolute bottom-0 left-8 h-56 w-36 rounded-t-[4rem] bg-[linear-gradient(180deg,#111827,#475569)] shadow-[0_18px_25px_rgba(15,23,42,0.25)]">
                <div className="absolute -top-10 left-8 size-20 rounded-full border-4 border-white/40 bg-[linear-gradient(180deg,#fde68a,#f59e0b)]" />
                <div className="absolute inset-x-5 top-20 rounded-3xl bg-white/10 p-3 backdrop-blur">
                  <div className="h-2 w-16 rounded-full bg-white/55" />
                  <div className="mt-2 h-2 w-24 rounded-full bg-white/30" />
                </div>
              </div>

              <div className="absolute bottom-0 left-36 h-64 w-40 rounded-t-[4.5rem] bg-[linear-gradient(180deg,#f8fafc,#dbeafe)] shadow-[0_18px_25px_rgba(15,23,42,0.18)]">
                <div className="absolute -top-12 left-10 size-24 rounded-full border-4 border-white/70 bg-[linear-gradient(180deg,#1f2937,#64748b)]" />
                <div className="absolute inset-x-6 top-24 rounded-3xl bg-[#246be8]/10 p-4">
                  <div className="h-2 w-20 rounded-full bg-[#246be8]/40" />
                  <div className="mt-2 h-2 w-28 rounded-full bg-[#246be8]/20" />
                </div>
              </div>

              <div className="absolute bottom-10 right-2 w-44 rounded-[1.5rem] border border-white/20 bg-white/12 p-4 backdrop-blur">
                <p className="text-sm font-semibold text-white">Role-aligned learning</p>
                <p className="mt-2 text-sm leading-6 text-white/78">
                  Custom journeys for tech, non-tech, emerging, and senior professionals.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {audiences.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[1.5rem] border border-white/15 bg-white/5 p-6 backdrop-blur">
                <Icon className="size-12 text-white" />
                <h3 className="mt-5 text-3xl font-semibold">{title}</h3>
                <p className="mt-3 text-lg leading-8 text-white/80">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
