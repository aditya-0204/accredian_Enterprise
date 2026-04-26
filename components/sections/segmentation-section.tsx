import Image from "next/image";
import { segments } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function SegmentationSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title={
            <>
              Tailored <span className="text-[#246be8]">Course Segmentation</span>
            </>
          }
          description={
            <>
              Explore <span className="text-[#246be8]">custom-fit courses</span> designed to address every professional focus
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {segments.map((segment) => (
            <article
              key={segment.title}
              className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.1)]"
            >
              <div className={`relative h-52 bg-gradient-to-br ${segment.tint}`}>
                <Image
                  src={segment.image}
                  alt={segment.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 50vw, 25vw"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-[#246be8]">{segment.title}</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">{segment.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
