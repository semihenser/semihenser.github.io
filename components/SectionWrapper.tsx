import React from 'react';

interface SectionWrapperProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen pt-24 pb-32 px-6 sm:px-12 max-w-4xl mx-auto animate-fade-in-up">
      <header className="mb-16 border-b border-concrete pb-8">
        <h2 className="text-4xl sm:text-6xl font-sans font-bold tracking-tighter text-white uppercase mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-ash font-mono text-sm tracking-widest uppercase">
            // {subtitle}
          </p>
        )}
      </header>
      <main className="space-y-12">
        {children}
      </main>
    </div>
  );
};

export default SectionWrapper;