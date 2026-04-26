import { ArrowRight } from "lucide-react";
import { Check, credibility, heroHighlights } from "@/data/site";

export function HeroSection() {
  return (
    <section id="home" className="px-4 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-[#d9e7ff] bg-[#eef5ff] shadow-[0_30px_80px_rgba(36,107,232,0.12)]">
          <div className="grid items-center gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:py-16">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#246be8] shadow-sm">
                Enterprise upskilling, reimagined
              </p>
              <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Next-Gen <span className="text-[#246be8]">Expertise</span>
                <br />
                For Your <span className="text-[#246be8]">Enterprise</span>
              </h1>
              <p className="mt-6 max-w-xl text-xl leading-9 text-slate-700">
                Cultivate high-performance teams through expert learning pathways,
                practical programs, and measurable business outcomes.
              </p>

              <div className="mt-8 flex flex-wrap gap-5">
                {heroHighlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-lg text-slate-900">
                    <span className="flex size-7 items-center justify-center rounded-full border-2 border-[#14b862] text-[#14b862]">
                      <Check className="size-4" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#lead"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#246be8] px-7 py-4 text-lg font-semibold text-white shadow-[0_14px_30px_rgba(36,107,232,0.24)] transition hover:-translate-y-0.5 hover:bg-[#1c59c6]"
                >
                  Enquire Now
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 text-lg font-semibold text-slate-900 transition hover:border-[#246be8] hover:text-[#246be8]"
                >
                  Explore flow
                  <ArrowRight className="size-5" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-x-8 top-6 h-72 rounded-full bg-[#c7ddff] blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/80 bg-white/70 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur">
                <div className="grid min-h-[440px] gap-4 rounded-[1.5rem] bg-[linear-gradient(135deg,#dbeafe,#eff6ff_40%,#bfdbfe)] p-6 sm:grid-cols-[0.7fr_1fr]">
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="h-3 w-20 rounded-full bg-[#93c5fd]" />
                      <div className="mt-3 h-3 w-28 rounded-full bg-white/80" />
                    </div>
                    <div className="rounded-[1.5rem] bg-white/80 p-5 shadow-sm">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Trusted Outcomes
                      </p>
                      <p className="mt-3 text-4xl font-semibold text-slate-950">94%</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Of cohorts report stronger role confidence after program completion.
                      </p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_top,#ffffff_0%,#d3e7ff_35%,#8bb4ff_100%)]">
                    <div className="absolute left-8 top-12 h-48 w-48 rounded-full bg-white/60 blur-2xl" />
                    <div className="absolute bottom-0 left-8 right-8 top-10 rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,#f8fbff,#dbeafe)] shadow-[0_30px_40px_rgba(36,107,232,0.18)]">
                      <div className="absolute bottom-0 left-7 h-60 w-34 rounded-t-[4rem] bg-[linear-gradient(180deg,#0f172a,#1e3a8a)] shadow-[0_16px_30px_rgba(15,23,42,0.22)]">
                        <div className="absolute -top-10 left-7 size-18 rounded-full border-4 border-white/50 bg-[linear-gradient(180deg,#fdba74,#fb7185)]" />
                      </div>
                      <div className="absolute bottom-0 left-22 h-72 w-44 rounded-t-[4.5rem] bg-[linear-gradient(180deg,#f8fafc,#d1d5db)] shadow-[0_16px_30px_rgba(15,23,42,0.16)]">
                        <div className="absolute -top-12 left-11 size-24 rounded-full border-4 border-white/80 bg-[linear-gradient(180deg,#7c2d12,#f59e0b)]" />
                        <div className="absolute left-[-2.5rem] top-32 h-26 w-40 rotate-[-8deg] rounded-2xl border border-slate-300 bg-[linear-gradient(180deg,#f8fafc,#cbd5e1)] shadow-[0_18px_25px_rgba(15,23,42,0.18)]" />
                      </div>
                      <div className="absolute bottom-0 right-8 h-56 w-30 rounded-t-[3rem] bg-[linear-gradient(180deg,#1e40af,#60a5fa)] shadow-[0_16px_30px_rgba(15,23,42,0.2)]">
                        <div className="absolute -top-8 left-5 size-16 rounded-full border-4 border-white/60 bg-[linear-gradient(180deg,#f8fafc,#cbd5e1)]" />
                      </div>
                      <div className="absolute right-10 top-8 rounded-2xl bg-white/80 px-4 py-3 shadow-md">
                        <p className="text-sm font-semibold text-slate-500">Enterprise Cohorts</p>
                        <p className="text-2xl font-semibold text-slate-950">200+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/70 bg-white/65 px-6 py-5 sm:px-10 lg:px-16">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {credibility.map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3">
                  <Icon className="size-5 text-[#246be8]" />
                  <span className="text-sm font-medium text-slate-700">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
