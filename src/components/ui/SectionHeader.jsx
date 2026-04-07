export default function SectionHeader({ eyebrow, headline, subheadline, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-4 mb-14 ${alignClass}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      )}
      {headline && (
        <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight max-w-2xl">
          {headline}
        </h2>
      )}
      {subheadline && (
        <p className="text-lg text-[#666666] max-w-xl leading-relaxed">
          {subheadline}
        </p>
      )}
    </div>
  );
}
