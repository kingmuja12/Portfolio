import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import Reveal from './Reveal';
import { profile } from '../data/content';

const LINKS = [
  { label: 'GitHub', href: profile.github, icon: Github, handle: '@kingmuja12' },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin, handle: 'abdulmujeeb-abdulwaheed' },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 py-24 sm:py-32">
      <div className="shell">
        <Reveal className="card relative overflow-hidden p-8 sm:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/[0.08] blur-[100px]"
          />

          <div className="relative max-w-2xl">
            <p className="eyebrow mb-3">Contact</p>
            <h2 id="contact-heading" className="text-headline font-semibold text-white">
              Let's build something
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              I'm looking for internships and interesting problems in AI, robotics, and embedded
              systems. If you're working on something in that space, I'd like to hear about it.
            </p>

            <a href={`mailto:${profile.email}`} className="btn-primary mt-9">
              <Mail aria-hidden="true" className="h-4 w-4" />
              {profile.email}
            </a>

            <ul className="mt-12 grid gap-3 border-t border-white/[0.07] pt-8 sm:grid-cols-2">
              {LINKS.map(({ label, href, icon: Icon, handle }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-lg p-3 transition-colors duration-200 hover:bg-white/[0.04]"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] text-zinc-400 transition-colors group-hover:text-accent">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-white">{label}</span>
                      <span className="block truncate font-mono text-xs text-muted">{handle}</span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="ml-auto h-4 w-4 shrink-0 text-zinc-600 transition-all duration-300 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
