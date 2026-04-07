'use client';

export default function Button({
  variant = 'filled',
  size = 'md',
  icon,
  children,
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = '',
  target,
  rel,
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-btn transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4',
  };

  const variants = {
    filled: 'bg-accent text-white hover:bg-accentDark shadow-sm hover:shadow-md',
    ghost: 'bg-transparent text-accent border border-accent hover:bg-accent hover:text-white',
    text: 'bg-transparent text-accent hover:underline px-0',
    white: 'bg-white text-accent hover:bg-accentLight',
    whiteGhost: 'bg-transparent text-white border border-white hover:bg-white hover:text-accent',
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {icon && <span className="w-4 h-4">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </button>
  );
}
