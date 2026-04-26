import { ChevronRight } from "lucide-react";
import { edgeItems } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

const topIndices = [0, 2, 4, 6];
const bottomIndices = [1, 3, 5];
const topConnectorHeight = 138;
const bottomConnectorHeight = 180;

export function EdgeSection() {
  return (
    <section id="edge" className="overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title={
            <>
              The <span className="text-[#246be8]">Accredian Edge</span>
            </>
          }
          description={
            <>
              Key aspects of <span className="text-[#246be8]">our strategic training</span>
            </>
          }
        />

        <div className="mt-16 lg:hidden">
          <div className="space-y-8">
            {edgeItems.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-[1.75rem] border border-[#dce9ff] bg-white p-5 shadow-sm"
              >
                <div className="relative mt-1 shrink-0">
                  <div className="flex size-20 items-center justify-center rounded-full border-2 border-[#4ba7ef] bg-white shadow-[0_14px_28px_rgba(15,23,42,0.12)]">
                    <div className="flex size-14 items-center justify-center rounded-full bg-[#2d65b6] text-white">
                      <Icon className="size-7" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
                  <p className="mt-3 text-lg leading-8 text-slate-700">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-20 hidden lg:block">
          <div className="mx-auto grid max-w-[1320px] grid-cols-7 grid-rows-[150px_196px_154px] items-start gap-x-0">
            {topIndices.map((itemIndex, column) => {
              const item = edgeItems[itemIndex];

              return (
                <div
                  key={item.title}
                  className="relative row-start-1 self-end"
                  style={{ gridColumnStart: column * 2 + 1 }}
                >
                  <div className="relative mx-auto w-[190px] pt-3">
                    <span className="absolute left-1/2 top-2 z-10 size-2.5 -translate-x-1/2 rounded-full bg-[#2e8dd8]" />
                    <span
                      className="absolute left-1/2 top-[20px] w-[2px] -translate-x-1/2 bg-[#2e78d6]"
                      style={{ height: `${topConnectorHeight}px` }}
                    />
                    <div className="relative w-[280px] pl-[108px]">
                      <h3 className="text-[1rem] font-semibold leading-7 text-slate-950 xl:text-[1.08rem]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[0.92rem] leading-7 text-slate-800">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {edgeItems.map(({ title, icon: Icon }, index) => (
              <div
                key={title}
                className="relative row-start-2 flex items-center justify-center"
                style={{ gridColumnStart: index + 1 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-[146px] rounded-full border-2 border-dashed border-slate-300/85" />
                </div>

                <div className="relative z-10 flex size-[138px] items-center justify-center rounded-full border-[3px] border-[#4ba7ef] bg-white shadow-[0_16px_24px_rgba(15,23,42,0.22)]">
                  <div
                    className={`flex size-24 items-center justify-center rounded-full border-2 text-white ${
                      index === 0
                        ? "border-[#6dd3ff] bg-[#38aee8]"
                        : index === 5
                          ? "border-[#0f4f9b] bg-[#0d5aa8]"
                          : "border-[#5c8dd9] bg-[#2d65b6]"
                    }`}
                  >
                    <Icon className="size-10" strokeWidth={1.8} />
                  </div>
                </div>

                {index < edgeItems.length - 1 ? (
                  <div className="absolute left-[calc(100%-28px)] top-1/2 z-20 flex -translate-y-1/2 items-center text-slate-300">
                    <ChevronRight className="size-10" strokeWidth={1.8} />
                    <ChevronRight className="-ml-4 size-10" strokeWidth={1.8} />
                  </div>
                ) : (
                  <div className="absolute -right-2.5 top-1/2 z-20 -translate-y-1/2 text-slate-300">
                    <span className="block text-xl">▲</span>
                  </div>
                )}

                {index === 0 ? (
                  <div className="absolute -left-4 top-1/2 z-20 -translate-y-1/2 text-slate-300">
                    <span className="block text-lg">•</span>
                  </div>
                ) : null}
              </div>
            ))}

            {bottomIndices.map((itemIndex, offset) => {
              const item = edgeItems[itemIndex];

              return (
                <div
                  key={item.title}
                  className="relative row-start-3"
                  style={{ gridColumnStart: offset * 2 + 2 }}
                >
                  <div className="relative mx-auto w-[160px] pt-3">
                    <span
                      className="absolute left-1/2 bottom-[calc(100%+1px)] w-[2px] -translate-x-1/2 bg-[#2e78d6]"
                      style={{ height: `${bottomConnectorHeight}px` }}
                    />
                    <span className="absolute left-1/2 top-[2px] z-10 size-2.5 -translate-x-1/2 rounded-full bg-[#2e8dd8]" />
                    <div className="relative w-[240px] pl-[108px]">
                      <h3 className="text-[1rem] font-semibold leading-7 text-slate-950 xl:text-[1.08rem]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[0.92rem] leading-7 text-slate-800">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
