// =============================================================================
// DEEPAK KUMAR — PORTFOLIO DATA
// Source: Deepak Kumar Resume (Mobile & Frontend Developer)
// =============================================================================

export const GITHUB_URL = 'https://github.com/deepakkumar19-10';
export const LINKEDIN_URL = 'https://linkedin.com/in/deepakkumar-d10';
export const LIVE_WEBSITE_URL = 'https://www.divyabraj.com/';
export const RESUME_URL = '/Deepak_Kumar_Resume.pdf';

export const PERSONAL_INFO = {
  name: 'Deepak Kumar',
  role: 'Mobile & Frontend Developer',
  specialization: 'React Native & React.js',
  location: 'Mathura, Uttar Pradesh, India',
  email: 'deepakkumar19152002@gmail.com',
  phone: '+91-9027687004',
  whatsapp: '919027687004',
  github: GITHUB_URL,
  linkedin: LINKEDIN_URL,
  liveWebsite: LIVE_WEBSITE_URL,
  resumeUrl: RESUME_URL,
  status: 'Available to Join Immediately',
  bio: 'Mobile & Frontend Developer with experience in cross-platform mobile apps using React Native and responsive web apps using React.js. Experienced in state management with Redux Toolkit, REST API integration with Axios, and offline storage with AsyncStorage. Strong computer science foundation with an MCA degree from GLA University.',
  elevatorPitch: 'I am a Mobile & Frontend Developer specializing in React Native and React.js. At CrowdApps Technology, I built cross-platform mobile features, integrated 15+ REST APIs with Axios, and managed app state with Redux Toolkit. I also created DivyaBraj (divyabraj.com), a live tourism website. Available to join immediately.'
};

// High-impact role & stack metrics (Clean, minimal, no truncated subtext)
export const STATS = [
  { value: 'Frontend & Mobile App Developer', badge: 'Primary Role' },
  { value: '15+ REST APIs', badge: 'API Integration' },
  { value: '20% Perf Boost', badge: 'Redux RTK' },
  { value: 'divyabraj.com', badge: 'Live Production' }
];

export const DEVELOPER_JOURNEY = [
  {
    step: '01',
    year: '2020 – 2023',
    title: 'Bachelor of Science (B.Sc.)',
    subtitle: 'Dr. B.R. Ambedkar University, Agra',
    description: 'Studied core computer science fundamentals, structured programming in C, object-oriented concepts in Java, and relational databases. Earned Course on Computer Concepts (CCC) Grade A certification.',
    tech: ['C', 'Java', 'HTML5', 'CSS3', 'Data Structures', 'CCC Grade A'],
    keyTakeaway: 'Built a solid foundation in programming logic and computer science concepts.'
  },
  {
    step: '02',
    year: '2023 – 2025',
    title: 'Master of Computer Applications (MCA)',
    subtitle: 'GLA University, Mathura',
    description: 'Focused on modern software development, JavaScript (ES6+), TypeScript, frontend development with React.js, and mobile app development with React Native.',
    tech: ['React Native', 'React.js', 'TypeScript', 'JavaScript (ES6+)', 'Redux Toolkit', 'Tailwind CSS'],
    keyTakeaway: 'Mastered component-driven architecture and mobile app development.'
  },
  {
    step: '03',
    year: 'Sep 2025 – Apr 2026',
    title: 'Network and Hardware Engineer',
    subtitle: 'S.J.P Global Limited, Mathura',
    description: 'Managed enterprise LAN/Wi-Fi setup, hardware installation, system configuration, and routine IT operations for 50+ workstations. Resolved network and system issues to maintain high uptime.',
    tech: ['LAN & Wi-Fi', 'Routers & Switches', 'Hardware Setup', '50+ Workstations', 'IT Support'],
    keyTakeaway: 'Learned practical system troubleshooting and enterprise network infrastructure.'
  },
  {
    step: '04',
    year: 'May 2026 – Present',
    title: 'Frontend & Mobile App Developer',
    subtitle: 'CrowdApps Technology',
    description: 'Developing cross-platform mobile features using React Native and responsive web layouts using React.js. Integrating 15+ REST API endpoints with Axios, handling loading states, and managing global state with Redux Toolkit.',
    tech: ['React Native', 'React.js', 'Redux Toolkit', 'AsyncStorage', 'NativeWind', 'Tailwind CSS', 'Axios'],
    keyTakeaway: 'Writing clean, production-ready code with reliable state and offline storage.'
  }
];

