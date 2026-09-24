import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects } from "@/data/featuredProjects";

export default function WorkPage() {
  return (
    <main className="w-full px-5 md:px-6 pt-20 md:pt-28 pb-28 md:pb-32">
      <section className="max-w-[700px] mx-auto flex flex-col gap-12 md:gap-10">
        <h1 className="text-lg md:text-xl font-normal text-black">Works</h1>
        {chunkArray(featuredProjects.filter((p) => !p.hideOnHome), 2).map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5">
            {row.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        ))}
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
