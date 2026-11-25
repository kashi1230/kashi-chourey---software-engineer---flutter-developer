export type SkillCategory = 'Frontend' | 'Backend' | 'Tools';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  role: string;
  detail: string;
  symbol: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  highlights: string[];
  stack: string[];
  year: string;
  role: string;
  image: string;
  imageAlt: string;
  logo?: string;
  screenshot?: string;
  screenshots?: string[];
  videoUrl?: string;
  playStoreUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: string;
  location?: string;
  logo?: string;
  websiteUrl?: string;
  linkedinUrl?: string;
  summary: string;
  deliverables: string[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  context: string;
}

export const HERO_ROLES = [
  'Software Engineer',
  'Flutter Developer',
  'Creative Problem Solver',
  'Full-Stack Builder',
];

export const ABOUT_STATS: StatItem[] = [
  {
    value: 15,
    suffix: '+',
    label: 'Production Releases',
    context: 'Mobile & web applications shipped',
  },
  {
    value: 3,
    suffix: '+',
    label: 'Years Engineering',
    context: 'Cross-platform & backend systems',
  },
  {
    value: 99.4,
    suffix: '%',
    label: 'Crash-Free Sessions',
    context: 'Across deployed Flutter builds',
  },
  {
    value: 100,
    suffix: '%',
    label: 'End-to-End Ownership',
    context: 'From architecture to store launch',
  },
];

