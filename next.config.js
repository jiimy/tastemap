/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  // output: "export",
  // distDir: "out",
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        // matching all API routes
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
        source: "/api/map/:path",
        destination:
          "https://openapi.naver.com/v1/search/local.json?sort=comment&display=10&query=서울특별시 관악구 서원동  다이소",
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
