/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  //ad expirment\l flag to tell next to use app dir
  //next will use app folder instead of pages
  experimental:{
    appDir: true
  }
}
