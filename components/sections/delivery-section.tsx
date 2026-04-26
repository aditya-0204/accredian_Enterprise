import { deliverySteps } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function DeliverySection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title={
            <>
              How We <span className="text-[#246be8]">Deliver Results</span> That Matter
            </>
          }
          description="A clear, outcome-focused journey from discovery to measurable impact."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {deliverySteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-[1.8rem] border border-slate-200 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-[#e8f1ff] text-2xl font-semibold text-[#246be8]">
                {index + 1}
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
