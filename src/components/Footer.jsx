import React from 'react';
import { profile } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-10">
      <div className="shell flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">Built with React and Tailwind CSS</p>
      </div>
    </footer>
  );
}
