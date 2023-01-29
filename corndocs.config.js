/** @type {import('./types/ConfigType').Config} */

const config = {
  darkMode: true,
  search: {
    algolia_admin_key: process.env.ALGOLIA_SEARCH_ADMIN_KEY,
    algolia_app_id: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    algolia_search_api_key: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
    algolia_index: "dev_okiedesign",
  },
  project: {
    name: "OkieDesign",
    url: "https://www.okie.design",
    homePage: "index",
    github: {
      repo: "https://github.com/dishwasher-detergent/OkieDesignDocs",
      usesMain: true,
    },
    logo: {
      src: "/static/logo.svg",
      darkMode: "/static/logo_white.svg",
      alt: "OkieDesign Logo",
      size: [50],
    },
    mainScreen: {
      showSearch: true,
      showSelection: true,
      homePage: {
        title: "Create the beautiful website you've always dreamed of.",
        tagLine:
          "Responsive components created with Tailwind and Love!",
      },
    },
  },
};

module.exports = config;
