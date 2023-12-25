/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
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
