import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Arif Khan",
  title: "Shopify Developer",
  summary: "Shopify Developer with 4+ years of experience in building high-performance eCommerce solutions. Specialized in custom theme development, having built 30+ Shopify themes, and in Shopify app development, including both custom and public apps published on the Shopify App Store. Experienced in Hydrogen storefronts, performance optimization, maintenance, and scalability. Proven ability to enhance user experience through responsive design, API integrations, and modern architecture. Strong expertise in MERN Stack, Next.js, and React Native for full-stack and mobile application development.",
  contact: {
    phone: "+91 7398269095",
    email: "art.izarif00@gmail.com",
    location: "Lucknow, UP",
    linkedin: "linkedin.com/in/arif-khan-01a711241"
  },
  skills: [
    {
      title: "Frontend & Mobile",
      skills: ["React.js", "Next.js", "Remix.js", "React Native", "Tailwind CSS", "ShadCN", "TypeScript", "HTML5/CSS3"],
      icon: "layout"
    },
    {
      title: "Shopify Ecosystem",
      skills: ["Liquid", "Custom Themes (30+)", "Hydrogen", "App Development", "Shopify Functions", "Storefront API"],
      icon: "shopping-bag"
    },
    {
      title: "Backend & Full Stack",
      skills: ["Node.js", "Express.js", "GraphQL", "REST APIs", "JWT Auth", "Prisma ORM"],
      icon: "server"
    },
    {
      title: "Databases & Tools",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Git/GitHub", "AI Integrations", "Project Management"],
      icon: "database"
    }
  ],
  experience: [
    {
      role: "Senior Shopify Developer",
      company: "Webley & Scott",
      location: "Lucknow, India",
      period: "July 2024 – Present",
      highlights: [
        "Led development and customization of high-performance Shopify stores with optimized UX/UI.",
        "Developed 30+ custom Shopify themes using Liquid, HTML5, CSS3, and JavaScript.",
        "Built public and custom Shopify apps using Remix.js, Node.js, and GraphQL, some published on the Shopify App Store.",
        "Implemented advanced features including checkout customization, volume discounts, and visual search.",
        "Developed full-stack solutions with authentication, database management, and third-party integrations.",
        "Improved store performance, security, and scalability through continuous optimization."
      ]
    },
    {
      role: "Shopify Developer",
      company: "Webley & Scott",
      location: "Lucknow, India",
      period: "June 2022 – July 2024",
      highlights: [
        "Designed and optimized user-friendly eCommerce interfaces.",
        "Built responsive layouts for cross-device compatibility.",
        "Developed custom apps based on business requirements.",
        "Improved product SEO and site performance, increasing organic traffic.",
        "Supported long-term maintenance and feature upgrades."
      ]
    },
    {
      role: "Front-End Web Developer",
      company: "NotHuman.ai",
      location: "Delhi, India",
      period: "Nov 2021 – April 2022",
      highlights: [
        "Developed responsive websites using HTML5, CSS3, and JavaScript (ES6+).",
        "Used Git/GitHub for team collaboration and version control.",
        "Redesigned client landing pages, improving mobile responsiveness and engagement.",
        "Delivered project features ahead of schedule by rapidly learning new tools.",
        "Followed WCAG accessibility and SEO best practices."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor’s in Computer Science",
      institution: "Khwaja Moinuddin Chishti Language University",
      location: "Lucknow UP"
    },
    {
      degree: "Intermediate",
      institution: "St. Xavier Higher Secondary School",
      location: "Gonda UP"
    }
  ]
};

export const NAVIGATION_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];