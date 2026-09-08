export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "How I work", href: "/how-i-work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
];

export const siteConfig = {
  name: "Ian Pan",
  title: "Senior Product Designer",
  intro:
    "I\u2019m Ian. I design complex products. From concept to coded prototype.",
  philosophy:
    "I design with logic, scalability, and usability at the core. My approach is rooted in structured problem-solving \u2014 ensuring seamless workflows, intuitive interactions, and long-term adaptability. I see design as more than visuals; it\u2019s a bridge between users, business, and technology, shaping meaningful experiences that drive impact.",
  contact:
    "I\u2019d love to connect! Whether you have a project in mind, need more details, or just want to chat, feel free to reach out.",
  subtitle:
    "Senior Product Designer focused on B2B SaaS and AI products.",
  email: "ianp.ux@gmail.com",
  linkedin: "https://linkedin.com/in/ianpan",
};

export type Project = {
  title: string;
  description: string;
  category: string;
  tags: string[];
  slug: string;
  href: string;
};

export const projects: Project[] = [
  {
    title: "Disputes 360",
    description: "SaaS platform design for AI-augmented disputes operations.",
    category: "B2B SaaS · Fintech",
    tags: ["SaaS", "Fintech"],
    slug: "disputes360",
    href: "/work/disputes360",
  },
  {
    title: "Uber Pro Card UK",
    description: "End-to-end banking experience for 300,000 drivers and couriers: wallet, transactions, disputes, cashback, and more.",
    category: "Fintech · Mobile",
    tags: ["Fintech", "Mobile", "B2B2C"],
    slug: "autobahn",
    href: "/work/autobahn",
  },
  {
    title: "Yirental",
    description: "Reframing a rental search experience around user intent, not UI. Satisfaction 2.8 → 4.7.",
    category: "Research · Consumer",
    tags: ["Research", "Mobile", "Consumer"],
    slug: "yirental",
    href: "/work/yirental",
  },
  {
    title: "Phonewagon",
    description: "A cross-platform SaaS design system, defended at the component level.",
    category: "Design Systems",
    tags: ["Design Systems", "SaaS"],
    slug: "phonewagon",
    href: "/work/phonewagon",
  },
  {
    title: "Design System",
    description: "Building a scalable, token-based component library from the ground up.",
    category: "Design Systems",
    tags: ["Design Systems", "Tokens"],
    slug: "design-system",
    href: "/work/design-system",
  },
  {
    title: "Consumer Mobile App",
    description: "B2B2C experience spanning card management across iOS and Android.",
    category: "Mobile · B2B2C",
    tags: ["Mobile", "B2B2C"],
    slug: "consumer-mobile-app",
    href: "/work/consumer-mobile-app",
  },
];

export type Article = {
  title: string;
  date: string;
  href: string;
};

export const articles: Article[] = [
  {
    title:
      "Designing Under Constraints: 5 Mindset Shifts That Helped Me Grow",
    date: "06/07/2025",
    href: "#",
  },
  {
    title:
      "Red Envelopes in the Digital Age: Blessings, Fortune, and Changing Social Dynamics",
    date: "03/16/2025",
    href: "#",
  },
  {
    title:
      "Real Life Competitive Analysis in UX/Product Design: Not Just Axes and Tables",
    date: "03/05/2025",
    href: "#",
  },
];
