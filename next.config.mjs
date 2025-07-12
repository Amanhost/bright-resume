/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "via.placeholder.com", // sample image domain
      "images.unsplash.com", // if you use Unsplash free images
      "res.cloudinary.com", // if you use Cloudinary
      // add more domains as needed
    ],
  },
};

export default nextConfig;
