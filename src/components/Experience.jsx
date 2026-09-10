import React from 'react';
import { MapPin } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import { experiences } from '../data/content';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="What I've shipped"
      intro="Two startups I co-founded as CTO, and two internships inside teams building real hardware."
    >
      <ol className="relative space-y-4 border-l border-white/[0.12] pl-6 sm:pl-10">
        {experiences.map((role, index) => (
          <Reveal as="li" key={`${role.company}-${role.period}`} delay={index * 70} className="relative">
            {/* Timeline node, aligned to the rail. */}
            <span
              aria-hidden="true"
              className={`absolute -left-[1.6875rem] top-8 h-2.5 w-2.5 rounded-full ring-4 ring-ink-950 sm:-left-[2.6875rem] ${
                role.current ? 'bg-accent' : 'bg-zinc-700'
              }`}
            />

            <article className="card-interactive p-6 sm:p-8">
              <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{role.title}</h3>
                  <p className="mt-1 flex flex-wrap items-center gap-2 text-accent">
                    {role.company}
                    {role.current && (
                      <span className="rounded border border-accent/25 bg-accent/[0.08] px-1.5 py-0.5 font-mono text-[0.6875rem] uppercase tracking-wider">
                        Current
                      </span>
                    )}
                  </p>
                </div>
                <div className="shrink-0 sm:text-right">
                  <p className="font-mono text-sm text-zinc-400">{role.period}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted sm:justify-end">
                    <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
                    {role.location}
                  </p>
                </div>
              </header>

              <p className="mt-5 leading-relaxed text-zinc-400">{role.summary}</p>

              {role.highlights?.length > 0 && (
                <ul className="mt-5 space-y-2.5">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                      <span aria-hidden="true" className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              <ul className="mt-6 flex flex-wrap gap-2">
                {role.tech.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
