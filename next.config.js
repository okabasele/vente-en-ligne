/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "static.webshopapp.com",
      "cdn.webshopapp.com",
      "cdn-media.prettylittlething.com",
      "images.unsplash.com"
    ],
  },
};

module.exports = nextConfig;
