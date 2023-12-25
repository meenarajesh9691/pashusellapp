/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: [
      "mongoose",
      "twilio",
      "jsonwebtoken",
      "multer",
      "aws-sdk",
    ],
  },
};

module.exports = nextConfig;
