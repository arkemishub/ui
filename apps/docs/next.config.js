const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@arkejs/ui"],
};

module.exports = withContentlayer(nextConfig);
