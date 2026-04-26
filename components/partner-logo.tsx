type Partner = {
  name: string;
  wordmark: string;
  accent: string;
  textClass: string;
  subtitle: string;
};

export function PartnerLogo({ partner }: { partner: Partner }) {
  const isBayer = partner.name === "Bayer";
  const isIbm = partner.name === "IBM";
  const isAdp = partner.name === "ADP";
  const isCrif = partner.name === "CRIF";
  const isHcl = partner.name === "HCL";
  const isReliance = partner.name === "Reliance";

  return (
    <div className="flex min-h-28 items-center justify-center px-3 py-4">
      <div className="text-center">
        {isBayer ? (
          <div className="mx-auto flex size-24 items-center justify-center rounded-full border-[5px] border-[#7ac943] text-center text-[0.95rem] font-black leading-none tracking-[0.22em] text-[#184d79]">
            <span className="block">
              BA
              <br />
              YE
              <br />
              R
            </span>
          </div>
        ) : isIbm ? (
          <div
            className={`text-5xl font-black uppercase tracking-[0.18em] ${partner.textClass} [text-shadow:0_1px_0_rgba(255,255,255,0.6)]`}
            style={{
              backgroundImage:
                "repeating-linear-gradient(180deg,currentColor 0 5px,transparent 5px 9px)",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            {partner.wordmark}
          </div>
        ) : isAdp ? (
          <div className={`text-5xl font-black italic tracking-tight ${partner.textClass}`}>
            {partner.wordmark}
          </div>
        ) : isCrif ? (
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl font-black italic text-[#f78a1d]">~</span>
            <span className={`text-5xl font-black italic ${partner.textClass}`}>
              {partner.wordmark}
            </span>
          </div>
        ) : isHcl ? (
          <div className={`text-5xl font-black italic tracking-[0.12em] ${partner.textClass}`}>
            {partner.wordmark}
          </div>
        ) : isReliance ? (
          <div className="text-center">
            <div className="mx-auto mb-2 flex size-9 items-center justify-center rounded-full bg-[#c9a754] text-[#fff7df]">
              <div className="h-4 w-4 rounded-full border-[3px] border-current border-r-transparent" />
            </div>
            <div className={`${partner.textClass} text-[2.4rem] font-medium leading-none`}>
              {partner.wordmark}
            </div>
          </div>
        ) : (
          <div className={`${partner.textClass} text-4xl font-black tracking-tight`}>
            {partner.wordmark}
          </div>
        )}

        <p
          className={`mt-1 text-xs ${
            isReliance
              ? "font-medium tracking-[0.16em] text-slate-500"
              : "font-semibold uppercase tracking-[0.24em] text-slate-400"
          }`}
        >
          {isReliance ? "Industries Limited" : partner.subtitle}
        </p>
      </div>
    </div>
  );
}