export const SKILLS: SkillItem[] = [
  // Frontend
  {
    name: 'Flutter',
    category: 'Frontend',
    role: 'Cross-Platform UI',
    detail: 'High-frame-rate iOS & Android applications with custom animations and modular architecture.',
    symbol: 'FL',
  },
  {
    name: 'Dart',
    category: 'Frontend',
    role: 'Application Language',
    detail: 'Strongly typed asynchronous state pipelines, isolates, and clean domain modeling.',
    symbol: 'DT',
  },
  {
    name: 'React',
    category: 'Frontend',
    role: 'Web Interfaces',
    detail: 'Component-driven interactive web applications with refined motion and responsive precision.',
    symbol: 'RC',
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    role: 'Web Engineering',
    detail: 'Modern ESNext patterns, browser APIs, and performance-conscious frontend architecture.',
    symbol: 'JS',
  },
  {
    name: 'HTML / CSS',
    category: 'Frontend',
    role: 'Semantic Layout',
    detail: 'Accessible document architecture, fluid editorial typography, and micro-interaction craft.',
    symbol: 'HC',
  },
  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    role: 'Server Runtime',
    detail: 'Event-driven backend services, real-time messaging endpoints, and automated workflows.',
    symbol: 'ND',
  },
  {
    name: 'PHP',
    category: 'Backend',
    role: 'Server Scripting',
    detail: 'Reliable business APIs, portal backends, and database-backed enterprise integrations.',
    symbol: 'PH',
  },
  {
    name: 'REST APIs',
    category: 'Backend',
    role: 'Service Contracts',
    detail: 'Structured resource design, token-based authentication, pagination, and predictable schemas.',
    symbol: 'AP',
  },
  {
    name: 'MySQL',
    category: 'Backend',
    role: 'Relational Storage',
    detail: 'Normalized schemas, indexed transactional queries, and financial ledger integrity.',
    symbol: 'SQ',
  },
  {
    name: 'MongoDB',
    category: 'Backend',
    role: 'Document Storage',
    detail: 'Flexible document schemas and aggregation pipelines for rapidly evolving product models.',
    symbol: 'MG',
  },
  // Tools
  {
    name: 'Git / GitHub',
    category: 'Tools',
    role: 'Version Control',
    detail: 'Clean branching workflows, code reviews, release tagging, and collaborative delivery.',
    symbol: 'GT',
  },
  {
    name: 'Firebase',
    category: 'Tools',
    role: 'Cloud Platform',
    detail: 'Authentication, Firestore real-time sync, push notifications, and crash diagnostics.',
    symbol: 'FB',
  },
  {
    name: 'GetX',
    category: 'Tools',
    role: 'Flutter State & Routing',
    detail: 'Reactive state controllers, dependency injection, and low-boilerplate screen transitions.',
    symbol: 'GX',
  },
  {
    name: 'Provider',
    category: 'Tools',
    role: 'Scoped State Architecture',
    detail: 'Predictable InheritedWidget state graphs with clean separation of business logic.',
    symbol: 'PR',
  },
  {
    name: 'Android Studio',
    category: 'Tools',
    role: 'Native Mobile Tooling',
    detail: 'Device profiling, Gradle release signing, emulator diagnostics, and layout inspection.',
    symbol: 'AS',
  },
  {
    name: 'VS Code',
    category: 'Tools',
    role: 'Primary Environment',
    detail: 'Streamlined TypeScript, Dart, and full-stack debugging with custom workspace automation.',
    symbol: 'VS',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'share0wheels',
    index: '01',
    name: 'ShareOWheels',
    tagline: 'Ride-sharing and smart parking mobile solution.',
    description:
      'An urban mobility platform uniting real-time carpooling routes with intelligent parking bay discovery and reservation for daily commuters.',
    overview:
      'ShareOWheels rethinks everyday city transit by combining peer-to-peer ride matching and smart parking availability inside one cohesive mobile experience. Built with Flutter to reduce urban congestion and eliminate parking friction.',
    challenge:
      'Commuters needed live route matching, accurate ETA updates, and instantaneous parking slot status without draining device battery or overwhelming the interface during transit.',
    solution:
      'Engineered a Flutter client backed by Node.js REST services and Firebase real-time listeners, featuring adaptive location polling, streamlined one-thumb booking flows, and clear spatial parking grids.',
    highlights: [
      'Real-time ride-matching engine with route proximity filtering and live trip tracking.',
      'Interactive smart parking zone grid showing bay occupancy and instant reservation holds.',
      'Modular Flutter architecture with GetX state management and offline-resilient booking cache.',
    ],
    stack: ['Flutter', 'Dart', 'Node.js', 'Firebase', 'REST APIs', 'MongoDB'],
    year: '2025',
    role: 'Lead Mobile & Full-Stack Engineer',
    image: '/src/assets/images/project_share0wheels_screenshot.jpg',
    imageAlt: 'ShareOWheels Flutter mobile application interface showing ride-sharing and smart parking',
    logo: '/src/assets/images/share0wheels_logo.png',
    screenshot: '/src/assets/images/project_share0wheels_screenshot.jpg',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.shareowheels.in.share0wheels',
    repoUrl: 'https://github.com/kashi1230',
  },
  {
    id: 'co-agent',
    index: '02',
    name: 'Co-Agent',
    tagline: 'Digital business assistant and automation platform.',
    description:
      'A unified operational assistant designed for growing teams to orchestrate client follow-ups, task pipelines, and multi-channel business workflows effortlessly.',
    overview:
      'Co-Agent transforms scattered operational busywork into structured, automated execution pipelines. Business owners can configure triggers, monitor live task queues, and manage customer interactions from a distraction-free workspace.',
    challenge:
      'Small and mid-sized operators often juggle spreadsheets, messaging apps, and manual reminders—leading to dropped leads and inconsistent execution.',
    solution:
      'Architected a responsive web and mobile companion ecosystem with React, Flutter, and Node.js that unifies workflow automation, scheduled triggers, and structured client records under a fast, calm interface.',
    highlights: [
      'Visual workflow orchestration linking lead intake, task assignment, and automated notifications.',
      'Cross-platform workspace syncing real-time updates seamlessly between desktop and mobile.',
      'Role-scoped API layer built on Node.js and MySQL with audit trails for every automated run.',
    ],
    stack: ['React', 'Flutter', 'Node.js', 'MySQL', 'REST APIs', 'Provider'],
    year: '2025',
    role: 'Product Engineer & UI Architect',
    image: '/src/assets/images/co_agent_screen_home.jpg',
    imageAlt: 'Co-Agent automated marketing and sales assistant application interface',
    logo: '/src/assets/images/co_agent_logo.png',
    screenshot: '/src/assets/images/co_agent_screen_home.jpg',
    screenshots: [
      '/src/assets/images/co_agent_screen_home.jpg',
      '/src/assets/images/co_agent_screen_campaigns.jpg',
    ],
    repoUrl: 'https://github.com/kashi1230',
  },
  {
    id: 'hfinpro',
    index: '03',
    name: 'HFin Pro',
    tagline: 'Retailer financing and mobile device management platform.',
    description:
      'An enterprise fintech and MDM suite empowering electronics retailers to manage EMI financing schedules, customer onboarding, and financed device compliance at scale.',
    overview:
      'HFin Pro bridges retail point-of-sale financing with secure mobile device management. Retailers gain instant visibility into credit approvals, repayment schedules, and device lifecycle controls from a single platform.',
    challenge:
      'Retail partners required high-trust financial workflows, reliable EMI tracking, and strict device policy enforcement across diverse Android hardware with zero downtime.',
    solution:
      'Developed resilient Flutter retailer applications and structured backend APIs integrating KYC onboarding, ledger tracking, automated installment reminders, and MDM device status synchronization.',
    highlights: [
      'End-to-end retailer dashboard tracking credit limits, active EMI portfolios, and payment schedules.',
      'Real-time Mobile Device Management status grid with secure enrollment and policy sync.',
      'High-reliability API integration with PHP, MySQL, and Firebase push notifications for due alerts.',
    ],
    stack: ['Flutter', 'Dart', 'PHP', 'MySQL', 'Firebase', 'GetX'],
    year: '2024',
    role: 'Flutter & Systems Developer',
    image: '/src/assets/images/hfinpro_screenshot_main.png',
    imageAlt: 'HFin Pro retailer financing dashboard and mobile device management application interface',
    logo: '/src/assets/images/hfinpro_logo.png',
    screenshot: '/src/assets/images/hfinpro_screenshot_main.png',
    screenshots: [
      '/src/assets/images/hfinpro_screenshot_main.png',
      '/src/assets/images/hfinpro_screen_emi.jpg',
      '/src/assets/images/hfinpro_screen_qr.png',
      '/src/assets/images/hfinpro_screen_key.png',
      '/src/assets/images/hfinpro_screen_oem.png',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.hfinpro',
    repoUrl: 'https://github.com/kashi1230',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'rgpv-education',
    period: 'Aug 2020 — Jul 2024',
    role: 'Bachelor of Technology - BTech, Computer Science',
    organization: 'Rajiv Gandhi Prodyogiki Vishwavidyalaya',
    type: 'Education · Full-Time',
    location: 'Bhopal, Madhya Pradesh, India',
    websiteUrl: 'https://www.rgpv.ac.in/',
    summary:
      'Bachelor of Technology in Computer Science & Computational Science. Built strong theoretical and practical foundations in core software engineering, data structures, algorithms, and full-stack software development.',
    deliverables: [
      'Bachelor of Technology, Computational Science & Computer Science (Aug 2020 – Jul 2024).',
      'Activities and societies: Cricket, Volleyball.',
      'Specialized in software architecture, object-oriented programming, database management, and mobile engineering fundamentals.',
    ],
  },
  {
    id: 'integration-it-services',
    period: 'Jan 2024 — Jun 2024 · 6 mos',
    role: 'Flutter Developer Intern',
    organization: 'Integration IT Services Pvt. Ltd.',
    type: 'Full-time · Internship',
    location: 'Bhopal, Madhya Pradesh, India · On-site',
    logo: '/src/assets/images/iits_logo.jpg',
    websiteUrl: 'https://www.integrationitservices.com/iits/',
    linkedinUrl: 'https://www.linkedin.com/in/kashi-chourey-865501261/edit/forms/position/2648829459/',
    summary:
      'Flutter Developer Intern with hands-on experience in building cross-platform mobile applications for B2B solutions and admin/retailer panels. Worked on API integration, clean and responsive UI, and ensuring smooth data synchronization.',
    deliverables: [
      'Hands-on experience in building cross-platform mobile applications for B2B solutions and admin/retailer panels.',
      'Worked on API integration, clean and responsive UI, and ensuring smooth data synchronization.',
      'Basic experience with testing (integration & end-to-end) and exposure to Node.js (backend) and PHP CodeIgniter (backend) with MySQL and MongoDB.',
      'Quick learner, focused on writing clean, maintainable code and collaborating with teams to deliver reliable applications.',
    ],
  },
  {
    id: 'screenbros-services',
    period: 'Jul 2024 — Present',
    role: 'Software Engineer',
    organization: 'SCREENBROS SERVICES PRIVATE LIMITED',
    type: 'Full-time',
    location: 'Bhopal, Madhya Pradesh, India · On-site',
    logo: '/src/assets/images/screenbros_logo.svg',
    websiteUrl: 'https://www.screenbros.in/web/',
    linkedinUrl: 'https://www.linkedin.com/in/kashi-chourey-865501261/edit/forms/position/2648832521/',
    summary:
      'Developed and maintained multiple enterprise-grade cross-platform mobile applications using Flutter, ensuring high performance and scalability across Android and iOS.',
    deliverables: [
      'Designed and implemented clean, responsive, and pixel-perfect UI following modern UI/UX principles to enhance overall user experience and engagement.',
      'Wrote maintainable, modular, and reusable Flutter code, following best practices and scalable architecture patterns.',
      'Engineered core business features, asynchronous state handling, and dependable API pipelines across commercial releases.',
    ],
  },
];

export const ABOUT_IMAGE = {
  src: '/src/assets/images/profile_kashi_chourey.jpg',
  alt: 'Kashi Chourey — Software Engineer & Flutter Developer',
  caption: 'Active Studio Setup',
  status: 'Available for Select Projects',
  workstation: 'Apple M-Series & Dual Testing Displays',
};

export const WORKSPACE_IMAGE = {
  src: '/src/assets/images/realistic_workspace_desk_1795422058136.jpg',
  alt: 'Realistic developer studio workspace with dual displays, mechanical keyboard, and mobile engineering setup',
};

export const CONTACT_INFO = {
  email: 'kashichourey284@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kashi-chourey-865501261',
  github: 'https://github.com/kashi1230',
  location: 'India · Working Worldwide',
};
