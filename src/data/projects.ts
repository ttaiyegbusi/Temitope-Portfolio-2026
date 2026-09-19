export interface ProjectSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: {
    id: string;
    title: string;
    paragraphs: string[];
    image?: boolean | string;
    images?: string[];
    video?: string;
  }[];
  image?: boolean | string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail?: string;
  tocItems: { id: string; label: string; level?: 1 | 2 }[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "chaincore",
    title: "ChainCore",
    description: "Core Banking Application for the African Companies",
    thumbnail: "/images/chaincore/case-hero.jpg",
    tocItems: [
      { id: "context", label: "Context" },
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
      { id: "research", label: "Research / Discovery" },
      { id: "features", label: "Features" },
      { id: "accounting", label: "Accounting", level: 1 },
      { id: "charts-of-accounts", label: "Charts of Accounts", level: 2 },
      { id: "income-expense", label: "Income & Expense", level: 2 },
      { id: "balance-sheet", label: "Balance Sheet", level: 2 },
      { id: "trail-balance", label: "Trail Balance", level: 2 },
      { id: "journal-entries", label: "Journal Entries", level: 2 },
      { id: "general-ledger", label: "General Ledger", level: 2 },
      { id: "provisional-report", label: "Provisional Report", level: 2 },
      { id: "clients", label: "Clients", level: 1 },
      { id: "view-client", label: "View Client", level: 2 },
      { id: "create-individual-client", label: "Create Individual Client", level: 2 },
      { id: "create-corporate-client", label: "Create Corporate Client", level: 2 },
      { id: "create-center", label: "Create Center", level: 2 },
      { id: "transactions", label: "Transactions", level: 1 },
      { id: "administration", label: "Administration", level: 1 },
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
            title: "Accounting",
            paragraphs: [
              "The accounting module was the backbone of ChainCore. It gave financial institutions a complete suite of tools to manage their books, from chart of accounts setup through to reporting and reconciliation.",
            ],
          },
          {
            id: "charts-of-accounts",
            title: "Charts of Accounts",
            paragraphs: [
              "The chart of accounts provided a structured framework for categorizing every financial transaction. We designed it to be flexible enough for different institution types while maintaining the consistency accountants needed.",
            ],
            video: "/videos/chain-of-account.mp4",
          },
          {
            id: "income-expense",
            title: "Income & Expense",
            paragraphs: [
              "Tracking income and expenses needed to be clear and immediate. We built views that gave accountants real-time visibility into the financial health of the organization.",
            ],
            video: "/videos/income-expense.mp4",
          },
          {
            id: "balance-sheet",
            title: "Balance Sheet",
            paragraphs: [
              "The balance sheet provided a snapshot of the institution's financial position at any given point, with assets, liabilities, and equity clearly laid out.",
            ],
            video: "/videos/balance-sheet.mp4",
          },
          {
            id: "trail-balance",
            title: "Trail Balance",
            paragraphs: [
              "The trial balance report ensured all debits and credits were in balance, serving as a critical checkpoint before generating financial statements.",
            ],
            video: "/videos/trail-balance.mp4",
          },
          {
            id: "journal-entries",
            title: "Journal Entries",
            paragraphs: [
              "Journal entries allowed accountants to record transactions directly into the ledger with full control over accounts, amounts, and descriptions.",
            ],
            image: true,
          },
          {
            id: "general-ledger",
            title: "General Ledger",
            paragraphs: [
              "The general ledger served as the central record of all financial transactions, giving accountants a complete and auditable trail of every movement.",
            ],
            image: true,
          },
          {
            id: "provisional-report",
            title: "Provisional Report",
            paragraphs: [
              "Provisional reports gave institutions the ability to generate draft financial statements for review before final submission.",
            ],
            image: true,
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
    description: "Coordination Infrastructure for Close Friend Groups",
    thumbnail: "/images/knit/case-hero.jpg",
    tocItems: [
      { id: "context", label: "Context" },
      { id: "problem", label: "Problem" },
      { id: "our-bet", label: "Our Bet" },
      { id: "who-is-knit-for", label: "Who is Knit For?" },
      { id: "features", label: "Features" },
      { id: "onboarding", label: "Onboarding", level: 1 },
      { id: "create-event", label: "Create Event", level: 1 },
      { id: "event-details", label: "Event Details", level: 1 },
      { id: "event-kit", label: "Event Kit", level: 1 },
      { id: "smart-suggestion", label: "Smart Suggestion", level: 1 },
      { id: "knit-place", label: "Knit Place", level: 1 },
    ],
    sections: [
      {
        id: "context",
        title: "Context",
        paragraphs: [
          "Knit is a consumer app for small, intimate groups of friends to coordinate, meet consistently and grow closer over time. It is not a social network or a stranger-matching platform and it also does not want to replace \"the group chat\". It is infrastructure for friendships that already exist.",
        ],
      },
      {
        id: "problem",
        title: "Problem",
        paragraphs: [
          "Most friendships don’t end dramatically, they fade slowly without anyone deciding it should happen. It’s quite unfortunate that the plans stop materialising and distance begins to grow between the friends in the group.",
          "We don’t think this happens because people stop caring, but usually caring is not enough. Life gets in the way for different people or everyone in the group and more importantly, someone has to do the work. Someone has to chase people’s availability especially if the date is not fixed, find a date and pick somewhere to go that everyone would like.",
          "We also noticed that the bigger the friend group, the more likely the planning is going to land on the same person each time and over time, they will get tired.",
          "We believe this is a solvable problem, not necessarily with a synced calendar integration or asking friends to meet strangers every Friday over dinner but with tools built specifically for small, close friend groups in mind that actually work.",
        ],
      },
      {
        id: "our-bet",
        title: "Our Bet",
        paragraphs: [
          "Most products in the community consumer space are solving loneliness or trying to curb it by manufacturing novelty. Dating apps have been doing this forever but now it’s spreading to a wider market. Think Timeleft and InnerCircle. They’re asking you to create new experiences because you can be someone new with someone new.",
          "Knit is making the opposite bet: the friendships you already have are also worth investing in. Those who know your lore, who show up to the functions, they know and show up when things are hard, those you actually want to see more of — those relationships deserve the same level of attention that other parts of your life has.",
          "We’re building for existing friendships, that’s our differentiator.",
        ],
      },
      {
        id: "who-is-knit-for",
        title: "Who is Knit For?",
        paragraphs: [
          "In most friend groups, one person carries the burden of planning. They find and organize events, chase RSVPs, check the options out and make the required bookings. That weight compounds over time and across multiple friend groups and can be quite frustrating.",
          "Knit is designed to meet that person first, it’s designed around them to make that weight feel significantly lighter. The goal is never to make them carry more, but to slowly distribute the load across the entire group so everyone feels equipped to make plans moving forward. We aim to build tools around this conundrum until showing up feels easy for everyone.",
          "A group of people makes up a Knit. Everyone matters inside the Knit and their availability, interests and presence shapes what the group does each time.",
        ],
      },
      {
        id: "features",
        title: "Features",
        paragraphs: [],
        subsections: [
          {
            id: "onboarding",
            title: "Onboarding",
            paragraphs: [
              "The onboarding experience is designed to feel personal from the very first step. Rather than dumping users into an empty dashboard, Knit walks them through a guided setup that captures who they are and what they enjoy doing with friends.",
            ],
            images: [
              "/images/knit/onboarding/signup.jpg",
              "/images/knit/onboarding/verify.jpg",
              "/images/knit/onboarding/interests-food.jpg",
              "/images/knit/onboarding/interests-sports.jpg",
              "/images/knit/onboarding/interests-chill.jpg",
            ],
            captions: [
              "Enter your email to create your account",
              "Verify your email with the code sent to you",
              "Share your interests and hobbies",
              "Select more categories of things you love doing",
              "Invite friends to join your first Knit",
            ],
          },
          {
            id: "create-event",
            title: "Create Event",
            paragraphs: [
              "Creating an event on Knit is designed to feel effortless. The web experience walks organizers through every detail — from picking an event type and uploading a cover image to setting the date, writing a description, and choosing a location — all within a clean, focused interface.",
            ],
            images: [
              "/images/knit/create-event/1.jpg",
              "/images/knit/create-event/2.jpg",
              "/images/knit/create-event/3.jpg",
              "/images/knit/create-event/4.jpg",
              "/images/knit/create-event/5.jpg",
              "/images/knit/create-event/6.jpg",
              "/images/knit/create-event/7.jpg",
            ],
            captions: [
              "Browse and manage your Knits from the sidebar",
              "Pick an event type to get started",
              "Give your event a title and description",
              "Add a cover image that represents your event",
              "Set the date and time for your event",
              "Pin the location on a map",
              "Review all details before publishing",
            ],
          },
          {
            id: "event-details",
            title: "Event Details",
            paragraphs: [
              "Once an event is live, the details page becomes the central hub. Organizers and guests can see everything at a glance — the event image, location, guest count, RSVP status, host info, event kit assignments, and a blast feed for real-time updates and conversation.",
            ],
            images: [
              "/images/knit/event-details/1.jpg",
              "/images/knit/event-details/2.jpg",
              "/images/knit/event-details/3.jpg",
              "/images/knit/event-details/4.jpg",
              "/images/knit/event-details/5.jpg",
            ],
            captions: [
              "View event info and guest list at a glance",
              "See RSVP status and event kit assignments",
              "Check the event timeline and updates",
              "Browse and manage all attending guests",
              "Follow the blast feed for real-time conversation",
            ],
          },
          {
            id: "event-kit",
            title: "Event Kit",
            paragraphs: [
              "The Event Kit lets organizers break down what's needed for an event and assign items to specific guests. From snacks and drinks to tents and gear, the kit distributes the load so one person isn't stuck handling everything alone.",
            ],
            images: [
              "/images/knit/event-kit/1.jpg",
              "/images/knit/event-kit/2.jpg",
              "/images/knit/event-kit/3.jpg",
              "/images/knit/event-kit/4.jpg",
              "/images/knit/event-kit/5.jpg",
            ],
            captions: [
              "Create tasks and break down what's needed",
              "View all items organized by category",
              "Assign tasks to specific guests",
              "See who's responsible for each item",
              "Track progress as items get checked off",
            ],
          },
          {
            id: "smart-suggestion",
            title: "Smart Suggestion",
            paragraphs: [
              "Smart Suggestion uses machine learning to recommend events that match each user's interests, schedule, and location. By analyzing past behavior and preferences, it surfaces events the user is likely to enjoy, making event discovery effortless and serendipitous.",
            ],
            images: [
              "/images/knit/smart-suggestion/1.jpg",
              "/images/knit/smart-suggestion/2.jpg",
              "/images/knit/smart-suggestion/3.jpg",
              "/images/knit/smart-suggestion/4.jpg",
              "/images/knit/smart-suggestion/5.jpg",
              "/images/knit/smart-suggestion/6.jpg",
              "/images/knit/smart-suggestion/7.jpg",
              "/images/knit/smart-suggestion/8.jpg",
              "/images/knit/smart-suggestion/9.jpg",
            ],
            captions: [
              "Pick a vibe to discover what to do with your group",
              "Narrow it down by choosing a cuisine or activity type",
              "Browse location-based suggestions tailored to your preference",
              "Tap a suggestion to see details and create an event",
              "Event is published to your Knit instantly",
              "View the full conversation history of past suggestions",
              "Access all attachments shared across your suggestions",
              "Browse shared documents from within the suggestion thread",
              "See all images shared in the suggestion conversation",
            ],
          },
          {
            id: "knit-place",
            title: "Knit Place",
            paragraphs: [
              "Knit Place is where groups discover and manage their go-to spots. From saved locations and routes to place-specific details, it gives the group a shared spatial memory — so finding where to go next time is never a debate.",
            ],
            images: [
              "/images/knit/knit-place/1.jpg",
              "/images/knit/knit-place/2.jpg",
              "/images/knit/knit-place/3.jpg",
              "/images/knit/knit-place/4.jpg",
            ],
            captions: [
              "View all saved places sorted by when you plan to visit",
              "Add a new place with a name, location, and visit timeline",
              "Search and pin the exact location from the map",
              "See place history, past events, and add it to the group list",
            ],
          },
        ],
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
    slug: "reeple",
    title: "Reeple",
    description: "Remittances & Payments for Nigerians and African Freelancers",
    thumbnail: "/images/reeple/hero.png",
    tocItems: [
      { id: "introduction", label: "Introduction" },
      { id: "freelancers", label: "The Hidden Struggle" },
      { id: "ux-challenge", label: "The UX Challenge" },
      { id: "send-money", label: "Send Money", level: 2 },
      { id: "receive-payments", label: "Receive Payments", level: 2 },
      { id: "trust-security", label: "Trust & Security", level: 2 },
      { id: "business-outcome", label: "Business Outcome" },
    ],
    sections: [
      {
        id: "introduction",
        title: "Introduction - More Than Just a Money Transfer",
        paragraphs: [
          "For millions of Nigerians abroad, sending money home is not just a financial necessity—it’s a connection to family, culture, and responsibility. Remittances help pay for essentials like school fees, healthcare, and household expenses.",
          "In 2022 alone, Nigeria received over $20 billion in remittances, yet the process remains expensive, slow, and often unclear, leaving users frustrated. Many existing platforms lack transparency, charge high fees, and delay transactions, creating uncertainty for both senders and recipients.",
        ],
      },
      {
        id: "freelancers",
        title: "The Hidden Struggle of African Freelancers",
        paragraphs: [
          "While the global gig economy has opened doors for African freelancers, getting paid remains a major challenge. Many payment platforms, like PayPal, restrict services in Nigeria, forcing freelancers to rely on costly, inefficient alternatives.",
          "Unfavorable exchange rates eat into their earnings, while long processing times disrupt cash flow. Worse still, international banks often flag transactions from Nigeria as high-risk, leading to unexpected payment holds. As a result, many freelancers resort to informal and risky methods to receive their hard-earned money.",
        ],
      },
      {
        id: "ux-challenge",
        title: "The UX Challenge",
        paragraphs: [
          "How might we design a platform that addresses these core problems?",
        ],
        subsections: [
          {
            id: "send-money",
            title: "1. Allows Nigerians abroad to send money home easily, affordably, and transparently?",
            paragraphs: [
              "Nigerians abroad rely on remittances to support loved ones, but high fees, slow transfers, and unclear exchange rates make the process frustrating. The goal was to design a fast, transparent, and affordable solution.",
            ],
            image: "/images/reeple/mobile-send-money.png",
          },
          {
            id: "receive-payments",
            title: "2. Provides African freelancers with a seamless way to receive their earnings in USD or NGN at competitive exchange rates?",
            paragraphs: [
              "Freelancers struggle to receive international payments due to platform restrictions, high fees, and poor exchange rates. The challenge was to provide a simple, cost-effective way to get paid in USD, GBP, CAD without delays.",
            ],
            image: "/images/reeple/mobile-wallet.png",
          },
          {
            id: "trust-security",
            title: "3. Build trust, security, and reliability into the remittance and payment experience?",
            paragraphs: [
              "Many users fear fraud, failed transactions, and poor support. The platform needed strong security, real-time updates, and reliable customer service to ensure confidence in every transaction.",
            ],
            image: "/images/reeple/mobile-onboarding.png",
          },
        ],
      },
      {
        id: "business-outcome",
        title: "Business Outcome",
        paragraphs: [],
        bullets: [
          "Secured $290,000 in Techstars Funding – Validating Reeple’s innovative approach to remittances and freelancer payments, attracting key investors.",
          "5,000+ Active Users Across iOS & Android – Rapid adoption by users who trust Reeple for seamless money transfers and payments.",
          "$1M+ in Transaction Volume – Empowering African freelancers with better payment solutions and enabling Nigerians abroad to send money home efficiently.",
        ],
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
    slug: "timein-plus",
    title: "Timein Plus",
    description: "All in one Human Resource Management Platform.",
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
    slug: "turbo",
    title: "Turbo",
    description: "The Fastest Way to receive money and pay for bills",
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
    slug: "footballbooth",
    title: "FootballBooth",
    description: "Fostering Community and Connection via Football.",
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
    slug: "wiremoney",
    title: "Wiremoney",
    description: "Expanding Wiremoney into over 13 New International Markets and Territories",
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
