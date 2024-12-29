/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['firebasestorage.googleapis.com'], // Add your image domains here
  }
};

export default nextConfig;
