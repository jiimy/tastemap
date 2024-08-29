/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  // output: "export",
  // distDir: "out",
  reactStrictMode: true,
  swcMinify: true,
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

module.exports = nextConfig
