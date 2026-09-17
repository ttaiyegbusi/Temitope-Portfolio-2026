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

export default function WorkPage() {
  return (
    <main className="w-full max-w-[800px] mx-auto px-6 pt-28 pb-32">
      <h1 className="text-xl font-normal text-black mb-8">My Work</h1>
      <div className="flex flex-col gap-10">
        {chunkArray(projects, 2).map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-2 gap-5">
            {row.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        ))}
      </div>
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
