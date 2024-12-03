/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  experimental: {
    appDir: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
=======
  // experimental: {
  //   appDir: true,
  // },

  images: { formats: ["image/avif", "image/webp"], remotePatterns: [{
    protocol: 'https',
    hostname: 'fakestoreapi.com'
  }] },
>>>>>>> 26f78578383efa00b00704a88c66d2b1218f0d48
};

module.exports = nextConfig;
