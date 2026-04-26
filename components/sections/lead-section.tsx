"use client";

import { FormEvent, useState } from "react";
import { formOptions } from "@/data/site";

type Status = {
  type: "idle" | "success" | "error" | "loading";
  message?: string;
};

export function LeadSection() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setStatus({ type: "loading", message: "Submitting..." });

    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = (await response.json()) as { message?: string };

    if (!response.ok) {
      setStatus({
        type: "error",
        message: data.message ?? "Something went wrong."
      });
      return;
    }

    event.currentTarget.reset();
    setStatus({
      type: "success",
      message: "Thanks! We have captured your enquiry."
    });
  }

  return (
    <section id="lead" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#dce9ff] bg-[linear-gradient(135deg,#0f172a,#246be8_45%,#8bb4ff)] px-6 py-12 text-white shadow-[0_30px_80px_rgba(15,23,42,0.26)] sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">
              Lead Capture
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Start the conversation with your enterprise team
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
              This bonus section uses a Next.js API route to handle a simple mock
              lead submission.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-[1.75rem] bg-white/10 p-6 backdrop-blur md:grid-cols-2"
          >
            <input
              name="name"
              placeholder="Your name"
              className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-white placeholder:text-white/65 outline-none focus:border-white"
            />
            <input
              name="company"
              placeholder="Company"
              className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-white placeholder:text-white/65 outline-none focus:border-white"
            />
            <input
              name="email"
              type="email"
              placeholder="Work email"
              className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-white placeholder:text-white/65 outline-none focus:border-white"
            />
            <select
              name="teamSize"
              defaultValue=""
              className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-white outline-none focus:border-white"
            >
              <option value="" disabled className="text-slate-900">
                Team size
              </option>
              {formOptions.map((option) => (
                <option key={option} value={option} className="text-slate-900">
                  {option}
                </option>
              ))}
            </select>
            <textarea
              name="goal"
              rows={4}
              placeholder="What outcome do you want to drive?"
              className="md:col-span-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-white placeholder:text-white/65 outline-none focus:border-white"
            />
            <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-lg font-semibold text-[#246be8] transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status.type === "loading" ? "Submitting..." : "Request a callback"}
              </button>
              <p
                className={`text-sm ${
                  status.type === "error" ? "text-red-200" : "text-white/80"
                }`}
              >
                {status.message ?? "Typical response time: within one business day."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
