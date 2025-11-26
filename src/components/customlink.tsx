import React from 'react';

// Definiamo i "tipi" che il componente accetta
interface CustomLinkProps {
  href: string;
  children: React.ReactNode; // Accetta testo, icone o altri elementi React
}

const CustomLink = ({ href, children }: CustomLinkProps) => {
  return (
    <a 
      href={href} 
      className="group relative inline-block text-slate-800 font-medium cursor-pointer"
    >
      {children}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-indigo-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </a>
  );
};

export default CustomLink;