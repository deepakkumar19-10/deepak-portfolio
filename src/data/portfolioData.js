// =============================================================================
// DEEPAK KUMAR — PORTFOLIO CONFIGURATION & DATA SOURCE
// Primary Source of Truth: Latest MERN Stack Developer Resume
// =============================================================================

// CENTRAL SOCIAL & EXTERNAL CONFIGURATION
// If you need to modify your GitHub URL or live website, update these constants:
export const GITHUB_URL = 'https://github.com/deepakkumar19-10'; // Detected from your git config (Replace with your custom GitHub URL if different)
export const LINKEDIN_URL = 'https://linkedin.com/in/deepak-kumar-55a59b18';
export const LIVE_WEBSITE_URL = 'https://www.divyabraj.com/'; // Live production website for Braj Darshan
export const RESUME_URL = '/Deepak_Kumar_Resume.pdf';

export const PERSONAL_INFO = {
  name: 'Deepak Kumar',
  role: 'MERN Stack Developer',
  location: 'Mathura, Uttar Pradesh, India',
  email: 'deepakkumar19152002@gmail.com',
  phone: '+91 9027687004',
  whatsapp: '919027687004',
  github: GITHUB_URL,
  linkedin: LINKEDIN_URL,
  liveWebsite: LIVE_WEBSITE_URL,
  resumeUrl: RESUME_URL,
  status: 'Open to Full-time & Remote Roles',
  bio: 'MERN Stack Developer with hands-on experience building full-stack web applications using React.js, JavaScript, Node.js, Express.js, MongoDB, REST APIs, and SQL. Currently working as a MERN Stack Intern with practical exposure to authentication, backend architecture, database connectivity, and full-stack development.',
  elevatorPitch: 'I engineer fast, scalable, and database-driven web applications using the MERN stack and SQL. From architecting robust RESTful APIs with Node.js and Express to building modular, responsive interfaces with React.js, I focus on end-to-end software delivery with clean code and reliable database schemas.'
};

export const STATS = [
  { value: 'MERN', label: 'Full-Stack Specialization' },
  { value: '5+', label: 'Web Apps & Live Deployments' },
  { value: 'MCA', label: 'GLA University (2023–2025)' },
  { value: '100%', label: 'Clean Code & Verified Work' }
];

export const DEVELOPER_JOURNEY = [
  {
    step: '01',
    year: '2020 – 2023',
    title: 'Computer Science & Academic Foundations',
    subtitle: 'B.Sc. Degree — Dr. B.R. Ambedkar University, Agra',
    description: 'Built solid computer science fundamentals, focusing on structured programming in C, object-oriented concepts in Java, and relational database management with SQL. Achieved Course on Computer Concepts (CCC) Grade A certification.',
    tech: ['C', 'Java', 'SQL', 'Database Management', 'Data Structures', 'NIELIT CCC'],
    keyTakeaway: 'Strong core fundamentals in algorithms and databases make adapting to new software stacks seamless.'
  },
  {
    step: '02',
    year: '2023 – 2025',
    title: 'Master of Computer Applications (MCA)',
    subtitle: 'GLA University, Mathura',
    description: 'Deep-dived into advanced software engineering, modern JavaScript (ES6+), component-driven UI architecture with React.js, and server-side engineering with Node.js, Express.js, and RESTful APIs.',
    tech: ['JavaScript ES6+', 'React.js', 'Node.js', 'Express.js', 'REST APIs', 'Postman'],
    keyTakeaway: 'Mastered component-driven frontend architecture and decoupled REST services for scalable systems.'
  },
  {
    step: '03',
    year: 'Sep 2025 – Apr 2026',
    title: 'Network & Hardware Engineering',
    subtitle: 'S.J.P Global Limited, Mathura',
    description: 'Managed enterprise LAN/Wi-Fi infrastructure, hardware installation, system configuration, TCP/IP networking, routers, switches, and network security diagnostics while ensuring high system availability.',
    tech: ['TCP/IP', 'Networking Protocols', 'Hardware Diagnostics', 'Routers & Switches', 'Infrastructure'],
    keyTakeaway: 'Real-world infrastructure experience gives a deep understanding of network latency, connectivity, and system reliability.'
  },
  {
    step: '04',
    year: 'May 2026 – Present',
    title: 'MERN Stack Development & Live Platforms',
    subtitle: 'CrowdApps Technology & Live Production Platform (Divya Braj)',
    description: 'Developing full-stack features using React.js, reusable components, responsive layouts, REST APIs, Node.js, Express.js, and MongoDB. Architected and launched Braj Darshan (divyabraj.com), a live production web application serving the Braj region.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'MySQL', 'Tailwind CSS'],
    keyTakeaway: 'Delivering end-to-end production software that unites clean UI, reliable APIs, and robust data persistence.'
  }
];

