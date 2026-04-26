import { process } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How It Works"
          title="A streamlined enterprise learning rollout"
          description="Designed for teams that want clarity, speed, and measurable outcomes."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {process.map((item, index) => (
            <div key={item.title} className="relative rounded-[1.8rem] bg-slate-950 p-[1px]">
              <div className="h-full rounded-[1.75rem] bg-white p-8">
                <div className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                  Step {index + 1}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
