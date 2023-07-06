const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@arkejs/ui"],
  output: "standalone",
};

module.exports = withContentlayer(nextConfig);
