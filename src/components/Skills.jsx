import React from 'react';
import Section from './Section';
import Reveal from './Reveal';
import { skillGroups } from '../data/content';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I reach for"
      intro="Grouped by what I use them for, not scored out of ten."
    >
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.label}
            delay={index * 60}
            className={index === 0 ? 'md:col-span-2' : ''}
          >
            <div className="card h-full p-6 sm:p-7">
              <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300 transition-colors duration-200 hover:border-accent/30 hover:text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
