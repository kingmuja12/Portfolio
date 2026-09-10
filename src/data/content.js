// Single source of truth for everything on the site.
// Edit this file to update the portfolio; the components read from it.

export const profile = {
  name: 'Abdulmujeeb Abdulwaheed',
  shortName: 'Abdulmujeeb',
  initials: 'AA',
  role: 'Computer Engineer',
  // The one line a recruiter reads before deciding to keep scrolling.
  tagline: 'Computer engineer building AI and embedded systems that ship — from wearable health monitoring to autonomous underwater robots.',
  location: "St. John's, NL, Canada",
  email: 'abdulmujeeba@mun.ca',
  github: 'https://github.com/kingmuja12',
  linkedin: 'https://linkedin.com/in/abdulmujeeb-abdulwaheed',
  siteUrl: 'https://kingmuja12.github.io/Portfolio/',

  // Drop a headshot in `public/` and set this to its filename, e.g. 'headshot.jpg'.
  // Leave as null to show the monogram instead.
  photo: null,

  // Put your resume PDF in `public/` and set this to its filename to show the
  // "Download resume" button, e.g. 'Abdulmujeeb-Abdulwaheed-Resume.pdf'.
  resume: null,

  // Availability banner. Set `show: false` to hide it.
  availability: {
    show: true,
    text: 'Open to Summer 2027 internships',
  },
};

export const stats = [
  { value: '2', label: 'Startups co-founded' },
  { value: '4', label: 'Engineering roles' },
  { value: '3.61', label: 'CGPA / 4.00' },
  { value: '2', label: 'Awards' },
];

export const about = {
  // Written in first person, concrete, no filler.
  paragraphs: [
    "I'm a Computer Engineering student at Memorial University of Newfoundland who spends most of my time where software meets hardware — training models, wiring sensors, and getting the two to agree.",
    "I've co-founded two startups as CTO. At RespAi I'm building biometric monitoring that tells incident commanders when a firefighter is in trouble before they call for help. At Dynai we built a GPT-4 companion device aimed at social isolation, from the LangChain stack down to the 3D-printed enclosure.",
    "Between those I've shipped inside larger teams too — assembly and test systems at Avalon Holographics, and Python automation that cut vendor turnaround at Western Pacific Enterprises.",
  ],
  education: {
    school: 'Memorial University of Newfoundland',
    degree: 'B.Eng., Computer Engineering',
    detail: 'CGPA 3.61 / 4.00',
  },
  awards: [
    'Verafin Scholarship',
    'Top 10 — INTERSWITCH SPARK 3.0',
  ],
  interests: [
    'AI & machine learning',
    'Robotics & autonomy',
    'Embedded hardware',
    'Entrepreneurship',
  ],
};

export const experiences = [
  {
    title: 'CTO & Co-Founder',
    company: 'RespAi',
    period: 'Mar 2025 — Present',
    location: "St. John's, Canada",
    current: true,
    summary:
      'Leading AI-driven health monitoring for first responders, pairing biometric wearables with ML models that flag physiological distress in the field.',
    highlights: [
      'Own the technical direction and the model pipeline end to end.',
      'Built on IBM Watson and custom ML for real-time biometric inference.',
      'Translating firefighter and paramedic field interviews into product requirements.',
    ],
    tech: ['IBM Watson', 'Machine Learning', 'LLMs', 'Healthcare AI', 'Wearables'],
  },
  {
    title: 'Assembly Engineer Intern',
    company: 'Avalon Holographics',
    period: 'Jan 2025 — Apr 2025',
    location: "St. John's, Canada",
    summary:
      'Built tracking systems and tightened assembly workflows for light-field display hardware, working across the hardware and software boundary.',
    highlights: [
      'Implemented tracking systems for assembly and test throughput.',
      'Ran hardware testing and integration on production display units.',
    ],
    tech: ['Hardware Testing', 'System Integration', 'Process Automation', 'Excel'],
  },
  {
    title: 'Project Manager Intern',
    company: 'Western Pacific Enterprises',
    period: 'Apr 2024 — Aug 2024',
    location: 'Surrey, Canada',
    summary:
      'Automated vendor tracking with Python and AI tooling, replacing manual spreadsheet chasing on an electrical construction program.',
    highlights: [
      'Wrote Python automation for vendor communication and status tracking.',
      'Coordinated document workflows across Bluebeam and Excel.',
    ],
    tech: ['Python', 'AI Automation', 'Bluebeam', 'Excel'],
  },
  {
    title: 'CTO & Co-Founder',
    company: 'Dynai',
    period: 'Jan 2024 — Mar 2025',
    location: "St. John's, Canada",
    summary:
      'Built a human-centered AI companion device on GPT-4 and LangChain, aimed at reducing social isolation — software, hardware, and enclosure.',
    highlights: [
      'Designed the conversational stack on GPT-4 and LangChain with vector memory.',
      'Shipped the device on Raspberry Pi with a 3D-printed enclosure.',
      'Placed top 10 at INTERSWITCH SPARK 3.0.',
    ],
    tech: ['GPT-4', 'LangChain', 'Raspberry Pi', 'Pinecone', '3D Printing'],
  },
];