export const PROJECTS = [
  {
    id: 'braj-darshan',
    title: 'Braj Darshan — Cultural & Tourism Platform',
    category: 'MERN Stack',
    featured: true,
    tier: 'flagship',
    badge: 'FLAGSHIP / LIVE PRODUCTION',
    tagline: 'Comprehensive cultural and tourism web platform covering temples, yatras, panchang, and regional events across the Braj region.',
    emoji: '🛕',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    description: 'Full-stack cultural and travel platform focused on the Braj region, covering temples, yatras, panchang, events, places, and regional cuisine through a responsive web experience. Built with a React.js and Vite frontend connected to Express.js REST APIs and MongoDB for persistent content delivery.',
    techStack: ['React.js', 'Vite', 'React Router', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'CSS3'],
    metrics: [
      { label: 'Deployment', value: 'Live Production' },
      { label: 'Architecture', value: 'MERN Stack' },
      { label: 'Database', value: 'MongoDB' },
      { label: 'Domain', value: 'divyabraj.com' }
    ],
    features: [
      'Architected end-to-end full-stack web application covering sacred temples, pilgrimage routes, panchang, and events.',
      'Crafted modular React.js UI with Vite, reusable component architecture, and smooth client-side routing.',
      'Engineered Express.js REST APIs connected to MongoDB for dynamic, database-driven content workflows.',
      'Active live production platform deployed and serving visitors globally at divyabraj.com.'
    ],
    demoLink: LIVE_WEBSITE_URL,
    githubLink: GITHUB_URL
  },
  {
    id: 'grocery-management',
    title: 'Grocery Management System — Full-Stack App',
    category: 'Full-Stack',
    featured: true,
    tier: 'major',
    badge: 'FULL-STACK / MYSQL',
    tagline: 'Full-stack inventory & grocery management system featuring a responsive React UI, Express REST API, and MySQL persistence.',
    emoji: '🛒',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    description: 'Full-stack grocery and store management application designed for handling products, stock inventory, and structured relational data using MySQL. Combines a responsive user interface built in React.js and Tailwind CSS with a secure Node.js and Express.js backend.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs', 'Tailwind CSS'],
    metrics: [
      { label: 'Database', value: 'MySQL (Relational)' },
      { label: 'Frontend', value: 'React + Tailwind' },
      { label: 'API Layer', value: 'Express.js REST' },
      { label: 'Functionality', value: 'Inventory Tracking' }
    ],
    features: [
      'Developed full-stack grocery management system connecting dynamic React UI with Express.js backend.',
      'Implemented secure RESTful API endpoints for inventory tracking, category updates, and order workflows.',
      'Structured normalized relational tables and queries in MySQL for reliable data persistence.',
      'Built fluid, responsive views using Tailwind CSS with real-time stock alert indicators.'
    ],
    demoLink: null,
    githubLink: GITHUB_URL
  },
  {
    id: 'task-management',
    title: 'MERN Task Manager — Full CRUD Application',
    category: 'MERN Stack',
    featured: true,
    tier: 'major',
    badge: 'MERN / CRUD',
    tagline: 'Full CRUD task and workflow management application with persistent status transitions and MongoDB document storage.',
    emoji: '📋',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
    description: 'Full CRUD task management application supporting task creation, real-time editing, lifecycle completion, prioritization, and persistent MongoDB storage. Features modular React components, custom state hooks, and robust Express route handlers.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'JavaScript'],
    metrics: [
      { label: 'Operations', value: 'Full CRUD' },
      { label: 'Database', value: 'MongoDB' },
      { label: 'Backend', value: 'Express.js' },
      { label: 'State Flow', value: 'Reactive UI' }
    ],
    features: [
      'Engineered full CRUD operations for creating, categorizing, prioritizing, and completing task items.',
      'Built reusable React components with optimized re-renders and clean status transitions.',
      'Implemented Express.js router endpoints with JSON validation and MongoDB schema modeling.',
      'Designed mobile-first layout with smooth filters for active, pending, and completed workflows.'
    ],
    demoLink: null,
    githubLink: GITHUB_URL
  },
  {
    id: 'mini-youtube',
    title: 'Mini YouTube — Video Streaming Platform',
    category: 'Frontend & APIs',
    featured: false,
    tier: 'interactive',
    badge: 'REACT + REDUX',
    tagline: 'Modern YouTube clone built with React and Redux Toolkit featuring video streaming, debounced live search, and shimmer UI.',
    emoji: '📺',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    description: 'High-performance video streaming client crafted with React.js and Redux Toolkit consuming the YouTube Data API. Includes debounced search querying, video player page with recommended feeds, comment simulation, and shimmer skeleton loading states.',
    techStack: ['React.js', 'Redux Toolkit', 'YouTube API', 'React Router', 'CSS3', 'Debouncing'],
    metrics: [
      { label: 'State Management', value: 'Redux Toolkit' },
      { label: 'Data Source', value: 'YouTube API' },
      { label: 'UX Feature', value: 'Debounced Search' },
      { label: 'Loading State', value: 'Shimmer UI' }
    ],
    features: [
      'Built video streaming interface consuming YouTube Data API with dynamic feeds and video playback.',
      'Integrated Redux Toolkit for centralized state management, video caching, and sidebar toggle actions.',
      'Implemented debounced real-time search queries to minimize network requests while maintaining responsive UX.',
      'Designed shimmer UI skeleton screens for seamless visual transitions during async content loads.'
    ],
    demoLink: 'http://youtube-clone-abhishek.netlify.app',
    githubLink: 'https://github.com/abhisunny2610/Namaste-React/tree/main/youtube'
  },
  {
    id: 'shopping-karo',
    title: 'Shopping Karo — Modern E-Commerce Storefront',
    category: 'Frontend & APIs',
    featured: false,
    tier: 'interactive',
    badge: 'E-COMMERCE',
    tagline: 'Interactive e-commerce storefront with product catalog, category/price filters, cart management, and shimmer loading.',
    emoji: '🛍️',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    description: 'Responsive e-commerce shopping web application built with React.js that consumes external product APIs. Features dynamic multi-category filtering, price sorting, real-time search, interactive shopping cart with quantity adjustments, and shimmer UI.',
    techStack: ['React.js', 'React Context API', 'REST API', 'React Router', 'Shimmer UI', 'Bootstrap CSS'],
    metrics: [
      { label: 'Category', value: 'E-Commerce' },
      { label: 'State', value: 'Context API' },
      { label: 'Features', value: 'Cart & Filters' },
      { label: 'API Data', value: 'DummyJSON API' }
    ],
    features: [
      'Engineered responsive product discovery interface consuming DummyJSON REST API.',
      'Utilized React Context API for global cart state, quantity updates, and checkout calculation.',
      'Implemented multi-criteria filtering by category, price ranges, and real-time title search.',
      'Enhanced customer UX with skeleton shimmer states during asynchronous API data fetching.'
    ],
    demoLink: 'https://shopping-karo.netlify.app',
    githubLink: 'https://github.com/abhisunny2610/Shopping-Karo/tree/main/shopping_karo'
  }
];

