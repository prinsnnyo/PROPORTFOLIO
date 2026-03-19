export const personalInfo = {
  name: "Prince Niño Antigo",
  title: "Software and AI Engineer",
  location: "Butuan City, Philippines",
  email: "princeninoantigo@gmail.com",
  github: "https://github.com/prinsnnyo",
  linkedin: "https://www.linkedin.com/in/prince-ni%C3%B1o-antigo-aa3b33359/",
  instagram: "https://www.instagram.com/prnsnnyo_?igsh=MXhoMmZhZmRjeG45cQ==",
  blog: "https://yourblog.com",
  calendly: "https://calendly.com/princeninoantigo/30min",
  photo: "/photo.jpg", 
  verified: true,
  award: "Philippine Startup Challenge Finalist  2025",
  bio: [
   "I’m a full-stack software engineer skilled in JavaScript, Python, and PHP, building modern web and mobile applications while driving SEO and digital marketing initiatives. My recent focus is on artificial intelligence, where I develop intelligent, AI-powered solutions and leverage generative AI to streamline workflows and deliver innovative technology.",
  ],
};

export const experiences = [
  { role: "Frontend Developer",   company: "DOSTrack | Internship",          year: "2026", type: "work" },
  { role: "AI Developer / Full-Stack Developer", company: "BizNest Technologies", year: "2025", type: "work" },
  { role: "Full-Stack Developer",        company: "ATENDA",                    year: "2024", type: "work" },
  { role: "Designer",                    company: "Nexus Inc.",                year: "2023", type: "work" },
  { role: "BS Information Technology",   company: "Caraga State University",  year: "2022", type: "education" },
  { role: "Hello World! 👋",             company: "Wrote my first line of code", year: "2022", type: "milestone" },
];

// First 3 categories shown by default; all shown when "View All" is expanded.
export const techStack = [
  {
    category: "Frontend",
    items: [
      "JavaScript", "TypeScript", "React", "Next.js", "Vue.js",
      "Tailwind CSS", "Vite", "Webpack", "ESLint",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js", "Python", "Java", "PHP", "Express.js",
      "NestJS", "FastAPI", "Spring Boot", "Laravel",
      "PostgreSQL", "MySQL", "Supabase", "OAuth", "JWT", "REST",
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      "AWS", "Azure", "Docker", 
      "GitHub Actions", "GitLab CI", 
      "AWS CloudFormation", 
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "TensorFlow", "PyTorch",
      "OpenAI", "Anthropic", "Mistral", "Hugging Face",
      "LlamaIndex", "AutoGPT",
    ],
  },
  {
    category: "Security & Identity",
    items: [
      "AWS IAM", "Azure AD","Auth0", 
       "SOC 2", "ISO 27001",
    ],
  },
  {
    category: "CMS & No-Code",
    items: [
      "WordPress", "Strapi", "Bubble", "Webflow",
      "Microsoft Power Platform", "n8n",
    ],
  },
  {
    category: "Developer Tools",
    items: [
      "Git", "GitHub", "GitLab", "Bitbucket", "VS Code",
      "JetBrains IntelliJ", "PyCharm", "Slack", "Discord",
      "Teams",
    ],
  },
];

export const projects = [
  {
    emoji: "💻",
    name: "rentacomputer",
    tagline: "Trusted choice for computer rentals",
    url: "rentacomputer.vercel.app",
    href: "https://rentacomputer.vercel.app/",
    github: "#",
    tags: ["Next.js", "Node.js"],
  },
  {
    emoji: "📊",
    name: "ATENDA",
    tagline: "Alumni Tracker with Analytics",
    url: "ccis-atenda.onrender.com",
    href: "https://ccis-atenda.onrender.com/",
    github: "#",
    tags: ["Vue.js", "Django"],
  },
  {
    emoji: "🚌",
    name: "BusWise",
    tagline: "Digital Bus Tracker",
    url: "tracker-khaki-ten.vercel.app",
    href: "https://tracker-khaki-ten.vercel.app/",
    github: "#",
    tags: ["React", "Nest"],
  },
  {
    emoji: "🔎",
    name: "Phising Detector",
    tagline: "AI-powered email phishing detector",
    url: "phishingd-detector.vercel.app",
    href: "https://phishingd-detector.vercel.app/",
    github: "#",
    tags: ["React", "Python"],
  },
  {
    emoji: "🌾",
    name: "Agrinet",
    tagline: "Digital Agriculture Network",
    url: "agrinet-xy.vercel.app",
    href: "https://agrinet-xy.vercel.app/",
    github: "#",
    tags: ["React", "Tailwind CSS"],
  },
  {
    emoji: "🏛",
    name: "DPWH",
    tagline: "Proposed DPWH Website",
    url: "114-dpwh.vercel.app",
    href: "https://114-dpwh.vercel.app/",
    github: "#",
    tags: ["React", "Next.js"],
  },
  {
    emoji: "📍",
    name: "USAD-beta",
    tagline: "Online platform for yearners",
    url: "freedomwall-beta.vercel.app",
    href: "https://freedomwall-beta.vercel.app/",
    github: "#",
    tags: ["React", "Supabase"],
  },
];

export const certifications = [
  { name: "Design Thinking and Technopreneurship Training", issuer: "Huawei" },
  { name: "Capacity Building for Startup Growth: Legal Compliance Essentials",    issuer: "Google" },
  { name: "Software Engineering",    issuer: "TestDome" },
  { name: "Generative AI Professional", issuer: "Oracle" },
];

export const memberships = [
  "Analytics & Artificial Intelligence Association of the Philippines (AAP)",
  "Philippine Software Industry Association",
];

export const testimonials = [
  {
    text: "An incredibly talented developer who consistently delivers quality work on time. A true asset to any team and someone you definitely want on your team.",
    name: "Roman Osorio",
    role: "CEO BizNest Technologies",
    initials: "R",
  },
  {
    text: "Their attention to detail and passion for clean code made our project a huge success. Highly recommend working with them.",
    name: "Leoneil Ivan Aying",
    role: "Product Manager Nexus Inc.",
    initials: "LI",
  },
  {
    text: "A mentor who truly cares. They helped me land my first developer job through consistent guidance and real-world project exposure.",
    name: "Alex Martinez",
    role: "Junior Developer, Freelance",
    initials: "AM",
  },
];

// Add paths to gallery images placed in /public/gallery/
export const gallery: string[] = [
  // "/gallery/photo1.jpg",
  // "/gallery/photo2.jpg",
];
