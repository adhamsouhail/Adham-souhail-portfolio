'use client';

export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`bg-white border border-[#EEEEEE] rounded-card p-8 transition-all duration-300 ease-out ${
        hover
          ? 'hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(90,55,236,0.10)] hover:border-l-4 hover:border-l-accent'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
