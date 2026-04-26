import { PartnerLogo } from "@/components/partner-logo";
import { partners, testimonials } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title={
            <>
              Testimonials from <span className="text-[#246be8]">Our Partners</span>
            </>
          }
          description={
            <>
              What <span className="text-[#246be8]">our clients</span> are saying
            </>
          }
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {testimonials.map((testimonial) => {
            const partner = partners.find((item) => item.name === testimonial.company);

            return (
              <figure
                key={testimonial.company}
                className="min-h-[19rem] rounded-[1.8rem] border border-slate-200 bg-white px-8 py-10"
              >
                <div className="mb-8 max-w-[7.5rem]">
                  {partner ? <PartnerLogo partner={partner} /> : null}
                </div>

                <blockquote className="text-[1.05rem] leading-10 text-slate-700 xl:text-[1.1rem]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </figure>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="size-3 rounded-full bg-[#246be8]" />
          <span className="size-3 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
}
