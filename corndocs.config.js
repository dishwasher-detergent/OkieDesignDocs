const config = {
  darkMode: true,
  googleAnalytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY,
  search: {
    enabled: true,
    algolia_admin_key: process.env.ALGOLIA_SEARCH_ADMIN_KEY,
    algolia_app_id: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    algolia_search_api_key: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
    algolia_index: "dev_okiedesign",
  },
  project: {
    name: "OkieDesign",
    url: "https://www.okie.design",
    github: {
      repo: "https://github.com/dishwasher-detergent/OkieDesignDocs",
      usesMain: true,
    },
    // logo: {
    //   src: "/static/logo.svg",
    //   alt: "OkieDesign Logo",
    //   size: [40, 40],
    // },
  },
};

module.exports = config;
