/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  // output: "export",
  distDir: "out",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "search.pstatic.net",
        port: '3000',
        pathname: '/**'
      },
      {
        protocol: "https",
        hostname: "search.pstatic.net",
        port: '3000',
        pathname: '/common/**'
      },
      {
        protocol: "https",
        hostname: "pup-review-phinf.pstatic.net",
        port: '',
        pathname: '/**'
      },
      {
        protocol: "https",
        hostname: "d12zq4w4guyljn.cloudfront.net",
        port: '',
        pathname: '/**'
      },
    ],
  },
  async headers() {
    return [
      {
        // source: "/api/map",
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        // source: "/api/map/:path",
        source: "/result/:path",
        destination: "/api/map/:path",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xxjrg87yxh7xrark.public.blob.vercel-storage.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/assets/styles")],
    prependData: `@import "_mixins.scss"; @import "_variables";`,
    // html태그를 직접 수정은 next에 어울리지 않아서 table {} 이런 속성을 prependData에 넣으면 에러가 나옴.
    // prependData: `@use "mixins.scss" as mixin;`, // use가 적용이 안됨.
  },
};

module.exports = nextConfig;
