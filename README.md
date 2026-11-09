# Portfolio

[![Build check](https://github.com/kingmuja12/Portfolio/actions/workflows/build-check.yml/badge.svg)](https://github.com/kingmuja12/Portfolio/actions/workflows/build-check.yml)

Personal site for Abdulmujeeb Abdulwaheed — computer engineer, CTO at RespAi.

**Who it's for:** recruiters, hiring managers, and collaborators who want one
place to see Abdulmujeeb's experience, projects, and skills.

**Live:** https://kingmuja12.github.io/Portfolio/

Built with Create React App, Tailwind CSS, and lucide-react. Deploys to GitHub
Pages automatically on every push to `main`.

## Run it locally

```bash
npm install
npm start
```

The dev server runs at http://localhost:3000/Portfolio.

To check a production build:

```bash
npm run build
npx serve -s build
```

## Update the content

All copy, roles, projects, and skills live in one file:

**[`src/data/content.js`](src/data/content.js)**

Edit that file and the site updates — you shouldn't need to touch the components
for routine changes. It holds:

| Export | What it controls |
| --- | --- |
| `profile` | Name, tagline, location, links, photo, resume, availability banner |
| `stats` | The four numbers under the hero |
| `about` | Bio paragraphs, education, awards, interests |
| `experiences` | Work history timeline |
| `projects` | Project cards (add `repo` or `link` to make a card clickable) |
| `skillGroups` | Skills, grouped by domain |
| `navItems` | Nav links and their target section ids |

### Add your resume

1. Drop the PDF in `public/`.
2. Set `profile.resume` to the filename in `src/data/content.js`.

The "Download resume" button appears once that's set, and stays hidden while
it's `null`.

### Add a headshot

1. Drop the image in `public/`.
2. Set `profile.photo` to the filename.

Leave it `null` to keep the text-only hero.

## Project structure

```
src/
├── data/content.js        All site content
├── components/            One file per section
│   ├── Nav.jsx            Sticky nav, scroll spy, mobile menu
│   ├── Hero.jsx           Name, tagline, CTAs, stats
│   ├── About.jsx          Bio, education, awards
│   ├── Experience.jsx     Work timeline
│   ├── Projects.jsx       Project grid
│   ├── Skills.jsx         Grouped skills
│   ├── Contact.jsx        Email and social links
│   ├── Footer.jsx
│   ├── Section.jsx        Shared section heading
│   └── Reveal.jsx         Scroll-triggered fade-in
├── hooks/
│   ├── useActiveSection.js  Tracks the section in view
│   └── useScrolled.js       Nav background on scroll
├── Portfolio.jsx          Composes the page
├── App.js
└── index.css              Design tokens and component classes
```

## Design notes

- **One accent color** (cyan `#22D3EE`) against a near-black background.
  Headings are white, not gradient-filled.
- **All text meets WCAG AA** (4.5:1 minimum). The `muted` grey in
  `tailwind.config.js` was picked to clear that bar — `zinc-500` does not.
- **Motion is optional.** Everything animated is disabled under
  `prefers-reduced-motion: reduce`.
- **Skills aren't scored.** Percentage bars are arbitrary, so skills are grouped
  by domain instead.

## Social preview

`public/og-image.png` is the 1200×630 card shown when the link is shared. If you
change your name or title, regenerate it so the preview matches.

## Roadmap

Planned work is tracked in the [Roadmap milestone](https://github.com/kingmuja12/Portfolio/milestone/1).

- Move the build from Create React App to Vite.
- Add component tests with React Testing Library.
- Upgrade to React 19, Tailwind CSS 4, and the current lucide-react.
- Add case-study pages for selected projects.
- Generate the social preview image in CI instead of by hand.
- Self-host the Inter and JetBrains Mono fonts, and add a Lighthouse budget
  check to CI.

## License

Released under the [MIT License](LICENSE).
