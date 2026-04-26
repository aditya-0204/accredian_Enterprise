import { domains } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function DomainSection() {
  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title={
            <>
              Our <span className="text-[#246be8]">Domain Expertise</span>
            </>
          }
          description={
            <>
              <span className="text-[#246be8]">Specialized programs</span> designed to fuel innovation
            </>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {domains.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-8 text-center shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1"
            >
              <Icon className="mx-auto size-14 text-[#3467e5]" />
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
