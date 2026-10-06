export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/Ian_Pan_Resume.pdf", external: true },
];

export const siteConfig = {
  name: "Ian Pan",
  title: "Senior Product Designer",
  intro:
    "I\u2019m Ian. I make complex products easier to use. From concept to coded prototype.",
  philosophy:
    "I start by understanding the rules, constraints, and decisions behind a workflow. I build coded prototypes to test how those pieces work together. I look for where people hesitate, what they need to know, and whether the next step is clear.",
  contact:
    "I\u2019d love to connect! Whether you have a project in mind, need more details, or just want to chat, feel free to reach out.",
  subtitle:
    "Senior Product Designer at Marqeta, working across fintech, B2B SaaS, and AI-assisted workflows. Based in the San Francisco Bay Area.",
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
    title: "Disputes360",
    description: "Case management and AI-assisted evidence review for dispute operations.",
    category: "B2B SaaS · Fintech",
    tags: ["SaaS", "Fintech"],
    slug: "disputes360",
    href: "/work/disputes360",
  },
  {
    title: "Uber Pro Card UK",
    description: "Wallet, transaction history, and dispute reporting for UK drivers and couriers.",
    category: "Fintech · Mobile",
    tags: ["Fintech", "Mobile", "B2B2C"],
    slug: "autobahn",
    href: "/work/autobahn",
  },
  {
    title: "Yirental",
    description: "Mobile rental search, with clearer entry points, more detailed filters, and easier-to-scan listings.",
    category: "Research · Consumer",
    tags: ["Research", "Mobile", "Consumer"],
    slug: "yirental",
    href: "/work/yirental",
  },
  {
    title: "PhoneWagon",
    description: "Shared visual foundations, reusable components, and usage guidelines for a call-tracking product.",
    category: "Design Systems",
    tags: ["Design Systems", "SaaS"],
    slug: "phonewagon",
    href: "/work/phonewagon",
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
