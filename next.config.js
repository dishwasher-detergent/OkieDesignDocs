// /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL,
  assetPrefix: process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL,
  images: {
    domains: ["/images"],
    loader: "custom",
    disableStaticImages: true,
  },
};
module.exports = nextConfig;

const frontmatter = require("remark-frontmatter");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [frontmatter],
    providerImportSource: "@mdx-js/react",
  },
});
module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
