import { catItems } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function CatSection() {
  return (
    <section id="cat" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d9e7ff] bg-[radial-gradient(circle_at_top,rgba(36,107,232,0.12),transparent_35%),white] px-6 py-12 shadow-[0_20px_70px_rgba(36,107,232,0.08)] sm:px-8 lg:px-12">
        <SectionHeading
          title={
            <>
              The <span className="text-[#246be8]">CAT Framework</span>
            </>
          }
          description={
            <>
              Our proven approach to <span className="text-[#246be8]">learning excellence</span>
            </>
          }
        />

        <div className="mt-14 grid gap-8 xl:grid-cols-3">
          {catItems.map(({ title, description, icon: Icon }) => (
            <div key={title} className="relative flex min-h-80 items-center justify-center">
              <div className="absolute inset-0 rounded-[50%] border-[8px] border-[#2e8dd8] shadow-[0_0_0_1px_rgba(46,141,216,0.1)]" />
              <div className="relative z-10 max-w-xs text-center">
                <Icon className="mx-auto size-14 text-[#246be8]" />
                <h3 className="mt-7 text-5xl font-semibold tracking-tight text-slate-950">
                  {title}
                </h3>
                <p className="mt-5 text-xl leading-9 text-slate-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
