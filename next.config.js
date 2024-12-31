/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["geist"],
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://peter-roh.github.io" : "",
};

export default config;
