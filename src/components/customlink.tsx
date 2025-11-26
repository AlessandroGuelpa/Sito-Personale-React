import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Definiamo i "tipi" che il componente accetta
interface CustomLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode; // Accetta testo, icone o altri elementi React
}

const CustomLink = ({ href, children, className}: CustomLinkProps) => {
  const baseClasses = "group relative inline-block font-medium cursor-pointer";
  const finalClass = `${baseClasses} ${className || 'text-violet-600 dark:text-violet-500'}`;
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link to={href} className={finalClass}>
      {children}
      <span 
        className={`absolute bottom-0 left-0 h-[2px] bg-violet-600 transition-all duration-300 ease-in-out 
        ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
      ></span>
    </Link>
  )
};

export default CustomLink;