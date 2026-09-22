import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject, getNextCaseStudy } from "@/data/projects";
import { CaseStudySidebar } from "@/components/CaseStudySidebar";
import { VideoPlayer } from "@/components/VideoPlayer";
import { MobileScrollbar } from "@/components/MobileScrollbar";
import { ImageGallery } from "@/components/ImageGallery";
import { ImageLightbox } from "@/components/ImageLightbox";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Reveal } from "@/components/Reveal";
import { FadeInImage } from "@/components/FadeInImage";

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

  const nextProject = getNextCaseStudy(slug);

  return (
    <div data-page-transition className="page-transition-enter">
    <MobileScrollbar items={project.tocItems} />
    <main className="w-full max-w-[960px] mx-auto px-5 md:px-6 pb-28 md:pb-32">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-40 mb-4">
        <div className="bg-bg pt-10 md:pt-14 pb-4 -mr-5 md:-mr-6 pr-5 md:pr-6">
          <div className="flex gap-4 md:gap-[60px] items-center">
            <div className="md:w-[200px] shrink-0">
              <Link
                href="/"
                className="inline-flex items-center gap-1 h-[30px] px-2 bg-bg-white rounded-lg hover:bg-stroke-soft/50 transition-colors"
              >
                <ArrowLeftIcon />
                <span className="text-sm text-text-soft">Back</span>
              </Link>
            </div>

            <div className="flex items-center min-w-0">
              <ReadingProgress />
              <nav className="flex items-center gap-1 text-sm md:text-base">
                <Link href="/" className="text-text-soft hover:text-text-sub transition-colors">
                  Home
                </Link>
                <span className="text-text-soft">/</span>
                <span className="text-text-strong font-normal">{project.title}</span>
              </nav>
            </div>
          </div>
        </div>
        <div className="h-6 hidden md:flex gap-[60px]">
          <div className="w-[200px] shrink-0" />
          <div className="flex-1 -mr-5 md:-mr-6 bg-gradient-to-b from-bg to-transparent" />
        </div>
        <div className="h-4 md:hidden -mr-5 bg-gradient-to-b from-bg to-transparent" />
      </div>

      {/* Two-column layout */}
      <div className="flex gap-[60px] items-start">
        {/* Sidebar TOC — hidden on mobile */}
        <div className="hidden md:block self-stretch">
          <CaseStudySidebar items={project.tocItems} />
        </div>

        {/* Content */}
        <div data-case-content className="flex-1 min-w-0 flex flex-col gap-5">
          {/* Tagline — leads the page */}
          <div className="flex flex-col gap-3">
            <p className="max-w-[600px] text-lg font-normal text-black leading-[28px]">
              {project.description}
            </p>
            {((project.tags && project.tags.length > 0) || project.website) && (
              <div className="flex flex-wrap items-center gap-1.5 text-sm font-normal text-text-soft">
                {project.tags && project.tags.length > 0 && (
                  <>
                    <span>{project.title}</span>
                    {project.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-text-soft inline-block" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                  >
                    {project.tags && project.tags.length > 0 && (
                      <span className="w-1 h-1 rounded-full bg-text-soft inline-block mr-1" />
                    )}
                    Visit Website
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Hero image */}
          {project.thumbnail ? (
            <div data-case-hero className="relative w-full rounded-lg overflow-hidden bg-bg-white">
              <FadeInImage
                src={project.thumbnail}
                alt={project.title}
                width={1200}
                height={600}
                priority
                className="w-full h-auto"
              />
            </div>
          ) : (
            <div data-case-hero className="bg-bg-white h-[220px] md:h-[400px] w-full rounded-lg" />
          )}

          {/* Sections */}
          <div className="flex flex-col gap-10 mt-5">
            {project.sections.map((section) => (
              <Reveal key={section.id}>
              <section id={section.id} className="flex flex-col gap-2.5">
                <h2 className="text-xs font-normal uppercase tracking-[0.1em] text-text-soft leading-[24px]">
                  {section.title}
                </h2>

                {section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="max-w-[600px] text-base font-normal text-text-sub leading-[24px] tracking-[0.01em]"
                  >
                    {p}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="list-disc ml-6 flex flex-col gap-1 max-w-[600px]">
                    {section.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="text-base text-text-sub leading-[24px] tracking-[0.01em]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {typeof section.image === "string" && (
                  <div className="relative w-full rounded-lg overflow-hidden bg-bg-white">
                    <FadeInImage
                      src={section.image}
                      alt={section.title}
                      width={1200}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                )}

                {section.subsections?.map((sub) => (
                  <Reveal key={sub.id} className="mt-5">
                  <div
                    id={sub.id}
                    className="flex flex-col gap-2.5"
                  >
                    <h3 className="text-base font-normal text-text-strong leading-[24px]">
                      {sub.title}
                    </h3>
                    {sub.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="max-w-[600px] text-base font-normal text-text-sub leading-[24px] tracking-[0.01em]"
                      >
                        {p}
                      </p>
                    ))}
                    {sub.video && (
                      <VideoPlayer src={sub.video} />
                    )}
                    {typeof sub.image === "string" && !sub.video && (
                      <ImageLightbox src={sub.image} alt={sub.title}>
                        <div className="relative w-full rounded-lg overflow-hidden bg-bg-white">
                          <FadeInImage
                            src={sub.image}
                            alt={sub.title}
                            width={2000}
                            height={600}
                            quality={82}
                            className="w-full h-auto"
                          />
                        </div>
                      </ImageLightbox>
                    )}
                    {sub.images && sub.images.length > 0 && (
                      <ImageGallery images={sub.images} captions={sub.captions} title={sub.title} />
                    )}
                    {sub.image === true && !sub.video && (
                      <div className="bg-bg-white h-[200px] md:h-[350px] w-full rounded-lg" />
                    )}
                  </div>
                  </Reveal>
                ))}
              </section>
              </Reveal>
            ))}
          </div>

          {/* Next case study CTA */}
          {nextProject && (
            <Link
              href={`/work/${nextProject.slug}`}
              className="group mt-16 flex flex-col gap-2.5 border-t border-stroke-soft pt-8"
            >
              <span className="text-sm font-normal text-text-soft">Next case study</span>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-sm font-normal text-text-soft">
                  <span>{nextProject.title}</span>
                  {nextProject.tags?.map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-text-soft inline-block" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
                <p className="text-sm md:text-base font-normal text-black leading-snug">
                  {nextProject.description}
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </main>
    </div>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      width="16"
      height="16"
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
