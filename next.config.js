/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose", "twilio", "jsonwebtoken","multer"],
  },
};

module.exports = nextConfig;
