import { footerContact, footerCta, footerLinks, socialLinks } from "@/data/site";

export function Footer() {
  const CtaIcon = footerCta.icon;
  const ButtonIcon = footerCta.buttonIcon;

  return (
    <footer className="bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[1.35rem] bg-[#246be8] text-white">
          <div className="relative flex flex-col gap-6 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-10">
            <div className="absolute right-8 top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full border border-white/10 lg:block" />
            <div className="absolute right-28 top-1/2 hidden h-56 w-56 -translate-y-1/2 rounded-full border border-white/10 lg:block" />
            <div className="absolute right-44 top-1/2 hidden h-40 w-40 -translate-y-1/2 rounded-full border border-white/10 lg:block" />

            <div className="relative z-10 flex items-center gap-4">
              <div className="flex size-24 shrink-0 items-center justify-center rounded-[1.1rem] bg-white text-[#246be8] shadow-sm">
                <CtaIcon className="size-11" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[2.2rem]">
                  {footerCta.title}
                </h3>
                <p className="mt-2 text-lg font-medium text-white/95 sm:text-xl">
                  {footerCta.subtitle}
                </p>
              </div>
            </div>

            <a
              href="#lead"
              className="relative z-10 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-xl font-semibold text-[#246be8] transition hover:bg-slate-50 sm:self-start lg:self-auto"
            >
              {footerCta.button}
              <ButtonIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <div className="text-[3rem] font-black leading-none tracking-tight text-[#246be8]">
              accredian
            </div>
            <div className="-mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-400">
              credentials that matter
            </div>

            <div className="mt-8 flex items-center gap-5 text-slate-600">
              {socialLinks.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="transition hover:text-[#246be8]"
                >
                  <Icon className="size-7" strokeWidth={1.9} />
                </a>
              ))}
            </div>
          </div>

          <div className="text-left lg:text-right">
            <a
              href="#lead"
              className="inline-flex items-center justify-center rounded-[0.9rem] bg-[#246be8] px-8 py-4 text-[1.05rem] font-semibold text-white transition hover:bg-[#1c59c6]"
            >
              Enquire Now
            </a>
            <p className="mt-3 text-[0.95rem] text-slate-700">Speak with our Advisor</p>
          </div>
        </div>

        <div className="mt-8 h-px bg-slate-400/60" />

        <div className="grid gap-10 py-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h4 className="text-[1.1rem] font-semibold text-slate-950">Accredian</h4>
            <div className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-[0.98rem] text-slate-700 transition hover:text-[#246be8]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[1.1rem] font-semibold text-slate-950">Contact Us</h4>
            <div className="mt-4 space-y-3 text-[0.98rem] leading-8 text-slate-700">
              <p>
                Email us:{" "}
                <a href={`mailto:${footerContact.email}`} className="text-[#246be8]">
                  {footerContact.email}
                </a>
              </p>
              <p>Office Address: {footerContact.address}</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-slate-400/60" />

        <p className="py-4 text-center text-[0.95rem] text-slate-700">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
