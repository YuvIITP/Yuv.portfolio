import React from 'react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  id?: string;
  label?: string;
}

export default function LiveProjectButton({
  onClick,
  href,
  className = '',
  id,
  label = 'Live Project',
}: LiveProjectButtonProps) {
  const baseClasses = `inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10 active:scale-95 cursor-pointer whitespace-nowrap ${className}`;

  if (href) {
    return (
      <a
        id={id}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {label}
      </a>
    );
  }

  return (
    <button id={id} type="button" onClick={onClick} className={baseClasses}>
      {label}
    </button>
  );
}
