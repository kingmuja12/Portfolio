import React from 'react';
import { GraduationCap, Trophy } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import { about } from '../data/content';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Where software meets hardware">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal className="space-y-6">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-lg leading-relaxed text-zinc-400">
              {paragraph}
            </p>
          ))}

          <ul className="flex flex-wrap gap-2 pt-4">
            {about.interests.map((interest) => (
              <li key={interest} className="chip">
                {interest}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="space-y-4">
          <div className="card p-6">
            <div className="mb-4 flex items-center gap-3">
              <GraduationCap aria-hidden="true" className="h-5 w-5 text-accent" />
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
                Education
              </h3>
            </div>
            <p className="font-medium text-white">{about.education.school}</p>
            <p className="mt-1 text-sm text-zinc-400">{about.education.degree}</p>
            <p className="mt-3 font-mono text-sm text-accent">{about.education.detail}</p>
          </div>

          <div className="card p-6">
            <div className="mb-4 flex items-center gap-3">
              <Trophy aria-hidden="true" className="h-5 w-5 text-accent" />
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
                Recognition
              </h3>
            </div>
            <ul className="space-y-2.5">
              {about.awards.map((award) => (
                <li key={award} className="flex gap-3 text-sm text-zinc-300">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {award}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
