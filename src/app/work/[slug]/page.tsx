import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects, getProject } from "@/data/projects";
import { CaseStudySidebar } from "@/components/CaseStudySidebar";
import { VideoPlayer } from "@/components/VideoPlayer";
import { MobileScrollbar } from "@/components/MobileScrollbar";
import { DragScroll } from "@/components/DragScroll";
import { ImageLightbox } from "@/components/ImageLightbox";
import { ReadingProgress } from "@/components/ReadingProgress";

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
    <MobileScrollbar items={project.tocItems} />
    <main className="w-full max-w-[960px] mx-auto px-5 md:px-6 pb-28 md:pb-32">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-40 mb-4">
        <div className="bg-bg pt-10 md:pt-14 pb-4">
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
          <div className="flex-1 bg-gradient-to-b from-bg to-transparent" />
        </div>
        <div className="h-4 md:hidden bg-gradient-to-b from-bg to-transparent" />
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
            <div data-case-hero className="w-full rounded-lg overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          ) : (
            <div data-case-hero className="bg-bg-white h-[220px] md:h-[400px] w-full rounded-lg" />
          )}

          {/* Sections */}
          <div className="flex flex-col gap-10 mt-5">
            {project.sections.map((section) => (
              <section key={section.id} id={section.id} className="flex flex-col gap-2.5">
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
                  <div className="w-full rounded-lg overflow-hidden">
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={1200}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                )}

                {section.subsections?.map((sub) => (
                  <div
                    key={sub.id}
                    id={sub.id}
                    className="flex flex-col gap-2.5 mt-5"
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
                        <div className="w-full rounded-lg overflow-hidden">
                          <Image
                            src={sub.image}
                            alt={sub.title}
                            width={2000}
                            height={600}
                            quality={95}
                            className="w-full h-auto"
                          />
                        </div>
                      </ImageLightbox>
                    )}
                    {sub.images && sub.images.length > 0 && (
                      <div className="relative -mr-5 md:-mr-6">
                        <DragScroll className="flex gap-5 overflow-x-auto pb-4 pr-5 md:pr-6">
                          {sub.images.map((img, i) => (
                            <div key={i} className="shrink-0 flex flex-col gap-2">
                              <ImageLightbox src={img} alt={`${sub.title} ${i + 1}`} images={sub.images} startIndex={i}>
                                <div className="w-[80vw] md:w-[460px] overflow-hidden rounded-lg">
                                  <Image
                                    src={img}
                                    alt={`${sub.title} ${i + 1}`}
                                    width={1400}
                                    height={1000}
                                    quality={95}
                                    className="w-full h-auto pointer-events-none"
                                  />
                                </div>
                              </ImageLightbox>
                              {sub.captions && sub.captions[i] && (
                                <p className="text-sm text-text-sub text-center leading-[24px] tracking-[0.01em]">{sub.captions[i]}</p>
                              )}
                            </div>
                          ))}
                        </DragScroll>
                        <div className="absolute top-0 right-0 bottom-4 w-16 md:w-24 pointer-events-none bg-[linear-gradient(to_left,var(--color-bg)_0%,transparent_100%)]" />
                      </div>
                    )}
                    {sub.image === true && !sub.video && (
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
