import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "ChainCore",
    description: "Core Banking Application for the African Companies and Market.",
    slug: "chaincore",
  },
  {
    title: "Knit",
    description: "A Core Banking Application for the African Companies",
    slug: "knit",
  },
  {
    title: "Yaraa",
    description: "An Enterprise Resource Planning Platform",
    slug: "yaraa",
  },
  {
    title: "ChainCore",
    description: "Product Designer X Design Engineer",
    slug: "chaincore-2",
  },
  {
    title: "DevFest 2025 Ticketing Platform",
    description: "Helping receive payments",
    slug: "devfest-2025",
  },
  {
    title: "ChainCore",
    description: "Product Designer X Design Engineer",
    slug: "chaincore-3",
  },
];

export default function HomePage() {
  return (
    <main className="w-full max-w-[800px] mx-auto px-5 md:px-6 pt-20 md:pt-28 pb-28 md:pb-32">
      {/* Header */}
      <header className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-normal text-black font-sans">
            Temitope Aiyegbusi
          </h1>
          <div className="flex items-center gap-3">
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <DribbbleIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
        <p className="text-base font-normal text-text-soft font-mono">
          Product Designer X Design Engineer
        </p>
      </header>

      {/* Hero */}
      <section className="mt-[30px] flex flex-col gap-5">
        <p className="text-base font-normal font-sans">
          <span className="text-text-soft">Hello</span>
          <span className="text-black">, I am Temitope Aiyegbusi 🇳🇬.</span>
        </p>
        <p className="text-base font-normal text-text-sub leading-normal">
          I&apos;m passionate about transforming ideas into clean, functional,
          and visually captivating products—this portfolio is proof of that.
        </p>
        <p className="text-base font-normal text-text-sub leading-normal">
          With a strong commitment to design excellence and intentionality, I
          believe every pixel, line, and interaction should serve a purpose. Over
          the years, I&apos;ve had the privilege of designing solutions across
          diverse industries like Fintech, PropertyTech, Sports, Supply Chain,
          and more.
        </p>
      </section>

      {/* Work */}
      <section className="mt-16 flex flex-col gap-5">
        <h2 className="text-base font-normal text-text-strong">My Work</h2>
        <div className="flex flex-col gap-10">
          {chunkArray(projects, 2).map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {row.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          ))}
        </div>
      </section>
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
