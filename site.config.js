const CONFIG = {
  // profile setting (required)
  profile: {
    name: "moolmin",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "프론트엔드 개발자",
    bio: "프론트엔드 개발자 입니다.",
    email: "zzmzzm0065@gmail.com",
    linkedin: "sumin-silvia-k",
    github: "moolmin",
    instagram: "insootagramin",
  },
  projects: [
    {
      name: `morethan-log`,
      href: "https://github.com/morethanmin/morethan-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "moolmin-log",
    description: "welcome to moolmin-log!",
    scheme: "light", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://moolmin-portfolio.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app/moolmin%20log.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fmorethan-log.vercel.app%2Favatar.svg", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: "3afe8aee656a430b908c6a67811c9da2",
  },

  // plugin configuration (optional)
}

module.exports = { CONFIG }
