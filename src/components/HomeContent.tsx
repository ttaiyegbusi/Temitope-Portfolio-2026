"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { CascadeReveal } from "@/components/CascadeReveal";
import { useAppReady } from "@/components/AppShell";

const projects = [
  {
    title: "ChainCore",
    description: "Building Africa's first native core banking platform for 50+ financial institutions across Nigeria and the continent",
    slug: "chaincore",
    thumbnail: "/images/chaincore/hero.jpg",
    mobileThumbnail: "/images/chaincore/mobile.png",
    tags: ["SAAS", "Fintech"],
  },
  {
    title: "Knit",
    description: "Designing a social coordination app that helps friend groups plan, vote and show up to real-life events",
    slug: "knit",
    thumbnail: "/images/knit/hero.jpg",
    mobileThumbnail: "/images/knit/mobile.png",
    tags: ["AI", "Social Networking"],
  },
  {
    title: "Reeple",
    description: "Powering $1M+ in remittances for 5,000+ users and helping African freelancers get paid faster across borders",
    slug: "reeple",
    thumbnail: "/images/reeple/card.jpg",
    mobileThumbnail: "/images/reeple/mobile.png",
    tags: ["Fintech"],
  },
  {
    title: "Yaraa",
    description: "Rethinking enterprise procurement and resource planning for mid-market companies across multiple industries",
    slug: "yaraa",
    thumbnail: "/images/yaraa/hero.jpg",
    mobileThumbnail: "/images/yaraa/mobile.png",
    tags: ["AI", "SAAS", "ERP System"],
  },
  {
    title: "Timein Plus",
    description: "Streamlining HR operations, payroll and employee management for growing teams and organisations",
    slug: "timein-plus",
    thumbnail: "/images/timein-plus/hero.jpg",
    mobileThumbnail: "/images/timein-plus/mobile.png",
    tags: ["HRM", "SAAS"],
  },
  {
    title: "Turbo",
    description: "Designing a mobile-first fintech experience that makes receiving money and paying bills instant across Nigeria",
    slug: "turbo",
    thumbnail: "/images/turbo/hero.jpg",
    mobileThumbnail: "/images/turbo/mobile.png",
    tags: ["AI", "SAAS", "ERP System"],
  },
  {
    title: "FootballBooth",
    description: "Building a social platform that connects football fans through communities, live discussions and trending content",
    slug: "footballbooth",
    thumbnail: "/images/footballbooth/hero.jpg",
    mobileThumbnail: "/images/footballbooth/mobile.png",
    tags: ["AI", "SAAS", "ERP System"],
  },
  {
    title: "Wiremoney",
    description: "Scaling a cross-border payments platform from a single market into 13+ new international markets and territories",
    slug: "wiremoney",
    thumbnail: "/images/wiremoney/hero.jpg",
    mobileThumbnail: "/images/wiremoney/mobile.png",
    tags: ["Fintech", "Payments"],
  },
];

export function HomeContent() {
  const ready = useAppReady();

  return (
    <main className="w-full px-5 md:px-6 pt-20 md:pt-28 pb-28 md:pb-32">
      {/* Header */}
      <CascadeReveal delay={0} ready={ready}>
        <header className="max-w-[550px] mx-auto flex flex-col gap-1">
          <div className="flex items-center gap-4 mb-5">
            {[
              { href: "https://dribbble.com/ttaiyegbusi", label: "Dribbble", icon: <DribbbleIcon /> },
              { href: "https://www.linkedin.com/in/ttaiyegbusi/", label: "LinkedIn", icon: <LinkedInIcon /> },
              { href: "https://github.com/ttaiyegbusi", label: "GitHub", icon: <GitHubIcon /> },
            ].map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="social-icon-appear inline-flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity [&_svg]:w-5 [&_svg]:h-5"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <h1 className="text-lg md:text-xl font-normal text-black font-sans">
            Temitope Aiyegbusi
          </h1>
          <p className="text-sm md:text-base font-normal text-text-soft font-sans">
            Product Designer X Design Engineer
          </p>
        </header>
      </CascadeReveal>

      {/* Hero */}
      <CascadeReveal delay={120} ready={ready}>
        <section className="max-w-[550px] mx-auto mt-[30px] flex flex-col gap-5">
          <p className="text-base font-normal font-sans">
            <span className="text-text-soft">Hello</span>
            <span className="text-black">, I am Temitope Aiyegbusi 🇳🇬.</span>
          </p>
          <p className="text-base font-normal text-text-sub leading-normal">
            I&apos;m passionate about transforming ideas into clean, functional,
            and visually captivating products.
          </p>
          <p className="text-base font-normal text-text-sub leading-normal">
            Over the years, I&apos;ve had the privilege of designing solutions
            across diverse industries like Fintech, PropertyTech, Sports, Supply
            Chain, and more.
          </p>
        </section>
      </CascadeReveal>

      {/* Work */}
      <CascadeReveal delay={240} ready={ready}>
        <section className="max-w-[700px] mx-auto mt-16 flex flex-col gap-12 md:gap-10">
          {chunkArray(projects, 2).map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5">
              {row.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          ))}
        </section>
      </CascadeReveal>

      {/* Fun Projects */}
      <CascadeReveal delay={360} ready={ready}>
        <section className="max-w-[550px] mx-auto mt-20 flex flex-col gap-5">
          <p className="text-sm font-normal text-text-soft">Fun Projects</p>
          <ul className="flex flex-col">
            {[
              "A Figma inspired Portfolio",
              "Notes Web App",
              "Fun Keyboard",
              "WishPop - creating wish lists for gift sharing .",
              "DevFest 2026 Website",
              "Audio Player",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 py-2 px-2 -mx-2 rounded-lg hover:bg-stroke-soft/50 transition-colors cursor-pointer">
                <StackIcon />
                <span className="text-sm md:text-base font-normal text-black">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </CascadeReveal>
    </main>
  );
}

function chunkArray<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

function StackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-text-soft shrink-0">
      <path d="M12 2L2 7l10 5 10-5-10-5Z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2Zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362ZM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.688 8.688 0 0 1 12 3.475Zm-3.633.803a53.903 53.903 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975ZM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 0 1-2.19-5.705ZM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.341.684Zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
