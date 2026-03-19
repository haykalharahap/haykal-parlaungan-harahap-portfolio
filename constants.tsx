
import { Project, Experience, SkillGroup, Education, Certification } from './types';

export const PERSONAL_INFO = {
  name: 'Haykal Parlaungan Harahap',
  title: 'Front-End Developer',
  location: 'Medan, Indonesia',
  email: 'haykalharahap@gmail.com',
  whatsapp: '+62816351991',
  whatsappUrl: 'https://wa.me/62816351991',
  linkedin: 'https://www.linkedin.com/in/haykal-harahap-6495b01a3/',
  github: 'https://github.com/haykalharahap',
  instagram: 'https://www.instagram.com/haykalharahap/',
  summary: 'Front-End Developer experienced in building modern web applications using React.js, JavaScript, and REST API integration. Skilled in responsive UI, component-based architecture, debugging, and API-based workflows. Actively completing a Front-End Development Bootcamp with hands-on projects focused on authentication, protected routes, and scalable UI development.',
  cvUrl: '/cv-haykal-harahap.pdf',
};

export const SKILLS: SkillGroup[] = [
  {
    category: 'Front-End',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'React Hooks', 'React Router', 'Tailwind CSS', 'Responsive UI']
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman']
  },
  {
    category: 'Other',
    items: ['REST API Integration', 'Debugging', 'UI/UX Fundamentals']
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Singgah Kita – Food Delivery Web App',
    description: 'A full-featured food delivery web application built as a Final Project for the dibimbing.id Front-End Bootcamp, featuring a customer-facing storefront and a complete admin dashboard.',
    points: [
      'Built authentication & authorization system with role-based access (Customer & Admin).',
      'Developed admin dashboard with full CRUD for food management, order management, and user management.',
      'Implemented real-time cart system with dynamic price calculation and checkout flow.',
      'Integrated REST API for all data operations (foods, transactions, users, categories).',
      'Designed responsive UI optimized for both desktop and mobile using Tailwind CSS.',
      'Applied component-based architecture with custom hooks (useAuth, useCart) and React Router.',
    ],
    techStack: ['React.js', 'Tailwind CSS', 'REST API', 'React Router', 'Vite'],
    liveUrl: 'https://singgah-id.vercel.app/',
    githubUrl: 'https://github.com/haykalharahap',
  },
  {
    title: 'Front-End React Application – Authentication & User Management',
    description: 'A comprehensive user management system featuring authentication and modern web practices.',
    points: [
      'Built login and registration features using REST API.',
      'Implemented protected routes for authenticated sessions.',
      'Developed user list with pagination.',
      'Designed responsive UI using Tailwind CSS.',
      'Debugged API response issues and UI rendering problems.'
    ],
    techStack: ['React.js', 'Tailwind CSS', 'REST API', 'React Router'],
    githubUrl: 'https://github.com/haykalharahap',
  },
  {
    title: "Responsive Landing Page – Modern UI",
    description:
      "A sleek, mobile-first landing page focused on performance and aesthetics.",
    points: [
      "Designed mobile-first landing page with Tailwind CSS",
      "Implemented semantic HTML structure for SEO and accessibility",
      "Built custom JavaScript interactions and animations",
    ],
    techStack: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    githubUrl: 'https://github.com/haykalharahap',
  },
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: 'Operations Manager',
    company: 'CV.Singgah Kita Coffee',
    period: '2020–2025',
    points: [
      'Managed operational workflow and scheduling.',
      'Performed troubleshooting on POS systems and digital tools.',
      'Improved inventory processes with structured digital tracking.',
      'Lead daily coordination to improve service efficiency.'
    ]
  },
  {
    role: 'Paralegal & Documentation Support',
    company: 'Lingga & Partners Law Office',
    period: '2024–2025',
    points: [
      'Structured written documentation and legal research.',
      'Prepared formal reports and client communication.',
      'Ensured accuracy and clarity in structured documents.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'Front-End Web Development Bootcamp',
    institution: 'dibimbing.id',
    period: '2025–Present'
  },
  {
    degree: 'Bachelor of Law',
    institution: 'Universitas Terbuka',
    period: 'Expected 2026'
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Microsoft Certified - Azure Fundamentals', year: '2026', issuer: 'microsoft' },
  { name: 'Meta - Advanced React', year: '2026', issuer: 'meta' },
  { name: 'Google - IT Support', year: '2025', issuer: 'google' }
];

export const LANGUAGES = [
  { name: 'Bahasa Indonesia', level: 'Native' },
  { name: 'Malay', level: 'Native' },
  { name: 'English', level: 'Professional ' }
];
