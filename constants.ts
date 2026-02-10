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
  ],
  projects: [
    {
      title: "Webley & Scott India",
      description: "A high-performance custom Shopify Plus theme for a renowned firearms brand. Implemented complex product filtering, verify-with-OTP functionality for restricted items, and a custom dealer locator.",
      technologies: ["Liquid", "JavaScript", "Tailwind CSS", "Google Maps API"],
      type: "Theme",
      link: "https://webleyscott.in"
    },
    {
      title: "Volume Discounts Pro",
      description: "A public Shopify App built with Remix and Shopify Functions to provide tiered pricing and quantity breaks. Features a dynamic discount engine and a merchant-friendly dashboard.",
      technologies: ["Remix.js", "React", "GraphQL", "Prisma", "Shopify Functions"],
      type: "App",
      github: "https://github.com/arifkhan"
    },
    {
      title: "Hydrogen Headless Store",
      description: "Experimental headless storefront built with Shopify Hydrogen. Achieved perfect Lighthouse scores with optimistic UI updates and edge caching strategies.",
      technologies: ["Hydrogen", "React", "Tailwind", "Oxygen"],
      type: "Storefront",
      github: "https://github.com/arifkhan"
    },
    {
      title: "Custom Bundle Builder",
      description: "Interactive React-based bundle builder integrated into a Liquid theme. Allows customers to visually build gift boxes with real-time inventory checks.",
      technologies: ["React", "Liquid", "Storefront API", "Redux"],
      type: "Theme"
    }
  ]
};

export const NAVIGATION_LINKS = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];