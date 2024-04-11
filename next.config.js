/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  //  experimental: {
  //   appDir: true,
  // },
  // output: "export",
  distDir: "out",
   sassOptions: {
    // includePaths: [path.join(__dirname, 'styles')],
    // prependData: `@import "@/assets/styles/_mixin.scss"; @import "styles/_mixins.scss";`, 
      prependData: `@import "@/assets/styles/_mixins.scss";`,
  },
}

module.exports = nextConfig
