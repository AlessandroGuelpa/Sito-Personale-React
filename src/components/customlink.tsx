import React from 'react';

// Definiamo i "tipi" che il componente accetta
interface CustomLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode; // Accetta testo, icone o altri elementi React
}
const baseClasses = "group relative inline-block text-violet-600 dark:text-violet-500 font-medium cursor-pointer";
const CustomLink = ({ href, children, className}: CustomLinkProps) => {
  return (
    <a 
      href={href} 
      className={`${baseClasses} ${className || ''}`}
    >
      {children}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-violet-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </a>
  );
};

export default CustomLink;