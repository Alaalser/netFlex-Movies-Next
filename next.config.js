/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@stripe/firestore-stripe-payments"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "rb.gy",
      },
      {
        protocol: "https",
        hostname: "assets.nflxext.com",
      },
    ],
  },
};

module.exports = nextConfig;
