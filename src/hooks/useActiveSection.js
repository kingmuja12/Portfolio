import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in view, for the nav's active state.
 *
 * Uses IntersectionObserver rather than a scroll listener so the browser does
 * the work off the main thread.
 *
 * The observer watches a thin horizontal band near the top of the viewport.
 * Deliberately does NOT compare `intersectionRatio` between sections: a section
 * is usually several times taller than the band, so its ratio maxes out well
 * below 1 and never crosses a meaningful threshold. Instead it tracks which
 * sections touch the band and takes the last one in document order — the one
 * being scrolled into.
 */
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0 || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const intersecting = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) intersecting.add(entry.target.id);
          else intersecting.delete(entry.target.id);
        });

        for (let i = sectionIds.length - 1; i >= 0; i -= 1) {
          if (intersecting.has(sectionIds[i])) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
