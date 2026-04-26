import { PartnerLogo } from "@/components/partner-logo";
import { partners, stats } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function StatsSection() {
  return (
    <section id="stats" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title={
            <>
              Our <span className="text-[#246be8]">Track Record</span>
            </>
          }
          description={
            <>
              The numbers behind <span className="text-[#246be8]">our success</span>
            </>
          }
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {stats.map((item, index) => (
            <div
              key={item.value}
              className={`rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm ${
                index === 1 ? "lg:translate-y-4" : ""
              }`}
            >
              <div className="mx-auto inline-flex rounded-full bg-[#e8f1ff] px-8 py-4 text-5xl font-semibold text-[#246be8]">
                {item.value}
              </div>
              <p className="mx-auto mt-6 max-w-sm text-2xl leading-10 text-slate-900">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div id="clients" className="mt-24">
          <SectionHeading
            title={
              <>
                Our Proven <span className="text-[#246be8]">Partnerships</span>
              </>
            }
            description={
              <>
                Successful collaborations with the <span className="text-[#246be8]">industry&apos;s best</span>
              </>
            }
          />

          <div className="mt-12 grid items-end gap-y-8 sm:grid-cols-2 lg:grid-cols-6">
            {partners.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
