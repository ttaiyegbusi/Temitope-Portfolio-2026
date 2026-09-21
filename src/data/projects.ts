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
    captions?: string[];
    video?: string;
  }[];
  image?: boolean | string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail?: string;
  website?: string;
  tags?: string[];
  tocItems: { id: string; label: string; level?: 1 | 2 }[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "chaincore",
    title: "ChainCore",
    description: "Building Africa's first native core banking platform for 50+ financial institutions across Nigeria and the continent",
    tags: ["SAAS", "Fintech"],
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
      { id: "create-manual-journal", label: "Create Manual Journal", level: 2 },
      { id: "provisional-report", label: "Provisional Report", level: 2 },
      { id: "clients", label: "Clients", level: 1 },
      { id: "view-client", label: "View Client", level: 2 },
      { id: "create-individual-client", label: "Create Individual Client", level: 2 },
      { id: "create-corporate-client", label: "Create Corporate Client", level: 2 },
      { id: "create-center", label: "Create Center", level: 2 },
      { id: "transactions", label: "Transactions", level: 1 },
      { id: "administration", label: "Administration", level: 1 },
      { id: "users", label: "Users", level: 2 },
      { id: "user-group", label: "User Group", level: 2 },
      { id: "create-user-group", label: "Create User Group", level: 2 },
      { id: "password-policy", label: "Password Policy", level: 2 },
      { id: "user-login-report", label: "User Login Report", level: 2 },
      { id: "products", label: "Products", level: 2 },
      { id: "create-loan-products", label: "Create Loan Products", level: 2 },
      { id: "interest-conversion", label: "Interest Conversion", level: 2 },
      { id: "org-structure", label: "Org Structure", level: 2 },
      { id: "general-settings", label: "General Settings", level: 2 },
      { id: "payment-method", label: "Payment Method", level: 2 },
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
            images: [
              "/images/chaincore/journal-entries/1.jpg",
              "/images/chaincore/journal-entries/2.jpg",
              "/images/chaincore/journal-entries/3.jpg",
            ],
            captions: [
              "Empty state when no journal entry has been recorded yet",
              "Browse all journal entries with amount, category, and status",
              "Expand a row to see the full debit and credit breakdown",
            ],
          },
          {
            id: "general-ledger",
            title: "General Ledger",
            paragraphs: [
              "The general ledger served as the central record of all financial transactions, giving accountants a complete and auditable trail of every movement.",
            ],
            images: [
              "/images/chaincore/general-ledger/1.jpg",
              "/images/chaincore/general-ledger/2.jpg",
              "/images/chaincore/general-ledger/3.jpg",
            ],
            captions: [
              "Empty state prompting you to filter for a ledger report",
              "Expand an entry to see its running balance and notes",
              "The general ledger with debit, credit, and balance per entry",
            ],
          },
          {
            id: "create-manual-journal",
            title: "Create Manual Journal",
            paragraphs: [
              "Manual journal entries let accountants record transactions directly, with full control over the accounts, amounts, and descriptions on each line.",
            ],
            images: [
              "/images/chaincore/create-manual-journal/1.jpg",
              "/images/chaincore/create-manual-journal/2.jpg",
              "/images/chaincore/create-manual-journal/3.jpg",
            ],
            captions: [
              "Start from Journal Entries and tap Manual Journal",
              "Add debit and credit lines, set the level transfer and date",
              "New manual journal created and posted to the ledger",
            ],
          },
          {
            id: "provisional-report",
            title: "Provisional Report",
            paragraphs: [
              "Provisional reports gave institutions the ability to generate draft financial statements for review before final submission.",
            ],
            images: [
              "/images/chaincore/provisional-report/1.jpg",
              "/images/chaincore/provisional-report/2.jpg",
            ],
            captions: [
              "Empty state prompting you to filter for a provisional report",
              "Provisioning by mark type, days in arrears, and percentage",
            ],
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
              "Transactions give a full view of money moving across the platform. Track value and volume at a glance, filter by status, and drill into any single transaction.",
            ],
            images: [
              "/images/chaincore/transactions/1.jpg",
              "/images/chaincore/transactions/2.jpg",
              "/images/chaincore/transactions/3.jpg",
            ],
            captions: [
              "Empty state with the overview cards and a prompt to start",
              "All transactions with status, amount, and quick stats up top",
              "Filter transactions by type, method, date, user, and more",
            ],
          },
          {
            id: "administration",
            title: "Administration",
            paragraphs: [
              "The administration area is where access is governed. Manage users and their groups, define granular permissions, set the password policy, and audit every login.",
            ],
          },
          {
            id: "users",
            title: "Users",
            paragraphs: [
              "The users module is where administrators manage everyone with access to the platform, from onboarding to termination.",
            ],
            images: [
              "/images/chaincore/users/1.jpg",
              "/images/chaincore/users/2.jpg",
              "/images/chaincore/users/3.jpg",
            ],
            captions: [
              "Empty state prompting you to add your first user",
              "Manage users with their group, level, and access status",
              "Filter users by level, status, and user group",
            ],
          },
          {
            id: "user-group",
            title: "User Group",
            paragraphs: [
              "User groups bundle permissions into reusable roles. Each group defines what its members can see and do across the platform.",
            ],
            images: [
              "/images/chaincore/user-group/1.jpg",
            ],
            captions: [
              "Browse all user groups with assigned users and status",
            ],
          },
          {
            id: "create-user-group",
            title: "Create User Group",
            paragraphs: [
              "Creating a user group is a guided flow across sixteen permission areas, letting admins define access down to the individual action.",
            ],
            images: [
              "/images/chaincore/create-user-group/1.jpg",
              "/images/chaincore/create-user-group/2.jpg",
              "/images/chaincore/create-user-group/3.jpg",
              "/images/chaincore/create-user-group/4.jpg",
              "/images/chaincore/create-user-group/5.jpg",
              "/images/chaincore/create-user-group/6.jpg",
              "/images/chaincore/create-user-group/7.jpg",
              "/images/chaincore/create-user-group/8.jpg",
            ],
            captions: [
              "Start from User Groups and tap Create New User Group",
              "Name the group and set its global module access",
              "Configure granular loan account permissions",
              "Set deposit account permissions and transfer limits",
              "Grant administration and organisation permissions",
              "Control person-level permissions and roles",
              "Configure API support and key generation",
              "New user group created successfully",
            ],
          },
          {
            id: "password-policy",
            title: "Password Policy",
            paragraphs: [
              "The password policy centralises account security, from strength requirements and expiry to lockouts and session timeouts.",
            ],
            images: [
              "/images/chaincore/password-policy/1.jpg",
            ],
            captions: [
              "Set password strength, expiry, lockout, and session rules",
            ],
          },
          {
            id: "user-login-report",
            title: "User Login Report",
            paragraphs: [
              "The user login report is a full audit trail of access, capturing every login, logout, and session with the user, time, and IP.",
            ],
            images: [
              "/images/chaincore/user-login-report/1.jpg",
              "/images/chaincore/user-login-report/2.jpg",
            ],
            captions: [
              "Every login and logout event with time, location, and IP",
              "Open a user to see their profile and full activity history",
            ],
          },
          {
            id: "products",
            title: "Products",
            paragraphs: [
              "The products module is where loan and deposit offerings are defined. Browse every product, review its details, and spin up new ones for the institution.",
            ],
            images: [
              "/images/chaincore/products/1.jpg",
              "/images/chaincore/products/2.jpg",
              "/images/chaincore/products/3.jpg",
            ],
            captions: [
              "Empty state prompting you to create your first loan product",
              "Switch between Administration modules from the menu",
              "Browse all loan products with their ID, creator, and date",
            ],
          },
          {
            id: "create-loan-products",
            title: "Create Loan Products",
            paragraphs: [
              "Creating a loan product is a guided, six-step flow covering everything from basic details to repayment, interest, penalties, and accounting.",
            ],
            images: [
              "/images/chaincore/create-loan-products/1.jpg",
              "/images/chaincore/create-loan-products/2.jpg",
              "/images/chaincore/create-loan-products/3.jpg",
              "/images/chaincore/create-loan-products/4.jpg",
              "/images/chaincore/create-loan-products/5.jpg",
              "/images/chaincore/create-loan-products/6.jpg",
            ],
            captions: [
              "Basic information: name, group, validity, and availability",
              "Repayment allocation and the number of instalments",
              "Loan amount, interest rates, grace period, and early payment",
              "Map accounting entries for interest, portfolio, and accruals",
              "Enable refinancing and the loan workflow",
              "New loan product created successfully",
            ],
          },
          {
            id: "interest-conversion",
            title: "Interest Conversion",
            paragraphs: [
              "Interest conversion settings define how rates translate across periods, keeping annual, monthly, weekly, and daily calculations consistent.",
            ],
            images: [
              "/images/chaincore/interest-conversion/1.jpg",
            ],
            captions: [
              "Set how annual, monthly, and weekly rates convert to daily",
            ],
          },
          {
            id: "org-structure",
            title: "Org Structure",
            paragraphs: [
              "The organisation structure module maps the institution's branches and centers, so operations can be grouped by location and clients moved between them.",
            ],
            images: [
              "/images/chaincore/org-structure/1.jpg",
            ],
            captions: [
              "Manage branches with their ID, short name, and status",
            ],
          },
          {
            id: "general-settings",
            title: "General Settings",
            paragraphs: [
              "General settings hold the institution-wide configuration, from organization details and operational days to currency, structure, and security.",
            ],
            images: [
              "/images/chaincore/general-settings/1.jpg",
              "/images/chaincore/general-settings/2.jpg",
            ],
            captions: [
              "Set organization details across the settings tabs",
              "Define working days, operational days, and holidays",
            ],
          },
          {
            id: "payment-method",
            title: "Payment Method",
            paragraphs: [
              "Payment methods control how money can move for each transaction type, toggling disbursement, repayment, recovery, deposit, and withdrawal per method.",
            ],
            images: [
              "/images/chaincore/payment-method/1.jpg",
              "/images/chaincore/payment-method/2.jpg",
            ],
            captions: [
              "Empty state prompting you to add a payment method",
              "Enable each method per transaction type in a matrix",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "knit",
    title: "Knit",
    description: "Designing a social coordination app that helps friend groups plan, vote and show up to real-life events",
    website: "https://www.ourknit.com/welcome",
    tags: ["AI", "Social Networking"],
    thumbnail: "/images/knit/case-hero.jpg",
    tocItems: [
      { id: "context", label: "Context" },
      { id: "problem", label: "Problem" },
      { id: "our-bet", label: "Our Bet" },
      { id: "who-is-knit-for", label: "Who is Knit For?" },
      { id: "features", label: "Features (Web)" },
      { id: "onboarding", label: "Onboarding", level: 1 },
      { id: "create-event", label: "Create Event", level: 1 },
      { id: "event-details", label: "Event Details", level: 1 },
      { id: "event-kit", label: "Event Kit", level: 1 },
      { id: "smart-suggestion", label: "Smart Suggestion", level: 1 },
      { id: "knit-place", label: "Knit Place", level: 1 },
      { id: "knit-settings", label: "Knit Settings", level: 1 },
      { id: "features-mobile", label: "Features (Mobile App)" },
      { id: "mobile-home", label: "Home", level: 1 },
      { id: "mobile-create-knit", label: "Create Knit", level: 1 },
      { id: "mobile-join-link", label: "Join Knit (Link)", level: 1 },
      { id: "mobile-join-qr", label: "Join Knit (QR)", level: 1 },
      { id: "mobile-create-events", label: "Create Events", level: 1 },
      { id: "mobile-events", label: "Events", level: 1 },
      { id: "mobile-event-details", label: "Event Details", level: 1 },
      { id: "mobile-event-kit", label: "Event Kit", level: 1 },
      { id: "mobile-place", label: "Place", level: 1 },
      { id: "mobile-add-place", label: "Add a Place", level: 1 },
      { id: "mobile-smart-suggestion", label: "Smart Suggestion", level: 1 },
      { id: "mobile-profile", label: "Profile", level: 1 },
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
          "Knit is making the opposite bet: the friendships you already have are also worth investing in. Those who know your lore, who show up to the functions, they know and show up when things are hard, those you actually want to see more of, those relationships deserve the same level of attention that other parts of your life has.",
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
        title: "Features (Web)",
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
              "Creating an event on Knit is designed to feel effortless. The web experience walks organizers through every detail, from picking an event type and uploading a cover image to setting the date, writing a description, and choosing a location, all within a clean, focused interface.",
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
              "Once an event is live, the details page becomes the central hub. Organizers and guests can see everything at a glance: the event image, location, guest count, RSVP status, host info, event kit assignments, and a blast feed for real-time updates and conversation.",
            ],
            images: [
              "/images/knit/event-details/1.jpg",
              "/images/knit/event-details/2.jpg",
              "/images/knit/event-details/3.jpg",
              "/images/knit/event-details/4.jpg",
              "/images/knit/event-details/5.jpg",
              "/images/knit/event-details/6.jpg",
            ],
            captions: [
              "Full event overview with image, location, guests, kit, and blasts",
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
              "/images/knit/event-kit/6.jpg",
            ],
            captions: [
              "Open the Event Kit modal to add and assign items",
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
              "/images/knit/smart-suggestion/10.jpg",
            ],
            captions: [
              "Choose between Personal or Group suggestions to get started",
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
              "Knit Place is where groups discover and manage their go-to spots. From saved locations and routes to place-specific details, it gives the group a shared spatial memory, so finding where to go next time is never a debate.",
            ],
            images: [
              "/images/knit/knit-place/1.jpg",
              "/images/knit/knit-place/2.jpg",
              "/images/knit/knit-place/3.jpg",
              "/images/knit/knit-place/4.jpg",
              "/images/knit/knit-place/5.jpg",
            ],
            captions: [
              "Personal places tab with empty state to start adding spots",
              "View all saved places sorted by when you plan to visit",
              "Add a new place with a name, location, and visit timeline",
              "Search and pin the exact location from the map",
              "See place history, past events, and add it to the group list",
            ],
          },
          {
            id: "knit-settings",
            title: "Knit Settings",
            paragraphs: [
              "Knit Settings gives users full control over their account and preferences. From personalizing their interest graph to managing security, notifications, and sound alerts, every setting is designed to keep the experience tailored and secure.",
            ],
            images: [
              "/images/knit/knit-settings/1.jpg",
              "/images/knit/knit-settings/2.jpg",
              "/images/knit/knit-settings/3.jpg",
              "/images/knit/knit-settings/4.jpg",
            ],
            captions: [
              "Edit your profile, cover image, name, and bio",
              "Customize your interest graph by selecting tags across categories",
              "Manage passwords, linked devices, and account security",
              "Configure notification preferences and sound alerts",
            ],
          },
        ],
      },
      {
        id: "features-mobile",
        title: "Features (Mobile App)",
        paragraphs: [],
        subsections: [
          {
            id: "mobile-home",
            title: "Home",
            paragraphs: [
              "The mobile home screen is the daily pulse of a Knit. It surfaces upcoming plans that need a response, nearby activities to spark ideas, and quick access to switch between the groups you belong to.",
            ],
            images: [
              "/images/knit/mobile/home-page/1.jpg",
              "/images/knit/mobile/home-page/2.jpg",
              "/images/knit/mobile/home-page/3.jpg",
              "/images/knit/mobile/home-page/4.jpg",
              "/images/knit/mobile/home-page/5.jpg",
            ],
            captions: [
              "Empty state prompting you to create your first plan",
              "Upcoming plans with quick RSVP right from home",
              "Track who's going across all your upcoming plans",
              "Switch between all the Knits you belong to",
              "Share your Knit with a scannable QR code and link",
            ],
          },
          {
            id: "mobile-create-knit",
            title: "Create Knit",
            paragraphs: [
              "Starting a Knit on mobile is playful and quick. Name your group, pick an icon and color, set the size, and add an optional security question to keep it private.",
            ],
            images: [
              "/images/knit/mobile/create-knit/1.jpg",
              "/images/knit/mobile/create-knit/2.jpg",
              "/images/knit/mobile/create-knit/3.jpg",
              "/images/knit/mobile/create-knit/4.jpg",
              "/images/knit/mobile/create-knit/5.jpg",
              "/images/knit/mobile/create-knit/6.jpg",
              "/images/knit/mobile/create-knit/7.jpg",
              "/images/knit/mobile/create-knit/8.jpg",
            ],
            captions: [
              "Start from My Knits and tap Create Knit",
              "Name your Knit or spin one at random",
              "Pick an icon that represents your group",
              "Choose a color theme for your Knit",
              "See the theme applied instantly",
              "Type in your final name and continue",
              "Set the group size and an optional security question",
              "Fill the details and create your Knit",
            ],
          },
          {
            id: "mobile-join-link",
            title: "Join Knit (Link)",
            paragraphs: [
              "Joining by link is frictionless. Paste an invite link, preview the group and its plans, and hop in with a single tap.",
            ],
            images: [
              "/images/knit/mobile/join-link/1.jpg",
              "/images/knit/mobile/join-link/2.jpg",
              "/images/knit/mobile/join-link/3.jpg",
              "/images/knit/mobile/join-link/4.jpg",
            ],
            captions: [
              "Paste a link and Knit searches for the group",
              "The matching Knit is found and confirmed",
              "Preview the members and upcoming events",
              "You've successfully joined the Knit",
            ],
          },
          {
            id: "mobile-join-qr",
            title: "Join Knit (QR)",
            paragraphs: [
              "Prefer to join in person? Scan a friend's QR code to find the Knit instantly and confirm your spot.",
            ],
            images: [
              "/images/knit/mobile/join-qr/1.jpg",
              "/images/knit/mobile/join-qr/2.jpg",
              "/images/knit/mobile/join-qr/3.jpg",
            ],
            captions: [
              "Open Join Knit and choose to scan a QR code",
              "Point at the code to search, then the Knit is found",
              "Preview the group and tap Join knit",
            ],
          },
          {
            id: "mobile-create-events",
            title: "Create Events",
            paragraphs: [
              "Planning an event on the go is effortless. Add a title and cover, write a rich description, set the date and time, pin a location, and publish it to your Knit.",
            ],
            images: [
              "/images/knit/mobile/create-events/1.jpg",
              "/images/knit/mobile/create-events/2.jpg",
              "/images/knit/mobile/create-events/3.jpg",
              "/images/knit/mobile/create-events/4.jpg",
              "/images/knit/mobile/create-events/5.jpg",
              "/images/knit/mobile/create-events/6.jpg",
              "/images/knit/mobile/create-events/7.jpg",
              "/images/knit/mobile/create-events/8.jpg",
              "/images/knit/mobile/create-events/9.jpg",
            ],
            captions: [
              "Empty events tab with a prompt to create one",
              "Add a title, cover, description, date, and location",
              "Write a rich description with formatting options",
              "Set the start date, month, and time",
              "Spin the wheel to pick the exact date",
              "Search and pin the event location",
              "Choose a cover from ready-made invite templates",
              "Review the full event before publishing",
              "Event created and live in your upcoming list",
            ],
          },
          {
            id: "mobile-events",
            title: "Events",
            paragraphs: [
              "The events tab keeps every plan in one place. Browse upcoming and past events, see RSVP status at a glance, and respond without leaving the list.",
            ],
            images: [
              "/images/knit/mobile/events/1.jpg",
              "/images/knit/mobile/events/2.jpg",
              "/images/knit/mobile/events/3.jpg",
            ],
            captions: [
              "Empty state inviting you to plan something",
              "Respond to pending invites right from the list",
              "See the events you've confirmed you're going to",
            ],
          },
          {
            id: "mobile-event-details",
            title: "Event Details",
            paragraphs: [
              "The event detail page is the hub for a single plan. See the cover, description, location, and time, browse guests and their RSVP status, and manage the event kit, all across a few tabs.",
            ],
            images: [
              "/images/knit/mobile/event-details/1.jpg",
              "/images/knit/mobile/event-details/2.jpg",
              "/images/knit/mobile/event-details/3.jpg",
              "/images/knit/mobile/event-details/4.jpg",
              "/images/knit/mobile/event-details/5.jpg",
            ],
            captions: [
              "Tap View details on an event to open it",
              "See the description, location, date, and time",
              "Edit, duplicate, or cancel the event",
              "Browse the guest list and their RSVP status",
              "Manage the event kit from its own tab",
            ],
          },
          {
            id: "mobile-event-kit",
            title: "Event Kit",
            paragraphs: [
              "The mobile event kit distributes the load. Add the items an event needs, assign them to specific guests or everyone, and track who's bringing what.",
            ],
            images: [
              "/images/knit/mobile/event-kit/1.jpg",
              "/images/knit/mobile/event-kit/2.jpg",
              "/images/knit/mobile/event-kit/3.jpg",
              "/images/knit/mobile/event-kit/4.jpg",
              "/images/knit/mobile/event-kit/5.jpg",
            ],
            captions: [
              "Empty kit prompting you to add items",
              "Add an item the event needs",
              "Assign the item to specific guests or everyone",
              "See all items with who's responsible for each",
              "Edit, reassign, or remove any kit item",
            ],
          },
          {
            id: "mobile-place",
            title: "Place",
            paragraphs: [
              "Places is a shared list of the spots a group wants to check out. Save personal or group places, keep track of what you've already visited, and turn any saved place into a plan.",
            ],
            images: [
              "/images/knit/mobile/place/1.jpg",
              "/images/knit/mobile/place/2.jpg",
              "/images/knit/mobile/place/3.jpg",
              "/images/knit/mobile/place/4.jpg",
            ],
            captions: [
              "Empty personal list prompting you to add your first place",
              "Browse all personal and group places with visited status",
              "Open a place to see its map, location, and activity history",
              "Add it to a list, view the map, or delete it",
            ],
          },
          {
            id: "mobile-add-place",
            title: "Add a Place",
            paragraphs: [
              "Adding a place is quick. Name the spot, drop or search its location, set how soon you'd like to go, and save it to your personal or group list.",
            ],
            images: [
              "/images/knit/mobile/add-place/1.jpg",
              "/images/knit/mobile/add-place/2.jpg",
              "/images/knit/mobile/add-place/3.jpg",
              "/images/knit/mobile/add-place/4.jpg",
              "/images/knit/mobile/add-place/5.jpg",
            ],
            captions: [
              "From the Places tab, tap + to add a new place",
              "Name the place, set a vibe timeline, and choose where to save it",
              "Search for a location or use your current one",
              "Drag the pin to the exact spot, then select it",
              "Place added, with the option to copy it to the group list",
            ],
          },
          {
            id: "mobile-smart-suggestion",
            title: "Smart Suggestion",
            paragraphs: [
              "Smart Suggestion is Knit's built-in assistant for deciding what to do. Tell it the vibe, answer a couple of quick questions, and it recommends places and activities near you, tailored to the group.",
            ],
            images: [
              "/images/knit/mobile/smart-suggestion/1.jpg",
              "/images/knit/mobile/smart-suggestion/2.jpg",
              "/images/knit/mobile/smart-suggestion/3.jpg",
              "/images/knit/mobile/smart-suggestion/4.jpg",
              "/images/knit/mobile/smart-suggestion/5.jpg",
              "/images/knit/mobile/smart-suggestion/6.jpg",
              "/images/knit/mobile/smart-suggestion/7.jpg",
              "/images/knit/mobile/smart-suggestion/8.jpg",
              "/images/knit/mobile/smart-suggestion/9.jpg",
              "/images/knit/mobile/smart-suggestion/10.jpg",
            ],
            captions: [
              "Start from a vibe or browse activities happening near you",
              "Scroll real activities and events around your location",
              "Pick a vibe, then narrow it down by cuisine",
              "Chat naturally about group size, budget, and atmosphere",
              "Get tailored suggestions matched to your preferences",
              "Open a suggestion to see photos, notes, and turn it into an event",
              "Attach a PDF or image and let Knit find the place for you",
              "Revisit past recommendations from your suggestion history",
              "Browse all the documents, links, and images shared in the chat",
              "Share a suggestion thread with the rest of your Knit",
            ],
          },
          {
            id: "mobile-profile",
            title: "Profile",
            paragraphs: [
              "The profile hub is home base for your account. See your Knit stats at a glance and manage your details, interests, notifications, and app preferences.",
            ],
            images: [
              "/images/knit/mobile/profile/1.jpg",
              "/images/knit/mobile/profile/2.jpg",
              "/images/knit/mobile/profile/3.jpg",
              "/images/knit/mobile/profile/4.jpg",
              "/images/knit/mobile/profile/5.jpg",
              "/images/knit/mobile/profile/6.jpg",
            ],
            captions: [
              "Your profile with Knits, events, and places stats plus settings",
              "Edit your name, email, photo, and bio",
              "Choose the interest categories that shape your suggestions",
              "Drill into a category and pick the specifics you love",
              "Fine-tune notifications and which sounds play",
              "Set your time format and display language",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "yaraa",
    title: "Yaraa",
    description: "Rethinking enterprise procurement and resource planning for mid-market companies across multiple industries",
    tags: ["AI", "SAAS", "ERP System"],
    thumbnail: "/images/yaraa/home-web.jpg",
    tocItems: [
      { id: "context", label: "Context" },
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
      { id: "features", label: "Features" },
      { id: "onboarding", label: "Onboarding", level: 1 },
      { id: "muna-ai", label: "Muna AI", level: 1 },
      { id: "invoice", label: "Invoice", level: 1 },
      { id: "contract", label: "Contract", level: 1 },
      { id: "create-contract", label: "Create Contract", level: 2 },
      { id: "move-contract-clause", label: "Move Contract Clause", level: 2 },
      { id: "contract-details", label: "Contract Details", level: 2 },
      { id: "accounting", label: "Accounting", level: 1 },
      { id: "accounting-dashboard", label: "Dashboard", level: 2 },
      { id: "create-general-ledger", label: "Create General Ledger", level: 2 },
      { id: "financial-statement", label: "Financial Statement", level: 2 },
    ],
    sections: [
      {
        id: "context",
        title: "Context",
        paragraphs: [
          "Yaraa is a business operations platform built for mid-market companies, the kind of organizations that have outgrown spreadsheets and scattered tools but are not large enough to justify a sprawling enterprise ERP. These companies run real procurement, sign real contracts, raise real invoices, and keep real books, often across several industries and multiple branches at once.",
          "The goal with Yaraa was to bring those functions, contracts, invoicing and financing, and accounting, into a single, connected system, and to make it feel approachable rather than intimidating.",
        ],
      },
      {
        id: "problem",
        title: "Problem",
        paragraphs: [
          "For most mid-market teams, the work that keeps a business running is spread across disconnected tools. Contracts live in email threads and word processors, invoices sit in one system, and the accounting happens somewhere else entirely. Nothing talks to each other.",
          "That fragmentation is expensive. Drafting a contract from scratch is slow and error-prone. Getting paid on time is a constant struggle, cash is often locked up in unpaid invoices. And keeping the books accurate means re-entering the same numbers over and over, with every manual step introducing another chance to get it wrong.",
        ],
      },
      {
        id: "solution",
        title: "Solution",
        paragraphs: [
          "Yaraa brings the whole flow into one place. Teams can draft contracts with the help of an AI assistant, manage the full contract lifecycle from clause to signature, raise invoices and unlock cash against them, and run a complete accounting suite, all from the same platform.",
          "The design language stays deliberately calm and consistent across every module, so a finance lead moving from the contract editor to the general ledger never feels like they have switched products. Complex, spreadsheet-heavy tasks like posting a balanced journal or reading a financial statement were rebuilt to be legible and guided, without stripping out the rigor accountants rely on.",
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
              "Getting set up on Yaraa is a guided, step-by-step process. A persistent checklist on the left keeps the company oriented as they move from activating their account through to a fully configured workspace, so setup never feels open-ended.",
            ],
            images: [
              "/images/yaraa/onboarding/1.jpg",
              "/images/yaraa/onboarding/2.jpg",
              "/images/yaraa/onboarding/3.jpg",
              "/images/yaraa/onboarding/4.jpg",
              "/images/yaraa/onboarding/5.jpg",
              "/images/yaraa/onboarding/6.jpg",
            ],
            captions: [
              "A warm welcome confirms the account is active and sets expectations for the setup ahead.",
              "The software licence agreement is presented clearly, with a single checkbox to accept and continue.",
              "Company data, industry, currency, branches and time zone, is captured up front so the workspace is tailored from day one.",
              "Brand assets like logos and watermarks can be uploaded to personalise documents generated on the platform.",
              "Uploads show live progress, so the user always knows where things stand.",
              "A friendly confirmation marks setup as complete and hands the user off to their dashboard.",
            ],
          },
          {
            id: "muna-ai",
            title: "Muna AI",
            paragraphs: [
              "Muna AI is Yaraa's built-in assistant for drafting contracts in plain language. Instead of starting from a blank page, users describe what they need and Muna asks the right questions, pulls from relevant sources, and produces a structured draft ready to refine in the contract editor.",
            ],
            images: [
              "/images/yaraa/muna-ai/1.jpg",
              "/images/yaraa/muna-ai/2.jpg",
              "/images/yaraa/muna-ai/3.jpg",
              "/images/yaraa/muna-ai/4.jpg",
              "/images/yaraa/muna-ai/5.jpg",
              "/images/yaraa/muna-ai/6.jpg",
              "/images/yaraa/muna-ai/7.jpg",
              "/images/yaraa/muna-ai/8.jpg",
              "/images/yaraa/muna-ai/9.jpg",
              "/images/yaraa/muna-ai/10.jpg",
              "/images/yaraa/muna-ai/11.jpg",
            ],
            captions: [
              "Muna greets the user and offers suggested prompts like Create Employment Contract or Create Invoice to get started.",
              "A clean prompt field invites the user to describe what they need in their own words.",
              "Reference documents and images can be attached to give Muna the context it needs.",
              "Muna asks focused follow-up questions, purpose, parties, key terms and length, to understand the contract.",
              "Any message can be revised inline; hovering reveals a quick edit control.",
              "The user refines their request and saves the change without starting the conversation over.",
              "Alongside its answers, Muna surfaces relevant external resources and guides.",
              "A focused exchange: the user asks for an employment contract and Muna returns a tailored draft.",
              "The generated contract opens in a side panel, fully editable and ready to move into the contract editor.",
              "The draft is laid out with proper clauses, appointment, term, territory, structured and legible.",
              "Once ready, the finished draft collapses into a card in the chat, expandable or customisable in one click.",
            ],
          },
          {
            id: "invoice",
            title: "Invoice",
            paragraphs: [
              "The invoicing module does more than track what is owed, it lets businesses unlock cash against unpaid invoices. Every invoice carries a clear status, and eligible ones can be turned into an instant cash advance without leaving the page.",
            ],
            images: [
              "/images/yaraa/invoice/1.jpg",
              "/images/yaraa/invoice/2.jpg",
              "/images/yaraa/invoice/3.jpg",
              "/images/yaraa/invoice/4.jpg",
              "/images/yaraa/invoice/5.jpg",
              "/images/yaraa/invoice/6.jpg",
              "/images/yaraa/invoice/7.jpg",
            ],
            captions: [
              "The invoice list gives an at-a-glance summary, totals, eligibility and per-invoice status from eligible to disbursed.",
              "A full invoice view lays out line items, payment terms and supplier details on one clean page.",
              "Invoice details can be edited in a focused side panel, starting with the sender's own information.",
              "A second tab captures supplier information and line items, with the ability to add as many as needed.",
              "Eligible invoices can request a cash advance, the user picks a percentage and sees the payout instantly.",
              "A slider makes choosing the advance amount tactile, with the net figure updating in real time.",
              "While the request processes, a clear status screen reassures the user the best deal is being found.",
            ],
          },
          {
            id: "contract",
            title: "Contract",
            paragraphs: [
              "The contract module manages the full lifecycle of an agreement, from draft to pending approval to published. A single dashboard shows every contract, its type, its business partner and where it sits in the pipeline.",
            ],
            images: [
              "/images/yaraa/contract/1.jpg",
              "/images/yaraa/contract/2.jpg",
              "/images/yaraa/contract/3.jpg",
            ],
            captions: [
              "The contract dashboard summarises totals, published, unpublished and pending, and lists every agreement with its status.",
              "A structured form captures contract terms, renewal intervals, notice periods and additional fields with clear units.",
              "The detail view brings all overview and term attributes together in a single, scannable read.",
            ],
          },
          {
            id: "create-contract",
            title: "Create Contract",
            paragraphs: [
              "Contracts are built from modular clauses on a block-based canvas. Each clause can hold rich text and dynamic variables, text, numbers or dates, so a single template can be reused and personalised for any counterparty.",
            ],
            images: [
              "/images/yaraa/create-contract/1.jpg",
              "/images/yaraa/create-contract/2.jpg",
              "/images/yaraa/create-contract/3.jpg",
              "/images/yaraa/create-contract/4.jpg",
              "/images/yaraa/create-contract/5.jpg",
              "/images/yaraa/create-contract/6.jpg",
            ],
            captions: [
              "The builder starts with an empty clause block and a toolbar for adding, saving and organising content.",
              "Clauses support full rich-text formatting, so legal language reads exactly as intended.",
              "Dynamic variables can be inserted mid-sentence, choosing between text, number or date placeholders.",
              "A text placeholder becomes a fillable field, turning a static clause into a reusable template.",
              "Filled variables, a partner name and a date, flow naturally into the clause's language.",
              "The finished contract reads as a clean, structured document, each section clearly a distinct clause.",
            ],
          },
          {
            id: "move-contract-clause",
            title: "Move Contract Clause",
            paragraphs: [
              "Because every clause is its own block, reordering a contract is as simple as dragging. Teams can restructure an agreement, moving an appointment clause above the terms, without cutting and pasting or breaking formatting.",
            ],
            images: [
              "/images/yaraa/move-contract-clause/1.jpg",
              "/images/yaraa/move-contract-clause/2.jpg",
              "/images/yaraa/move-contract-clause/3.jpg",
              "/images/yaraa/move-contract-clause/4.jpg",
            ],
            captions: [
              "The signatory panel sits alongside the document, so parties can be managed while the clauses stay in view.",
              "Each clause carries a drag handle, making its position in the contract easy to change.",
              "A clause lifts as it is dragged, with the rest of the document reflowing to show where it will land.",
              "Dropped into its new position, the clause settles seamlessly into the reordered agreement.",
            ],
          },
          {
            id: "contract-details",
            title: "Contract Details",
            paragraphs: [
              "Every contract carries a rich set of side panels, signatories, contract fields, comments, version history and document info, so the full context of an agreement lives right next to the document itself.",
            ],
            images: [
              "/images/yaraa/contract-details/1.jpg",
              "/images/yaraa/contract-details/2.jpg",
              "/images/yaraa/contract-details/3.jpg",
              "/images/yaraa/contract-details/4.jpg",
              "/images/yaraa/contract-details/5.jpg",
              "/images/yaraa/contract-details/6.jpg",
              "/images/yaraa/contract-details/7.jpg",
            ],
            captions: [
              "Signatories are managed in a dedicated panel, with as many parties added as the agreement requires.",
              "Saved signatory information stays editable, so details can be corrected without leaving the document.",
              "The comments panel is ready for collaboration, prompting the team to share the document and start a thread.",
              "Once collaborators weigh in, comments are threaded by clause, keeping feedback anchored to the right text.",
              "A version history tracks every change, edited subject matter, altered suggestions, with timestamps.",
              "Contract fields, currency, price, quantity and units, are surfaced and editable in a structured panel.",
              "A document info panel captures creator, creation date, last update and a unique document ID.",
            ],
          },
          {
            id: "accounting",
            title: "Accounting",
            paragraphs: [
              "Yaraa's accounting suite gives finance teams a complete set of tools, a live dashboard, a general ledger with manual and recurring journals, and a full set of financial statements, all built to stay legible without sacrificing accounting rigor.",
            ],
          },
          {
            id: "accounting-dashboard",
            title: "Dashboard",
            paragraphs: [
              "The accounting dashboard turns the numbers into a clear picture of financial health, headline figures up top, and interactive balance sheet and profit-and-loss charts below, with an onboarding checklist nudging teams toward a fully configured setup.",
            ],
            images: [
              "/images/yaraa/accounting-dashboard/1.jpg",
              "/images/yaraa/accounting-dashboard/2.jpg",
            ],
            captions: [
              "Total assets, liabilities, equity and net profit sit at the top, with balance-sheet and P&L trends charted below.",
              "An onboarding checklist tracks progress through key accounting setup steps, from charts of account to tax settings.",
            ],
          },
          {
            id: "create-general-ledger",
            title: "Create General Ledger",
            paragraphs: [
              "Posting a manual journal is one of the most detail-heavy tasks in accounting, so it was rebuilt to be guided and hard to get wrong. Debits and credits total live, and the system flags any imbalance before a journal can be submitted.",
            ],
            images: [
              "/images/yaraa/create-general-ledger/1.jpg",
              "/images/yaraa/create-general-ledger/2.jpg",
              "/images/yaraa/create-general-ledger/3.jpg",
              "/images/yaraa/create-general-ledger/4.jpg",
              "/images/yaraa/create-general-ledger/5.jpg",
              "/images/yaraa/create-general-ledger/6.jpg",
            ],
            captions: [
              "The journal list separates manual and recurring entries, each with its type, posting date and active status.",
              "A new manual journal starts with a clean overview and an empty accounting-entries table ready for rows.",
              "Entries are added line by line, each with an account code, business partner and debit or credit amount.",
              "Business partner types, customer, employee, shareholder, supplier, are chosen from a simple dropdown.",
              "When debits and credits do not match, the difference is surfaced with a prompt to make a balancing entry.",
              "A confirmation step guards submission, so a journal is only posted when the user is sure it is balanced.",
            ],
          },
          {
            id: "financial-statement",
            title: "Financial Statement",
            paragraphs: [
              "The financial statements, trial balance, balance sheet, profit and loss, and cash flow, all share one consistent, expandable layout. Account hierarchies drill down from summary totals to individual line items, making dense reports easy to navigate.",
            ],
            images: [
              "/images/yaraa/financial-statement/1.jpg",
              "/images/yaraa/financial-statement/2.jpg",
              "/images/yaraa/financial-statement/3.jpg",
              "/images/yaraa/financial-statement/4.jpg",
            ],
            captions: [
              "The trial balance lays out opening, movement and closing debits and credits for every account in one grid.",
              "The balance sheet groups assets into expandable categories, drilling from totals down to individual accounts.",
              "The profit and loss statement separates income and expenses, with running totals at each level.",
              "The cash flow statement organises movement across operations, investing and financing activities.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "reeple",
    title: "Reeple",
    description: "Powering $1M+ in remittances for 5,000+ users and helping African freelancers get paid faster across borders",
    tags: ["Fintech"],
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
          "For millions of Nigerians abroad, sending money home is not just a financial necessity, it’s a connection to family, culture, and responsibility. Remittances help pay for essentials like school fees, healthcare, and household expenses.",
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
    description: "Streamlining HR operations, payroll and employee management for growing teams and organisations",
    tags: ["HRM", "SAAS"],
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
    title: "TurboPay",
    description: "Designing a mobile-first fintech experience that makes receiving money and paying bills instant across Nigeria",
    tags: ["Fintech", "Payments"],
    thumbnail: "/images/turbo/home-web.jpg",
    tocItems: [
      { id: "context", label: "Context" },
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
      { id: "features-mobile", label: "Features (Mobile App)" },
      { id: "onboarding", label: "Onboarding", level: 1 },
      { id: "create-account", label: "Create Account", level: 1 },
      { id: "home", label: "Home", level: 1 },
      { id: "send-cash", label: "Send Cash", level: 1 },
      { id: "deposit-cash", label: "Deposit Cash", level: 1 },
      { id: "automated-deposit", label: "Automated Deposit", level: 1 },
      { id: "turbo-save", label: "Turbo Save", level: 1 },
      { id: "cards", label: "Cards", level: 1 },
      { id: "loans", label: "Loans", level: 1 },
    ],
    sections: [
      {
        id: "context",
        title: "Context",
        paragraphs: [
          "TurboPay is a mobile-first fintech app built for everyday money in Nigeria, from receiving and sending cash to paying bills, saving toward goals, spending with a virtual card, and borrowing when it matters. The goal was a single account that handles the full flow of personal finance without friction.",
        ],
      },
      {
        id: "problem",
        title: "Problem",
        paragraphs: [
          "Most people juggle several apps to move money, pay bills, save, and access credit, each with its own onboarding, its own limits, and its own quirks. Switching between them is slow, identity checks are repeated everywhere, and the experience rarely feels like one coherent product.",
          "We wanted TurboPay to feel like one account that quietly does all of it, so a user could onboard once and then send, save, spend, and borrow against the same balance, identity, and history.",
        ],
      },
      {
        id: "solution",
        title: "Solution",
        paragraphs: [
          "A fast, verifiable onboarding unlocks payments, automated deposits, goal-based savings, virtual cards, and instant loans. Each feature is designed to feel effortless on mobile and to share the same money, identity, and transaction history, so the app grows with the user instead of fragmenting their finances.",
        ],
      },
      {
        id: "features-mobile",
        title: "Features (Mobile App)",
        paragraphs: [],
        subsections: [
          {
            id: "onboarding",
            title: "Onboarding",
            paragraphs: [
              "The first run introduces TurboPay's core promises, saving, borrowing, and paying at your convenience, before asking the user to pick the kind of account they want.",
            ],
            images: [
              "/images/turbo/mobile/onboarding/1.jpg",
              "/images/turbo/mobile/onboarding/2.jpg",
              "/images/turbo/mobile/onboarding/3.jpg",
              "/images/turbo/mobile/onboarding/4.jpg",
              "/images/turbo/mobile/onboarding/5.jpg",
            ],
            captions: [
              "Splash screen with the TurboPay brand",
              "Reach your saving goals effortlessly",
              "Get the funds you need immediately",
              "Make payments at your convenience",
              "Choose an individual or business account",
            ],
          },
          {
            id: "create-account",
            title: "Create Account",
            paragraphs: [
              "Creating an individual account is a guided KYC flow, from BVN and face verification to phone number, PEP declaration, and sanctions checks, so users are verified once and can transact right away.",
            ],
            images: [
              "/images/turbo/mobile/create-account/1.jpg",
              "/images/turbo/mobile/create-account/2.jpg",
              "/images/turbo/mobile/create-account/3.jpg",
              "/images/turbo/mobile/create-account/4.jpg",
              "/images/turbo/mobile/create-account/5.jpg",
              "/images/turbo/mobile/create-account/6.jpg",
              "/images/turbo/mobile/create-account/7.jpg",
            ],
            captions: [
              "Pick an individual or business account",
              "Verify your BVN to confirm your identity",
              "Face verification: position, roll, and process",
              "Face identity verified successfully",
              "Verify your phone number",
              "Declare whether you're a politically exposed person",
              "Answer the sanctions and adverse media checks",
            ],
          },
          {
            id: "home",
            title: "Home",
            paragraphs: [
              "The home dashboard is the daily hub. It surfaces the balance, quick add and send actions, a KYC prompt, bill and airtime shortcuts, and recent transactions.",
            ],
            images: [
              "/images/turbo/mobile/home/1.jpg",
              "/images/turbo/mobile/home/2.jpg",
              "/images/turbo/mobile/home/3.jpg",
            ],
            captions: [
              "Home with a hidden balance and quick actions",
              "Reveal the balance and browse transaction history",
              "Open all activities: bills, airtime, data, and more",
            ],
          },
          {
            id: "send-cash",
            title: "Send Cash",
            paragraphs: [
              "Sending money is quick and safe. Pick a saved beneficiary, a contact, or a bank account, set the amount, review the transfer, and authorize it with a PIN.",
            ],
            images: [
              "/images/turbo/mobile/send-cash/1.jpg",
              "/images/turbo/mobile/send-cash/2.jpg",
              "/images/turbo/mobile/send-cash/3.jpg",
              "/images/turbo/mobile/send-cash/4.jpg",
              "/images/turbo/mobile/send-cash/5.jpg",
              "/images/turbo/mobile/send-cash/6.jpg",
              "/images/turbo/mobile/send-cash/7.jpg",
            ],
            captions: [
              "Tap Send Cash from the home dashboard",
              "Send to a saved beneficiary, contact, or bank",
              "Pick a recipient from your Turbo contacts",
              "Enter the amount you want to send",
              "Review the transaction before confirming",
              "Enter your transaction PIN to authorize",
              "Transfer successful with a full receipt",
            ],
          },
          {
            id: "deposit-cash",
            title: "Deposit Cash",
            paragraphs: [
              "Adding money is just as simple, with a personal account number for manual transfers or an automated deposit for recurring top-ups.",
            ],
            images: [
              "/images/turbo/mobile/deposit-cash/1.jpg",
              "/images/turbo/mobile/deposit-cash/2.jpg",
              "/images/turbo/mobile/deposit-cash/3.jpg",
            ],
            captions: [
              "Tap Add Cash on the home dashboard",
              "Deposit via a personal account number or automate it",
              "Browse the full deposit transaction history",
            ],
          },
          {
            id: "automated-deposit",
            title: "Automated Deposit",
            paragraphs: [
              "Automated deposits let users set bills and transactions to pay themselves. Name the automation, set the amount and schedule, link a payment method, and TurboPay handles the rest.",
            ],
            images: [
              "/images/turbo/mobile/automated-deposit/1.jpg",
              "/images/turbo/mobile/automated-deposit/2.jpg",
              "/images/turbo/mobile/automated-deposit/3.jpg",
              "/images/turbo/mobile/automated-deposit/4.jpg",
              "/images/turbo/mobile/automated-deposit/5.jpg",
              "/images/turbo/mobile/automated-deposit/6.jpg",
              "/images/turbo/mobile/automated-deposit/7.jpg",
              "/images/turbo/mobile/automated-deposit/8.jpg",
              "/images/turbo/mobile/automated-deposit/9.jpg",
              "/images/turbo/mobile/automated-deposit/10.jpg",
              "/images/turbo/mobile/automated-deposit/11.jpg",
            ],
            captions: [
              "Tap Add Cash from the home dashboard",
              "Choose Automatic Deposit under Deposit Money",
              "Empty state with no existing automated deposits",
              "Set up a bill and link a payment method",
              "Name your automation so it's easy to recognize",
              "Enter the amount to automate",
              "Set the repeat schedule, dates, and payment method",
              "Choose to pay from a debit card or your wallet",
              "Link a debit card to fund the automation",
              "Review the automation before confirming",
              "Automation created, repeating on schedule",
            ],
          },
          {
            id: "turbo-save",
            title: "Turbo Save",
            paragraphs: [
              "Turbo Save turns goals into savings. Pick a plan, name it, set an amount, and track progress toward a target, with flexible access and clear withdrawal rules.",
            ],
            images: [
              "/images/turbo/mobile/turbo-save/1.jpg",
              "/images/turbo/mobile/turbo-save/2.jpg",
              "/images/turbo/mobile/turbo-save/3.jpg",
              "/images/turbo/mobile/turbo-save/4.jpg",
              "/images/turbo/mobile/turbo-save/5.jpg",
              "/images/turbo/mobile/turbo-save/6.jpg",
              "/images/turbo/mobile/turbo-save/7.jpg",
              "/images/turbo/mobile/turbo-save/8.jpg",
              "/images/turbo/mobile/turbo-save/9.jpg",
            ],
            captions: [
              "Welcome to TurboSave",
              "Total savings with the available saving plans",
              "Turbo Savings plan details and things to note",
              "Name your savings plan",
              "Enter the amount you'd like to save",
              "Review the savings plan before confirming",
              "Savings plan created successfully",
              "Browse your active savings plans",
              "A plan's detail with goal progress and history",
            ],
          },
          {
            id: "cards",
            title: "Cards",
            paragraphs: [
              "The Turbo virtual card is created right in the app. A short flow captures details and a small issuance fee, then the card is ready for online spending, with its balance and history in one place.",
            ],
            images: [
              "/images/turbo/mobile/cards/1.jpg",
              "/images/turbo/mobile/cards/2.jpg",
              "/images/turbo/mobile/cards/3.jpg",
              "/images/turbo/mobile/cards/4.jpg",
              "/images/turbo/mobile/cards/5.jpg",
              "/images/turbo/mobile/cards/6.jpg",
              "/images/turbo/mobile/cards/7.jpg",
              "/images/turbo/mobile/cards/8.jpg",
            ],
            captions: [
              "Cards tab prompting you to get a virtual card",
              "Enter your personal information",
              "A short survey on how you'll use the card",
              "Confirm details and the one-time issuance fee",
              "Enter your PIN to authenticate the payment",
              "Card created successfully",
              "Your new virtual card with an empty history",
              "The card with its Visa number and transactions",
            ],
          },
          {
            id: "loans",
            title: "Loans",
            paragraphs: [
              "Loans give users instant access to credit. Choose a loan type, upload documents, get an eligibility decision, pick an amount and repayment instrument, and track everything through to payback.",
            ],
            images: [
              "/images/turbo/mobile/loans/1.jpg",
              "/images/turbo/mobile/loans/2.jpg",
              "/images/turbo/mobile/loans/3.jpg",
              "/images/turbo/mobile/loans/4.jpg",
              "/images/turbo/mobile/loans/5.jpg",
              "/images/turbo/mobile/loans/6.jpg",
              "/images/turbo/mobile/loans/7.jpg",
              "/images/turbo/mobile/loans/8.jpg",
              "/images/turbo/mobile/loans/9.jpg",
            ],
            captions: [
              "Loans tab with the outstanding loan and plans",
              "Direct Loans details and things to note",
              "Upload your bank statement and offer letter",
              "Documents uploading for review",
              "Loan approved with your limit and terms",
              "Enter the amount you want to borrow",
              "Choose a repayment instrument",
              "Track your loan applications under review",
              "A loan's detail with payback and history",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "footballbooth",
    title: "FootballBooth",
    description: "Building a social platform that connects football fans through communities, live discussions and trending content",
    tags: ["AI", "SAAS", "ERP System"],
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
    description: "Scaling a cross-border payments platform from a single market into 13+ new international markets and territories",
    tags: ["Fintech", "Payments"],
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

// A project counts as a full case study once it has real content beyond the
// single "Coming soon." placeholder section.
export function isPublishedCaseStudy(p: Project): boolean {
  return !(
    p.sections.length === 1 &&
    p.sections[0].paragraphs.length === 1 &&
    p.sections[0].paragraphs[0] === "Coming soon."
  );
}

// The next published case study after `slug`, wrapping around. Only cycles
// through complete case studies so the CTA never lands on a placeholder.
export function getNextCaseStudy(slug: string): Project | undefined {
  const published = projects.filter(isPublishedCaseStudy);
  if (published.length < 2) return undefined;
  const idx = published.findIndex((p) => p.slug === slug);
  if (idx === -1) return undefined;
  return published[(idx + 1) % published.length];
}
