type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  center?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#246be8]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
