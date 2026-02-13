/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/byte-trans-view" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
