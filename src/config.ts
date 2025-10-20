export const SITE = {
  website: "https://lazybuilds.com/", // replace this with your deployed domain
  author: "Gautam G Sabhahit",
  profile: "https://lazybuilds.com/",
  desc: "Product-focused engineer and former startup CTO building scalable systems in AI, Blockchain, and Fintech. Exploring LLMs, RAG systems, and multi-tenant SaaS.",
  title: "LazyBuilds",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/gauthamgsabahit/personal-blog/edit/master/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Kolkata", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
