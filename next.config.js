/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      beforeMiddleware: [], // You can add specific middleware if needed
      afterMiddleware: [], // You can add specific middleware if needed
    },
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
