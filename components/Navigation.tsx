import React from 'react';
import { SectionType } from '../types';

interface NavigationProps {
  activeSection: SectionType;
  onNavigate: (section: SectionType) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const links: { id: SectionType; label: string }[] = [
    { id: 'HOME', label: '00' },
    { id: 'EXPERIENCE', label: 'EXP' },
    { id: 'PROJECTS', label: 'PROJ' },
    { id: 'SKILLS', label: 'SKILLS' },
    { id: 'CONTACT', label: 'INFO' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-neutral-950 border-t border-white/20 shadow-2xl pb-safe">
      <div className="flex justify-between items-center max-w-4xl mx-auto px-4 sm:px-8 h-16 sm:h-20">
        <div className="flex space-x-2 sm:space-x-8 w-full justify-between sm:justify-center">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`
                relative group flex flex-col items-center justify-center h-full px-4
                transition-all duration-300 ease-out
                ${activeSection === link.id ? 'text-white' : 'text-neutral-400 hover:text-white'}
              `}
            >
              <span className={`text-xs sm:text-sm font-mono tracking-widest uppercase transition-opacity duration-300 ${activeSection === link.id ? 'opacity-100 font-bold' : 'opacity-70 group-hover:opacity-100'}`}>
                {link.label}
              </span>
              <span 
                className={`
                  absolute top-0 left-0 w-full h-[2px] bg-white transform transition-transform duration-300
                  ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}
                `} 
              />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;