import React from 'react';
import Reveal from './Reveal';

/** A page section with a consistent eyebrow + heading block. */
export default function Section({ id, eyebrow, title, intro, children, className = '' }) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className={`scroll-mt-20 py-24 sm:py-32 ${className}`}>
      <div className="shell">
        <Reveal className="mb-14 max-w-prose">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h2 id={headingId} className="text-headline font-semibold text-white">
            {title}
          </h2>
          {intro && <p className="mt-5 text-lg leading-relaxed text-zinc-400">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