// `link` and `repo` are optional — cards only render a link when one is present.
export const projects = [
  {
    title: 'Autonomous Underwater ROV',
    blurb:
      'Vision and control stack for an underwater ROV built for the MATE ROV competition — OpenCV color recognition feeding a ROS2 control loop, validated in Gazebo before wet testing.',
    tech: ['Python', 'C++', 'OpenCV', 'ROS2', 'Gazebo'],
    icon: 'cpu',
    featured: true,
  },
  {
    title: 'RespAi — First Responder Monitoring',
    blurb:
      'Biometric wearable platform that streams responder vitals to an ML service and surfaces distress signals to incident command in real time.',
    tech: ['Python', 'IBM Watson', 'ML', 'Wearables'],
    icon: 'activity',
    featured: true,
  },
  {
    title: 'Dynai — AI Companion Device',
    blurb:
      'Standalone conversational device built on GPT-4 and LangChain with vector-backed memory, running on Raspberry Pi in a custom 3D-printed shell.',
    tech: ['GPT-4', 'LangChain', 'Pinecone', 'Raspberry Pi'],
    icon: 'brain',
    featured: true,
  },
  {
    title: 'Python WebSocket Server',
    blurb:
      'Asynchronous WebSocket server with built-in port scanning that discovers and talks to clients on the same private network, using asyncio and websockets.',
    tech: ['Python', 'asyncio', 'WebSockets', 'Networking'],
    icon: 'server',
    repo: 'https://github.com/kingmuja12/Python-WebSocket-Server',
  },
  {
    title: 'Voice Automation System',
    blurb:
      'Voice-controlled automation that maps spoken commands to hardware actions, built around a Python speech pipeline.',
    tech: ['Python', 'Speech Recognition', 'Automation'],
    icon: 'mic',
    repo: 'https://github.com/kingmuja12/Voice-Automation-System',
  },
  {
    title: 'LangChain Field Guide',
    blurb:
      'A practical write-up of LangChain patterns — chains, agents, memory, and retrieval — drawn from what actually held up while building Dynai.',
    tech: ['Python', 'LangChain', 'LLMs', 'RAG'],
    icon: 'book',
    repo: 'https://github.com/kingmuja12/Langchain',
  },
];

// Grouped by domain rather than scored with percentages — percentage bars are
// arbitrary and recruiters discount them.
export const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'C', 'C++', 'Dart', 'MATLAB', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'AI & machine learning',
    items: ['PyTorch', 'LangChain', 'GPT-4', 'IBM Watson', 'OpenCV', 'RAG', 'Pinecone'],
  },
  {
    label: 'Hardware & robotics',
    items: ['Arduino', 'Raspberry Pi', 'RISC-V', 'ROS2', 'Gazebo', 'KiCad', 'Soldering', '3D Printing'],
  },
  {
    label: 'Data & cloud',
    items: ['MySQL', 'SQLite', 'MongoDB', 'Firebase', 'AWS'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Linux', 'Flutter', 'Bluebeam', 'Excel'],
  },
];

export const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];
