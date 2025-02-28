/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '8055',
          pathname: '/admin/files/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;