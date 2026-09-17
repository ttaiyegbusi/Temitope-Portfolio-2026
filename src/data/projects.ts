export interface ProjectSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: {
    id: string;
    title: string;
    paragraphs: string[];
    image?: boolean;
    video?: string;
  }[];
  image?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail?: string;
  tocItems: { id: string; label: string; indent?: boolean }[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "chaincore",
    title: "ChainCore",
    description: "Core Banking Application for the African Companies",
    tocItems: [
      { id: "context", label: "Context" },
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
      { id: "research", label: "Research / Discovery" },
      { id: "features", label: "Features" },
      { id: "accounting", label: "Accounting", indent: true },
      { id: "clients", label: "Clients", indent: true },
      { id: "view-client", label: "View Client", indent: true },
      { id: "create-individual-client", label: "Create Individual Client", indent: true },
      { id: "create-corporate-client", label: "Create Corporate Client", indent: true },
      { id: "create-center", label: "Create Center", indent: true },
      { id: "transactions", label: "Transactions", indent: true },
      { id: "administration", label: "Administration", indent: true },
    ],
    sections: [
      {
        id: "context",
        title: "Context",
        paragraphs: [
          "At the time, core banking application systems built for Nigeria, or for Africa more broadly, were almost non-existent. There was no native core banking platform tailored to the Nigerian banking system or to the wider African market. Most of the core banking platforms in use had been developed on other continents, with many of them coming from India.",
        ],
      },
      {
        id: "problem",
        title: "Problem",
        paragraphs: [
          "This posed a significant problem, because these applications were never designed with the African or Nigerian market in mind. They did not account for the nuances of the local environment or the particular conditions under which Nigerian and African businesses operate, and that gap created real difficulties.",
          "Beyond cost, there were real complaints about actually using these platforms. It has been said that both Moniepoint and Sterling Bank ended up building their own core banking applications, largely because the foreign platforms they relied on were expensive, difficult to use, slow to offer support when issues arose, and still fell short of understanding the context in which Nigerian companies operate.",
        ],
      },
      {
        id: "solution",
        title: "Solution",
        paragraphs: [
          "As a result of these problems, the need for a core banking application built specifically for the African and Nigerian ecosystem became clear. This need led to the creation of ChainCore.",
          "ChainCore was built to be a core banking application that served African companies, African banks, African fintechs, African microfinance banks, and African and Nigerian businesses more broadly, supporting them across their core processes.",
          "It was designed to help these organizations manage their branches, oversee their transactions, structure their chart of accounts, manage their staff, and run their organizations in a more structured and organized way. This was the purpose ChainCore was built to serve.",
        ],
      },
      {
        id: "research",
        title: "Research / Discovery",
        paragraphs: [
          "When development of ChainCore began, the team and I spoke with a number of people to gather perspective, starting with the accountants, who were the primary users of the platform. We wanted to understand the problems they were facing with the core banking application they currently used, along with what was working well and what was missing.",
          "One conversation has stayed with me. An accountant described how she navigated the platform day to day, and she put it simply: a lot of the features were hidden, and she and her team would only discover them on the fly, often in the middle of trying to complete something else entirely.",
          "That single comment captured so much of what we kept hearing in different forms throughout these conversations. The platform was not built around how accountants actually worked. It was something they had to work around.",
          "That feedback, along with everything else we gathered, shaped how we thought about ChainCore from the very beginning. Among the things accountants shared with us:",
        ],
        bullets: [
          "Features were often hidden in places they did not intuitively belong, forcing users to stumble upon functionality rather than find it.",
          "The platform was generally uneasy to use and difficult to navigate.",
        ],
      },
      {
        id: "features",
        title: "Features",
        paragraphs: [],
        subsections: [
          {
            id: "accounting",
            title: "Chain of Account",
            paragraphs: [
              "When development of ChainCore began, the team and I spoke with a number of people to gather perspective, starting with the accountants, who were the primary users of the platform.",
            ],
            video: "/videos/chain-of-account.mp4",
          },
          {
            id: "clients",
            title: "Clients",
            paragraphs: [
              "Managing clients was at the heart of the platform. We designed a system that gave administrators full visibility and control over every client in the organization, from onboarding to ongoing management.",
            ],
          },
          {
            id: "view-client",
            title: "View Client",
            paragraphs: [
              "The client overview gives users a complete snapshot of each client, with all key details accessible at a glance.",
            ],
            video: "/videos/view-client.mp4",
          },
          {
            id: "create-individual-client",
            title: "Create Individual Client",
            paragraphs: [
              "Creating a new client needed to be straightforward and fast. We built a guided flow that walked users through capturing all essential client details in a clear, step-by-step process.",
            ],
            video: "/videos/create-individual-client.mp4",
          },
          {
            id: "create-corporate-client",
            title: "Create Corporate Client",
            paragraphs: [
              "Corporate clients required a different onboarding flow, capturing business details, registration information, and authorized signatories in a structured process.",
            ],
            video: "/videos/create-corporate-client.mp4",
          },
          {
            id: "create-center",
            title: "Create Center",
            paragraphs: [
              "Centers allowed organizations to group clients and operations by location or branch. The creation flow made it easy to set up a new center with all its relevant details.",
            ],
            video: "/videos/create-center.mp4",
          },
          {
            id: "transactions",
            title: "Transactions",
            paragraphs: [
              "Chain of Account: When development of ChainCore began, the team and I spoke with a number of people to gather perspective, starting with the accountants, who were the primary users of the platform.",
            ],
            image: true,
          },
        ],
      },
    ],
  },
  {
    slug: "knit",
    title: "Knit",
    description: "A Core Banking Application for the African Companies",
    tocItems: [
      { id: "context", label: "Context" },
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
    ],
    sections: [
      {
        id: "context",
        title: "Context",
        paragraphs: ["Coming soon."],
      },
    ],
  },
  {
    slug: "yaraa",
    title: "Yaraa",
    description: "An Enterprise Resource Planning Platform",
    tocItems: [
      { id: "context", label: "Context" },
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
    ],
    sections: [
      {
        id: "context",
        title: "Context",
        paragraphs: ["Coming soon."],
      },
    ],
  },
  {
    slug: "chaincore-2",
    title: "ChainCore",
    description: "Product Designer X Design Engineer",
    tocItems: [
      { id: "context", label: "Context" },
    ],
    sections: [
      {
        id: "context",
        title: "Context",
        paragraphs: ["Coming soon."],
      },
    ],
  },
  {
    slug: "devfest-2025",
    title: "DevFest 2025 Ticketing Platform",
    description: "Helping receive payments",
    tocItems: [
      { id: "context", label: "Context" },
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
    ],
    sections: [
      {
        id: "context",
        title: "Context",
        paragraphs: ["Coming soon."],
      },
    ],
  },
  {
    slug: "chaincore-3",
    title: "ChainCore",
    description: "Product Designer X Design Engineer",
    tocItems: [
      { id: "context", label: "Context" },
    ],
    sections: [
      {
        id: "context",
        title: "Context",
        paragraphs: ["Coming soon."],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
