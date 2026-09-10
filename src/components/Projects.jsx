import React from 'react';
import { Activity, ArrowUpRight, BookOpen, Brain, Cpu, Github, Mic, Server } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import { projects } from '../data/content';

// Icon names in content.js map to components here, so the data file stays JSX-free.
const ICONS = {
  cpu: Cpu,
  activity: Activity,
  brain: Brain,
  server: Server,
  mic: Mic,
  book: BookOpen,
};

function ProjectCard({ project }) {
  const Icon = ICONS[project.icon] ?? Cpu;
  const href = project.link || project.repo;

  // Only the whole card becomes a link when there's somewhere to go.
  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group flex h-full flex-col p-6 sm:p-7 ${
        href ? 'card-interactive' : 'card'
      }`}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/[0.07] text-accent">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>
        {href && (
          <span className="flex items-center gap-1.5 font-mono text-xs text-muted transition-colors group-hover:text-accent">
            {project.repo && !project.link ? (
              <>
                <Github aria-hidden="true" className="h-3.5 w-3.5" />
                Code
              </>
            ) : (
              'Visit'
            )}
            <ArrowUpRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-300 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{project.blurb}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li key={tech} className="chip">
            {tech}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      intro="Robotics, AI systems, and the networking plumbing underneath them."
      className="bg-ink-900/40"
    >
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 60} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
