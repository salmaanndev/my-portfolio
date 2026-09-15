export const profile = {
  name: 'Salman Ahmad',
  firstName: 'Salman',
  lastName: 'Ahmad',
  role: 'Front-End Engineer',
  location: 'Lahore, Pakistan',
  availability: 'Open to remote roles',
  email: 'salmaann.dev@gmail.com',
  phone: '+92 313 4808881',
  phoneHref: 'tel:+923134808881',
  github: 'https://github.com/salmaanndev',
  githubHandle: 'salmaanndev',
  resume: '/Salman-Ahmad-Resume.pdf',
  headline: 'Interfaces with weight. Systems with care.',
  summary:
    'Front-End Developer with 4+ years of experience building responsive, scalable web applications using React, TypeScript, JavaScript, HTML5, and CSS3. Experienced in reusable component architecture, complex dashboards, data-driven interfaces, REST APIs, Redux Toolkit, Figma, CI/CD, and AWS deployments.',
  focus:
    'I translate Figma and product requirements into production-ready interfaces — with a strong focus on performance, maintainability, and the kind of UX that still feels considered after the tenth use.',
  stats: [
    { value: '4+', label: 'Years shipping' },
    { value: '10+', label: 'Product surfaces' },
    { value: 'AWS', label: 'CI/CD deploys' },
  ],
} as const

export const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
] as const

export const experience = [
  {
    company: 'Launch Up Labs LLC',
    role: 'Front-End Developer',
    period: 'Feb 2024 — Present',
    location: 'Lahore, Pakistan · Remote',
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'AWS', 'Healthcare'],
    points: [
      'Developed and maintained responsive healthcare web applications using React, TypeScript, JavaScript, HTML5, CSS3, and Redux Toolkit, focusing on reusable and maintainable component architecture.',
      'Led front-end development for complex healthcare dashboards, detail views, timelines, calendars, campaigns, audit interfaces, and care-plan workflows.',
      'Translated Figma designs and business requirements into responsive, production-ready interfaces while ensuring technical feasibility and consistent UX.',
      'Integrated REST APIs and managed complex application state, routing, forms, data flows, and reusable UI components across multiple application modules.',
      'Built and maintained SurveyJS-based form-builder functionality and data-driven interfaces for healthcare workflows.',
      'Implemented CI/CD workflows with GitHub Actions and AWS S3, supporting automated front-end builds and deployments.',
    ],
  },
  {
    company: 'BricksTech Digital',
    role: 'Frontend Engineer & Graphic Designer',
    period: 'Apr 2021 — Dec 2023',
    location: 'Lahore, Pakistan',
    tags: ['JavaScript', 'HTML', 'CSS', 'Responsive UI', 'Branding'],
    points: [
      'Developed responsive and interactive web applications using JavaScript, HTML, CSS and modern frontend development practices.',
      'Built reusable UI components and implemented responsive designs across desktop, tablet and mobile devices.',
      'Identified and resolved functional, UI and performance issues through systematic debugging and testing.',
      'Worked across multiple projects and adapted to different technologies, requirements and client-specific development environments — including brands such as Viking Bags, Born Tough, and Elite Sports.',
    ],
  },
] as const

export const projects = [
  {
    title: 'Healthcare SaaS Platform',
    subtitle: 'Launch Up Labs · Production',
    year: '2024 — Present',
    featured: true,
    image: '/work/healthcare-saas.jpg',
    live: 'https://advanta.care/',
    repo: null,
    description:
      'Complex clinical product surfaces: patient dashboards, timelines, calendars, campaigns, audit views, and care-plan workflows. Built as a maintainable React architecture with Redux Toolkit, REST integrations, and AWS-backed CI/CD.',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'SurveyJS', 'AWS S3'],
  },
  {
    title: 'Care Plan Generator',
    subtitle: 'Clinical documents · Production',
    year: '2024',
    featured: true,
    image: null,
    live: 'https://care.advantabiometrics.com/',
    repo: null,
    description:
      'A healthcare platform that generates patient care-plan PDFs from health metrics. I owned the frontend: multi-step workflows, data-driven forms, and a dashboard that has to stay precise under real clinical use.',
    stack: ['React', 'Redux', 'REST APIs', 'Form systems'],
  },
  {
    title: 'AI Resume Builder',
    subtitle: 'Personal product',
    year: '2024',
    featured: false,
    image: null,
    live: 'https://ai-cv-resume-builder.netlify.app/',
    repo: 'https://github.com/salmaanndev/ai-resume-builder',
    description:
      'An interactive AI-powered web application for creating and managing professional resumes — structured editing, live preview, and a focused writing flow.',
    stack: ['React', 'JavaScript', 'Netlify'],
  },
  {
    title: 'Pinvent App',
    subtitle: 'Inventory & POS',
    year: '2024',
    featured: false,
    image: null,
    live: 'https://pinventapp.netlify.app/',
    repo: 'https://github.com/salmaanndev/pinvent-app-frontend',
    description:
      'A web-based point-of-sale and inventory application for managing sales and day-to-day business operations, with a paired MERN backend.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Task Manager',
    subtitle: 'MERN productivity',
    year: '2024',
    featured: false,
    image: null,
    live: 'https://salman-ahmad-task-manager.netlify.app/',
    repo: 'https://github.com/salmaanndev/mern-task-app-frontend',
    description:
      'An interactive task-management web application built with React and JavaScript, covering the full create, organize, and complete loop.',
    stack: ['React', 'JavaScript', 'REST'],
  },
] as const

export const skillGroups = [
  {
    title: 'Interface',
    items: [
      'React.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Next.js',
      'Redux Toolkit',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Responsive UI',
      'Figma to production',
    ],
  },
  {
    title: 'Systems',
    items: [
      'REST APIs',
      'Node.js',
      'Express.js',
      'SQL',
      'MongoDB',
      'Git & GitHub',
      'GitHub Actions',
      'CI/CD',
      'AWS S3',
      'Application security',
    ],
  },
  {
    title: 'Domains',
    items: [
      'Healthcare software',
      'Dashboards',
      'Form builders',
      'SurveyJS',
      'SPA architecture',
      'Agile delivery',
      'Graphic design',
      'Photoshop',
      'Illustrator',
    ],
  },
] as const

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'National College of Business Administration and Economics',
  period: 'Oct 2015 — Feb 2020',
  meta: 'Lahore, Pakistan · CGPA 3.1',
} as const

export const languages = [
  { name: 'Urdu', level: 'Native' },
  { name: 'English', level: 'Professional' },
] as const

export const interests = ['Web development', 'SPA architecture', 'Gym', 'Sports'] as const

export const marquee = [
  'React',
  'TypeScript',
  'JavaScript',
  'Redux Toolkit',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'REST APIs',
  'AWS',
  'CI/CD',
  'Healthcare SaaS',
  'Figma',
  'SurveyJS',
] as const
