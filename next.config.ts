/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org", // For client logos
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com", // For industry icons
      },
      {
        protocol: "https",
        hostname: "randomuser.me", // For testimonial images
      },
      {
        protocol: "https",
        hostname: "picsum.photos", // For success story images
      },
    ],
  },
};

module.exports = nextConfig;
