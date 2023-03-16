/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();

const isProd = process.env.NODE_ENV === "production";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
];

const nextConfig = {
  reactStrictMode: true,
  experimental: { esmExternals: true },
  host: "*",
  compress: isProd,
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = removeImports(nextConfig);
