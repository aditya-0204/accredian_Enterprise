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

        <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-0">
          {stats.map((item, index) => (
            <div
              key={item.value}
              className={`px-6 text-center lg:px-12 ${
                index < stats.length - 1 ? "lg:border-r lg:border-slate-200" : ""
              }`}
            >
              <div className="mx-auto inline-flex rounded-full bg-[#dfeeff] px-10 py-3 text-4xl font-semibold text-[#246be8] sm:text-5xl">
                {item.value}
              </div>
              <p className="mx-auto mt-6 max-w-sm text-[1.05rem] font-medium leading-9 text-slate-950 sm:text-[1.15rem]">
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
