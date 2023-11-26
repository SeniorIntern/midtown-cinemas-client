/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.midtown.com.np',
      },
    ],
  },
};

module.exports = nextConfig;
