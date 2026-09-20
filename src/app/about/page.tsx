"use client";

import Link from "next/link";
import { CascadeReveal } from "@/components/CascadeReveal";
import { useAppReady } from "@/components/AppShell";

const work = [
  {
    company: "Crawlbase",
    description: "Web crawling & scraping API for developers",
    color: "#22c55e",
  },
  {
    company: "Automaze",
    description: "Product studio shipping software for startups",
    color: "#f97316",
  },
  {
    company: "Wiremoney",
    description: "Cross-border payments & money transfers",
    slug: "wiremoney",
    color: "#0ea5e9",
  },
  {
    company: "Reeple",
    description: "Remittances & payments for African freelancers",
    slug: "reeple",
    color: "#4f46e5",
  },
  {
    company: "TheNovelBrand",
    description: "Brand & design studio for growing businesses",
    color: "#171717",
  },
];

const writing = [
  {
    title: "7 Things you need to know when incorporating AI into your Workflow",
    date: "25.FEB.2026",
    href: "https://medium.com/design-bootcamp/7-things-you-need-to-know-when-incorporating-ai-into-your-design-workflow-dbe1c6a4d353",
  },
  {
    title: "The Subjectivity of Taste",
    date: "17.JAN.2026",
    href: "https://medium.com/@aiyegbusitope/the-subjectivity-of-taste-042245935382",
  },
  {
    title: "Design Hand-off: From a Designer's POV",
    date: "05.JAN.2025",
    href: "https://medium.com/@aiyegbusitope/design-hand-off-from-a-designers-pov-4b88dbb738e5",
  },
];

export default function AboutPage() {
  const ready = useAppReady();

  return (
    <main className="w-full px-5 md:px-6 pt-20 md:pt-28 pb-28 md:pb-32">
      {/* Intro */}
      <CascadeReveal delay={0} ready={ready}>
        <header className="max-w-[550px] mx-auto flex flex-col gap-1">
          <h1 className="text-lg md:text-xl font-normal text-black font-sans">
            Temitope Aiyegbusi
          </h1>
          <p className="text-sm md:text-base font-normal text-text-soft font-sans">
            Product Designer X Design Engineer
          </p>
        </header>
      </CascadeReveal>

      <CascadeReveal delay={120} ready={ready}>
        <section className="max-w-[550px] mx-auto mt-[30px] flex flex-col gap-5">
          <p className="text-base font-normal text-text-sub leading-relaxed">
            I&apos;m a <span className="text-black">Product Designer</span> and{" "}
            <span className="text-black">Design Engineer</span> based in Nigeria
            🇳🇬, building{" "}
            <Link href="/work" className="italic underline underline-offset-2 text-black hover:text-text-sub transition-colors">
              beautiful software
            </Link>{" "}
            that people love to use. I turn ideas into clean, functional, and
            visually captivating products.
          </p>
          <p className="text-base font-normal text-text-sub leading-relaxed">
            I care deeply about design excellence and intentionality — I believe
            every pixel, line, and interaction should serve a purpose. Over the
            years I&apos;ve had the privilege of designing solutions across{" "}
            <span className="text-black">Fintech</span>,{" "}
            <span className="text-black">PropertyTech</span>,{" "}
            <span className="text-black">Sports</span>, and{" "}
            <span className="text-black">Supply Chain</span>.
          </p>
          <p className="text-base font-normal text-text-sub leading-relaxed">
            Always open to interesting conversations about design, startups, and
            building things.{" "}
            <Link href="/contact" className="italic underline underline-offset-2 text-black hover:text-text-sub transition-colors">
              Say hello
            </Link>{" "}
            or find me on{" "}
            <a href="https://dribbble.com/ttaiyegbusi" target="_blank" rel="noopener noreferrer" className="italic underline underline-offset-2 text-black hover:text-text-sub transition-colors">
              Dribbble
            </a>
            ,{" "}
            <a href="https://www.linkedin.com/in/ttaiyegbusi/" target="_blank" rel="noopener noreferrer" className="italic underline underline-offset-2 text-black hover:text-text-sub transition-colors">
              LinkedIn
            </a>
            , or{" "}
            <a href="https://github.com/ttaiyegbusi" target="_blank" rel="noopener noreferrer" className="italic underline underline-offset-2 text-black hover:text-text-sub transition-colors">
              GitHub
            </a>
            .
          </p>
        </section>
      </CascadeReveal>

      {/* Work */}
      <CascadeReveal delay={280} ready={ready}>
        <section className="max-w-[550px] mx-auto mt-14 flex flex-col gap-5">
          <p className="text-xs font-mono tracking-widest uppercase text-text-soft">
            Work Experience
          </p>
          <ul className="flex flex-col">
            {work.map((item) => {
              const content = (
                <>
                  <span
                    className="flex items-center justify-center w-6 h-6 rounded-md text-white text-xs font-semibold shrink-0"
                    style={{ backgroundColor: item.color }}
                    aria-hidden
                  >
                    {item.company.charAt(0)}
                  </span>
                  <span className="text-sm md:text-base font-normal text-black shrink-0">
                    {item.company}
                  </span>
                  <span className="text-text-soft">/</span>
                  <span className="text-sm md:text-base font-normal text-text-soft truncate">
                    {item.description}
                  </span>
                </>
              );

              return (
                <li key={item.company}>
                  {item.slug ? (
                    <Link
                      href={`/work/${item.slug}`}
                      className="flex items-center gap-3 py-2 px-2 -mx-2 rounded-lg hover:bg-stroke-soft/50 transition-colors"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div className="flex items-center gap-3 py-2 px-2 -mx-2">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      </CascadeReveal>

      {/* Writing */}
      <CascadeReveal delay={440} ready={ready}>
        <section className="max-w-[550px] mx-auto mt-14 flex flex-col gap-5">
          <p className="text-xs font-mono tracking-widest uppercase text-text-soft">
            Writing
          </p>
          <ul className="flex flex-col">
            {writing.map((item) => (
              <li key={item.href} className="border-b border-stroke-soft last:border-b-0">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-4 py-2.5"
                >
                  <span className="text-sm md:text-base font-medium text-black group-hover:text-text-sub transition-colors truncate min-w-0">
                    {item.title}
                  </span>
                  <span className="text-xs font-mono tracking-wider text-text-soft shrink-0">
                    {item.date}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </CascadeReveal>
    </main>
  );
}
