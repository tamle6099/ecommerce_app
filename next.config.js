/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  env: {
    BASE_URL: "http://localhost:3000",
    MONGODB_URL:
      "mongodb://localhost:27017/commerce?retryWrites=true&w=majority",
  },
};
