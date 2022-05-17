/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withCSS = require("@zeit/next-css");

module.exports = withCSS({});
module.exports = {
  images: {
    domains:["links.papareact.com","image.tmdb.org","wallpapercave.com","clipart-library.com","purepng.com"]
  }
} 
