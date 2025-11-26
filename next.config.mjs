/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports for GitHub Pages
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Optional: Set base path if your repo isn't at root
  // basePath: '/v0-nana-wang-personal-site',
  // assetPrefix: '/v0-nana-wang-personal-site',
}

export default nextConfig