export const ENGINEERING_CAPABILITIES = [
  {
    id: 'frontend',
    title: 'Frontend & UI Architecture',
    tagline: 'Component-driven, responsive & accessible interfaces',
    description: 'Specialized in building modular React.js applications with reusable UI patterns, predictable state management (Redux Toolkit & Context API), and clean styling systems (Tailwind CSS and pure CSS variables). I focus on snappy rendering, mobile responsiveness, and zero layout shift.',
    icon: 'Code2',
    badges: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'Component Systems']
  },
  {
    id: 'backend',
    title: 'Backend & REST API Engineering',
    tagline: 'Secure, scalable server-side systems',
    description: 'Engineering RESTful microservices and API gateways using Node.js and Express.js. Experienced in JWT authentication, route middleware, request validation, Postman testing, and connecting client applications with persistent data sources.',
    icon: 'Layers',
    badges: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Postman']
  },
  {
    id: 'database',
    title: 'Database Design & Production Deployment',
    tagline: 'Reliable persistence & end-to-end delivery',
    description: 'Designing normalized relational schemas in MySQL and document collections in MongoDB with Mongoose. Experienced with the full production deployment lifecycle, demonstrated by live platforms like Braj Darshan (divyabraj.com).',
    icon: 'Database',
    badges: ['MongoDB', 'MySQL', 'Production Deployment', 'divyabraj.com']
  }
];

