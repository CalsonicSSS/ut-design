/** @type {import('next').NextConfig} */
// dev config
// const nextConfig = {};

// prod config
const nextConfig = {
  output: 'export',
  basePath: '/unite-toolkit',
  images: {
    unoptimized: true,
  },
  // This ensures trailing slashes which can help with WordPress routing
  trailingSlash: true,
};

export default nextConfig;
