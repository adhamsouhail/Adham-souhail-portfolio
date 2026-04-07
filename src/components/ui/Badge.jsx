export default function Badge({ label, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-accentLight text-[#3C3489]',
    dark: 'bg-dark text-white',
    outline: 'border border-accent text-accent bg-transparent',
  };

  return (
    <span
      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full tracking-wide ${variants[variant]} ${className}`}
    >
      {label}
    </span>
  );
}
