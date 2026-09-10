import React from 'react';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile, stats } from '../data/content';

export default function Hero() {
  const scrollToAbout = (event) => {
    event.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      {/* A single soft glow behind the headline, and a faint grid for depth. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/[0.07] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)',
          }}
        />
      </div>

      <div className="shell relative z-10 py-20">
        <div className="max-w-3xl">
          {profile.availability.show && (
            <p className="mb-8 inline-flex animate-fade-in items-center gap-2.5 rounded-full border border-accent/25 bg-accent/[0.06] px-3.5 py-1.5 text-sm text-accent-soft">
              <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {profile.availability.text}
            </p>
          )}

          {profile.photo && (
            <img
              src={`${process.env.PUBLIC_URL}/${profile.photo}`}
              alt={profile.name}
              width="80"
              height="80"
              className="mb-8 h-20 w-20 animate-fade-in rounded-full border border-white/10 object-cover"
            />
          )}

          <h1 className="animate-fade-up text-display font-semibold text-white">
            {profile.name.split(' ')[0]}
            <br />
            <span className="text-muted">{profile.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <p
            className="mt-8 max-w-2xl animate-fade-up text-lede text-zinc-400"
            style={{ animationDelay: '120ms' }}
          >
            {profile.tagline}
          </p>

          <p
            className="mt-6 flex animate-fade-up items-center gap-2 font-mono text-sm text-muted"
            style={{ animationDelay: '180ms' }}
          >
            <MapPin aria-hidden="true" className="h-4 w-4" />
            {profile.location}
          </p>

          <div
            className="mt-10 flex animate-fade-up flex-wrap items-center gap-3"
            style={{ animationDelay: '240ms' }}
          >
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail aria-hidden="true" className="h-4 w-4" />
              Get in touch
            </a>

            {profile.resume && (
              <a
                href={`${process.env.PUBLIC_URL}/${profile.resume}`}
                download
                className="btn-ghost"
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                Download resume
              </a>
            )}

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github aria-hidden="true" className="h-4 w-4" />
              GitHub
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 opacity-50" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Linkedin aria-hidden="true" className="h-4 w-4" />
              LinkedIn
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 opacity-50" />
            </a>
          </div>

          <dl
            className="mt-16 grid animate-fade-up grid-cols-2 gap-x-6 gap-y-8 border-t border-white/[0.07] pt-10 sm:grid-cols-4"
            style={{ animationDelay: '320ms' }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-3xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 block text-sm text-muted">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <a
        href="#about"
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full p-2 text-zinc-600 transition-colors hover:text-accent md:block"
      >
        <ArrowDown aria-hidden="true" className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
