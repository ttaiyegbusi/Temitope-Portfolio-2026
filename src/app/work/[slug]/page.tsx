import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject } from "@/data/projects";
import { CaseStudySidebar } from "@/components/CaseStudySidebar";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div data-page-transition className="page-transition-enter">
    <main className="w-full max-w-[800px] mx-auto px-5 md:px-6 pb-28 md:pb-32">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-40 mb-4">
        <div className="bg-bg pt-10 md:pt-14 pb-4">
          <div className="flex gap-4 md:gap-[60px] items-center">
            <div className="md:w-[140px] shrink-0">
              <Link
                href="/"
                className="inline-flex items-center gap-1 bg-bg-white rounded-lg px-2.5 py-2 hover:bg-stroke-soft/50 transition-colors"
              >
                <ArrowLeftIcon />
                <span className="text-base text-text-soft">Back</span>
              </Link>
            </div>

            <nav className="flex items-center gap-1 text-sm md:text-base">
              <Link href="/" className="text-text-soft hover:text-text-sub transition-colors">
                Home
              </Link>
              <span className="text-text-soft">/</span>
              <span className="text-text-strong font-normal">{project.title}</span>
            </nav>
          </div>
        </div>
        <div className="h-6 hidden md:flex gap-[60px]">
          <div className="w-[140px] shrink-0" />
          <div className="flex-1 bg-gradient-to-b from-bg to-transparent" />
        </div>
        <div className="h-4 md:hidden bg-gradient-to-b from-bg to-transparent" />
      </div>

      {/* Two-column layout */}
      <div className="flex gap-[60px] items-start">
        {/* Sidebar TOC — hidden on mobile */}
        <div className="hidden md:block">
          <CaseStudySidebar items={project.tocItems} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col gap-5">
          {/* Hero image */}
          <div className="bg-bg-white h-[220px] md:h-[400px] w-full rounded-lg" />

          {/* Project title */}
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-normal text-black">{project.title}</h1>
            <p className="text-base font-normal text-text-soft font-mono">
              {project.description}
            </p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-10 mt-5">
            {project.sections.map((section) => (
              <section key={section.id} id={section.id} className="flex flex-col gap-2.5">
                <h2 className="text-base font-normal text-black">
                  {section.title}
                </h2>

                {section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-base font-normal text-text-sub leading-[24px]"
                  >
                    {p}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="list-disc ml-6 flex flex-col gap-1">
                    {section.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="text-base text-text-sub leading-[24px]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {section.subsections?.map((sub) => (
                  <div
                    key={sub.id}
                    id={sub.id}
                    className="flex flex-col gap-2.5 mt-5"
                  >
                    <h3 className="text-base font-normal text-black">
                      {sub.title}
                    </h3>
                    {sub.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-base font-normal text-text-sub leading-[24px]"
                      >
                        {p}
                      </p>
                    ))}
                    {sub.image && (
                      <div className="bg-bg-white h-[200px] md:h-[350px] w-full rounded-lg" />
                    )}
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-text-soft"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
