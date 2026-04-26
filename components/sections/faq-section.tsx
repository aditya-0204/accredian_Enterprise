"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function FaqSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="faqs" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="FAQs"
          title="Questions teams usually ask before getting started"
          description="A quick overview of how enterprise engagement, customization, and delivery work."
        />

        <div className="mt-12 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = active === index;

            return (
              <div
                key={item.question}
                className="rounded-[1.5rem] border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => setActive(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-slate-950">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-slate-500 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen ? (
                  <div className="px-6 pb-6 text-lg leading-8 text-slate-600">
                    {item.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
