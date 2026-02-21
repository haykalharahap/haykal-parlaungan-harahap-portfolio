
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
    title: 'Front-End React Application – Authentication & User Management',
    description: 'A comprehensive user management system featuring authentication and modern web practices.',
    points: [
      'Built login and registration features using REST API.',
      'Implemented protected routes for authenticated sessions.',
      'Developed user list with pagination.',
      'Designed responsive UI using Tailwind CSS.',
      'Debugged API response issues and UI rendering problems.'
    ],
  },
  {
    title: "Singgah Kita Coffee POS",
    description:
      "A web-based Point of Sale (POS) system built for a real coffee shop to streamline cashier operations and product management.",
    points: [
      "Designed cashier-friendly UI for fast order processing",
      "Product & category management for daily operations",
      "Real-time cart calculation and checkout flow",
      "Responsive layout optimized for tablet and mobile use",
      "Built based on real coffee shop operational workflow",
    ],
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
  { name: 'Meta - Advanced React', year: '2026' },
  { name: 'Google - IT Support', year: '2025' }
];

export const LANGUAGES = [
  { name: 'Bahasa Indonesia', level: 'Native' },
  { name: 'Malay', level: 'Native' },
  { name: 'English', level: 'Professional ' }
];