export const PROJECTS = [
  {
    id: 'divyabraj',
    title: 'DivyaBraj (divyabraj.com) — Live Web Platform',
    category: 'Live Platform',
    featured: true,
    tier: 'flagship',
    badge: 'LIVE WEB PLATFORM',
    tagline: 'Production-ready tourism & cultural platform live at divyabraj.com, built with React.js, Tailwind CSS, REST APIs, and centralized Redux state.',
    emoji: '🛕',
    image: '/images/projects/divyabraj-live.jpg',
    description: 'DivyaBraj is a full-featured live production platform serving tourists and pilgrims visiting Mathura, Vrindavan, and the Braj circuit. Features real-time temple aarti & darshan schedules, interactive yatra pilgrimage routes, Hindu panchang calendar, and local tourism guides.',
    techStack: ['React.js', 'React Native', 'Redux Toolkit', 'Tailwind CSS', 'NativeWind', 'Axios', 'REST APIs'],
    metrics: [
      { label: 'Status', value: 'Live Production' },
      { label: 'Domain', value: 'divyabraj.com' },
      { label: 'Architecture', value: 'Web & Mobile' },
      { label: 'State Mgmt', value: 'Redux Toolkit' }
    ],
    features: [
      'Live production web application deployed at divyabraj.com serving real regional visitors.',
      'Responsive, accessible UI built with Tailwind CSS and cross-platform component architecture.',
      'Real-time temple darshan timings, festival calendars, and interactive pilgrimage guidance.',
      'Optimized REST API integration with Axios for fast caching, error resilience, and fast load times.'
    ],
    demoLink: LIVE_WEBSITE_URL,
    githubLink: GITHUB_URL
  },
  {
    id: 'managemy-moves',
    title: 'MMM Mobile Application (ManageMyMoves)',
    category: 'Mobile Apps',
    featured: true,
    tier: 'flagship',
    badge: 'MOBILE APP • REACT NATIVE',
    tagline: 'Offline-first relocation survey mobile app built with React Native & TypeScript, featuring automated cubic feet volume calculations and AsyncStorage caching.',
    emoji: '📱',
    image: '/images/projects/managemy-moves.jpg',
    description: 'A production-grade mobile application engineered with React Native, TypeScript, and Redux Toolkit. Built for move coordinators and survey teams to catalog room inventories, calculate cubic feet (ft³) volumes on-the-fly, and persist data offline via AsyncStorage.',
    techStack: ['React Native', 'TypeScript', 'Redux Toolkit', 'AsyncStorage', 'React Navigation', 'NativeWind', 'Axios'],
    metrics: [
      { label: 'Platform', value: 'iOS & Android' },
      { label: 'Architecture', value: 'Offline-First' },
      { label: 'Navigation', value: 'Drawer + Stack' },
      { label: 'Computation', value: 'Live Volume (ft³)' }
    ],
    features: [
      'Engineered an offline-first mobile survey workflow with smooth Drawer and Stack navigation.',
      'Real-time calculation engine computing total cubic-feet volume dynamically per room and item.',
      'Offline persistence using AsyncStorage ensuring field surveys are never lost during network drops.',
      'Performance-tuned React Native rendering avoiding unnecessary component re-renders.'
    ],
    demoLink: null,
    githubLink: GITHUB_URL
  },
  {
    id: 'grocery-store-app',
    title: 'Grocery Store App — Full-Stack Platform',
    category: 'Full Stack',
    featured: true,
    tier: 'major',
    badge: 'FULL STACK',
    tagline: 'Grocery ordering platform featuring a dedicated mobile client, web storefront, and Node.js backend.',
    emoji: '🛒',
    image: '/images/projects/grocery-store.jpg',
    description: 'An end-to-end grocery shopping application with a React Native mobile app, a React.js web storefront, and a Node.js/Express backend. Uses Redux Toolkit (inventory and cart slices) for real-time cart updates and checkout flow.',
    techStack: ['React Native', 'React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'REST APIs', 'Tailwind CSS'],
    metrics: [
      { label: 'Frontend', value: 'Mobile + Web' },
      { label: 'Backend', value: 'Node & Express' },
      { label: 'State', value: 'Redux Toolkit' },
      { label: 'Feature', value: 'Cart & Orders' }
    ],
    features: [
      'Built an end-to-end grocery platform with a React Native mobile app and React.js web storefront.',
      'Used Redux Toolkit with modular slices (inventory and cart) for smooth cart management.',
      'Created REST API endpoints for product catalogs, stock tracking, and order placement.',
      'Designed responsive product listing screens with instant cart quantity updates.'
    ],
    demoLink: null,
    githubLink: GITHUB_URL
  },
  {
    id: 'mini-youtube',
    title: 'Mini YouTube — Video Streaming Client',
    category: 'Web Apps',
    featured: false,
    tier: 'interactive',
    badge: 'REACT.JS',
    tagline: 'Video streaming web client built with React and Redux Toolkit featuring search, video player, and shimmer loading.',
    emoji: '📺',
    image: '/images/projects/mini-youtube.jpg',
    description: 'A video streaming web application built with React.js and Redux Toolkit using the YouTube Data API. Includes live search querying, video player view, comments, and shimmer skeleton loading states.',
    techStack: ['React.js', 'Redux Toolkit', 'YouTube API', 'React Router', 'CSS3'],
    metrics: [
      { label: 'Framework', value: 'React.js' },
      { label: 'State', value: 'Redux Toolkit' },
      { label: 'API', value: 'YouTube API' },
      { label: 'UI', value: 'Shimmer Load' }
    ],
    features: [
      'Built a video streaming interface that fetches and displays video feeds from the YouTube API.',
      'Integrated Redux Toolkit for caching video results and handling UI actions.',
      'Implemented debounced search to reduce unnecessary network calls while typing.',
      'Added skeleton shimmer loading states for a smooth visual experience.'
    ],
    demoLink: 'http://youtube-clone-abhishek.netlify.app',
    githubLink: GITHUB_URL
  }
];

export const SKILL_CATEGORIES = [
  {
    category: 'Mobile & Frontend',
    icon: 'Smartphone',
    skills: [
      { name: 'React Native', level: 95, experience: 'Cross-Platform Mobile Apps' },
      { name: 'React.js', level: 95, experience: 'Responsive Web Apps' },
      { name: 'React Navigation', level: 92, experience: 'Drawer, Stack & Tab Navigation' },
      { name: 'NativeWind', level: 90, experience: 'Tailwind CSS for React Native' },
      { name: 'Tailwind CSS', level: 94, experience: 'Responsive UI Design & Flexbox' }
    ]
  },
  {
    category: 'State Management & APIs',
    icon: 'Layers',
    skills: [
      { name: 'Redux Toolkit (RTK)', level: 94, experience: 'Modular State Slices' },
      { name: 'AsyncStorage', level: 92, experience: 'Offline Local Storage' },
      { name: 'Axios', level: 95, experience: 'REST API Integration' },
      { name: 'RESTful APIs', level: 94, experience: 'Data Fetching & Error Handling' },
      { name: 'Responsive Layouts', level: 95, experience: 'Mobile & Desktop Design' }
    ]
  },
  {
    category: 'Languages',
    icon: 'Code2',
    skills: [
      { name: 'JavaScript (ES6+)', level: 96, experience: 'Core Programming' },
      { name: 'TypeScript', level: 90, experience: 'Typed Mobile Apps' },
      { name: 'HTML5 & CSS3', level: 96, experience: 'Semantic Web Structure' },
      { name: 'Java', level: 82, experience: 'Object-Oriented Programming' },
      { name: 'C', level: 80, experience: 'Programming Fundamentals' }
    ]
  },
  {
    category: 'Developer Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Android Studio', level: 90, experience: 'Debugging & Emulators' },
      { name: 'Git & GitHub', level: 94, experience: 'Version Control' },
      { name: 'Postman', level: 92, experience: 'API Testing' },
      { name: 'VS Code', level: 96, experience: 'Primary Editor' },
      { name: 'Hardware & LAN', level: 88, experience: 'Networking & Systems' }
    ]
  }
];

export const CORE_VALUES = [
  {
    title: 'Clean Code',
    desc: 'Writing structured, readable, and maintainable code that is easy to extend.'
  },
  {
    title: 'Cross-Platform Mobile',
    desc: 'Building responsive apps with React Native that feel fast and smooth on both Android and iOS.'
  },
  {
    title: 'Offline-First Support',
    desc: 'Saving data locally with AsyncStorage so users can continue their work even without internet.'
  },
  {
    title: 'Real-World Experience',
    desc: 'Deploying real platforms like divyabraj.com and handling production state.'
  }
];
