/**
 * Centralized SEO configuration for the portfolio.
 * Override site URL via NEXT_PUBLIC_SITE_URL in production.
 */

export const siteConfig = {
  name: "Osama Shaikh Portfolio",
  shortName: "Portfolio",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://portfolio-osamashaikh90.vercel.app",
  locale: "en_IN",
  themeColor: "#010409",
  backgroundColor: "#010409",
} as const;

export const defaultSeo = {
  title:
    "Software Engineer & Full Stack Developer | React, Next.js, Node.js Expert",
  description:
    "Experienced Full Stack Developer specializing in React.js, Next.js, TypeScript, Node.js, MERN Stack, scalable web applications, SaaS platforms, and modern frontend development.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Web Developer",
    "SaaS Developer",
  ],
  author: "Portfolio Owner",
  creator: "Osama Shaikh",
  robots: "index, follow" as const,
  ogImage:
    "https://res.cloudinary.com/dwohsn29d/image/upload/v1696745242/Portfolio/images/qamrx9ryxkm7mol5gbdv.jpg",
  ogSiteName: "Osama Shaikh Portfolio",
  twitterHandle: "@Osamash03705044",
} as const;

export const personSchema = {
  name: "Portfolio Owner",
  jobTitle: "Software Engineer",
  description:
    "Full Stack Developer specializing in React, Next.js and Node.js",
  image: defaultSeo.ogImage,
  email: "shaikhosama499@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/osama-shaikh-8641a5211/",
    "https://github.com/Osamashaikh90",
    "https://twitter.com/Osamash03705044",
    "https://dev.to/osamashaikh90",
  ],
} as const;

export type PageSeoKey = "home" | "about" | "projects" | "skills" | "blogs";

export interface PageSeoEntry {
  path: string;
  title: string;
  description: string;
  breadcrumbLabel: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}

export const pageSeo: Record<PageSeoKey, PageSeoEntry> = {
  home: {
    path: "/",
    title: defaultSeo.title,
    description: defaultSeo.description,
    breadcrumbLabel: "Home",
    changeFrequency: "weekly",
    priority: 1,
  },
  about: {
    path: "/about",
    title: "About | Software Engineer & Full Stack Developer",
    description:
      "Learn about Osama Shaikh — Information Technology student and Full Stack Developer focused on React, Next.js, and scalable web applications in Mumbai.",
    breadcrumbLabel: "About",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  projects: {
    path: "/projects",
    title: "Projects | React, Next.js & MERN Portfolio",
    description:
      "Explore production-ready web projects built with React, Next.js, TypeScript, Node.js, and the MERN stack — APIs, SaaS-style apps, and full stack solutions.",
    breadcrumbLabel: "Projects",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  skills: {
    path: "/skills",
    title: "Skills & Contact | Full Stack Developer",
    description:
      "Technical skills in React, Next.js, TypeScript, Node.js, databases, and modern tooling. Get in touch to collaborate on your next web or SaaS project.",
    breadcrumbLabel: "Skills",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  blogs: {
    path: "/blogs",
    title: "Blog | Web Development & Engineering Insights",
    description:
      "Articles and notes on React, Next.js, full stack development, and software engineering from a Full Stack Developer portfolio.",
    breadcrumbLabel: "Blogs",
    changeFrequency: "weekly",
    priority: 0.7,
  },
};

export const sitemapRoutes = Object.values(pageSeo);
