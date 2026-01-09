import React from 'react';
import InteractiveSelector from '@/components/InteractiveSelector';

const SelectorShowcase: React.FC = () => {
  return (
    <section
      id="selector"
      className="py-20 md:py-28 bg-gradient-to-b from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-600 font-semibold">Experiencias Interactivas</p>
        </div>
        <div className="mt-10">
          <InteractiveSelector />
        </div>
      </div>
    </section>
  );
};

export default SelectorShowcase;