export const SKILL_CATEGORIES = [
  {
    category: 'Frontend Engineering',
    icon: 'Code2',
    skills: [
      { name: 'React.js', level: 94, experience: 'Core Focus' },
      { name: 'Redux Toolkit & RTK Query', level: 88, experience: 'State Management' },
      { name: 'Next.js', level: 82, experience: 'SSR & Routing' },
      { name: 'HTML5 & CSS3', level: 95, experience: 'Semantic Web' },
      { name: 'Tailwind CSS', level: 92, experience: 'Modern Styling' }
    ]
  },
  {
    category: 'Backend & APIs',
    icon: 'Layers',
    skills: [
      { name: 'Node.js', level: 90, experience: 'Server Runtime' },
      { name: 'Express.js', level: 92, experience: 'RESTful Routing' },
      { name: 'REST APIs', level: 94, experience: 'API Architecture' },
      { name: 'JWT (Authentication)', level: 86, experience: 'Security & Tokens' },
      { name: 'Backend Connectivity', level: 90, experience: 'End-to-End Flow' }
    ]
  },
  {
    category: 'Databases & Storage',
    icon: 'Database',
    skills: [
      { name: 'MongoDB & Mongoose', level: 92, experience: 'NoSQL Schemas' },
      { name: 'MySQL', level: 88, experience: 'Relational & SQL' },
      { name: 'PostgreSQL', level: 80, experience: 'Relational DB' },
      { name: 'MySQL Workbench', level: 85, experience: 'Schema Modeling' }
    ]
  },
  {
    category: 'Languages & Developer Tools',
    icon: 'Wrench',
    skills: [
      { name: 'JavaScript (ES6+)', level: 95, experience: 'Core Language' },
      { name: 'SQL', level: 88, experience: 'Queries & Joins' },
      { name: 'Java & C', level: 82, experience: 'Core CS Foundations' },
      { name: 'Git & GitHub', level: 90, experience: 'Version Control' },
      { name: 'Postman & Vite', level: 88, experience: 'Testing & Tooling' }
    ]
  }
];

export const CORE_VALUES = [
  {
    title: 'Full-Stack Cohesion',
    desc: 'Connecting React user interfaces with Express REST APIs and robust database schemas to deliver reliable, end-to-end applications.'
  },
  {
    title: 'Clean, Maintainable Code',
    desc: 'Writing modular components, predictable state patterns, and clean server routes with zero unnecessary dependencies.'
  },
  {
    title: 'Reliable Database Design',
    desc: 'Modeling persistent data schemas effectively across both NoSQL (MongoDB) and relational databases (MySQL, PostgreSQL).'
  },
  {
    title: 'Continuous Growth & Impact',
    desc: 'Continuously refining modern full-stack workflows and building real-world platforms like Braj Darshan (divyabraj.com) that serve genuine users.'
  }
];
