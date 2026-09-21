export interface FeaturedProject {
  title: string;
  description: string;
  slug: string;
  thumbnail: string;
  mobileThumbnail: string;
  tags: string[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "ChainCore",
    description: "Building Africa's first native core banking platform for 50+ financial institutions across Nigeria and the continent",
    slug: "chaincore",
    thumbnail: "/images/chaincore/home-web.jpg",
    mobileThumbnail: "/images/chaincore/home-web.jpg",
    tags: ["SAAS", "Fintech"],
  },
  {
    title: "Knit",
    description: "Designing a social coordination app that helps friend groups plan, vote and show up to real-life events",
    slug: "knit",
    thumbnail: "/images/knit/home-web.jpg",
    mobileThumbnail: "/images/knit/home-web.jpg",
    tags: ["AI", "Social Networking"],
  },
  {
    title: "Reeple",
    description: "Powering $1M+ in remittances for 5,000+ users and helping African freelancers get paid faster across borders",
    slug: "reeple",
    thumbnail: "/images/reeple/home-web.jpg",
    mobileThumbnail: "/images/reeple/home-web.jpg",
    tags: ["Fintech"],
  },
  {
    title: "Yaraa",
    description: "Rethinking enterprise procurement and resource planning for mid-market companies across multiple industries",
    slug: "yaraa",
    thumbnail: "/images/yaraa/home-web.jpg",
    mobileThumbnail: "/images/yaraa/home-web.jpg",
    tags: ["AI", "SAAS", "ERP System"],
  },
  {
    title: "Timein Plus",
    description: "Streamlining HR operations, payroll and employee management for growing teams and organisations",
    slug: "timein-plus",
    thumbnail: "/images/timein-plus/home-web.jpg",
    mobileThumbnail: "/images/timein-plus/home-web.jpg",
    tags: ["HRM", "SAAS"],
  },
  {
    title: "Turbo",
    description: "Designing a mobile-first fintech experience that makes receiving money and paying bills instant across Nigeria",
    slug: "turbo",
    thumbnail: "/images/turbo/home-web.jpg",
    mobileThumbnail: "/images/turbo/home-web.jpg",
    tags: ["AI", "SAAS", "ERP System"],
  },
  {
    title: "FootballBooth",
    description: "Building a social platform that connects football fans through communities, live discussions and trending content",
    slug: "footballbooth",
    thumbnail: "/images/footballbooth/hero.jpg",
    mobileThumbnail: "/images/footballbooth/mobile.png",
    tags: ["AI", "SAAS", "ERP System"],
  },
  {
    title: "Wiremoney",
    description: "Scaling a cross-border payments platform from a single market into 13+ new international markets and territories",
    slug: "wiremoney",
    thumbnail: "/images/wiremoney/hero.jpg",
    mobileThumbnail: "/images/wiremoney/mobile.png",
    tags: ["Fintech", "Payments"],
  },
];
