/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Ensure the domain is correct
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dclzpodah/**", // Adjust this to your Cloudinary path
      },
    ],
  },
};

export default nextConfig;
