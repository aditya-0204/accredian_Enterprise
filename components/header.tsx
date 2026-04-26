"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const getSections = () =>
      navItems
        .map((item) => {
          const element = document.querySelector<HTMLElement>(item.href);
          return element ? { href: item.href, element } : null;
        })
        .filter((item): item is { href: string; element: HTMLElement } => Boolean(item));

    const updateActive = () => {
      const sections = getSections();
      const marker = window.scrollY + 140;

      let current = sections[0]?.href ?? "#home";

      for (const section of sections) {
        if (section.element.offsetTop <= marker) {
          current = section.href;
        }
      }

      setActive(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="shrink-0">
          <div className="text-4xl font-black leading-none tracking-tight text-[#246be8]">
            accredian
          </div>
          <div className="-mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-400">
            credentials that matter
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`border-b-3 pb-1 text-base font-medium transition ${
                  isActive
                    ? "border-[#246be8] text-[#246be8]"
                    : "border-transparent text-slate-900 hover:text-[#246be8]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-slate-200 p-2 text-slate-900 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#246be8]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
