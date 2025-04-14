/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.ctfassets.net', 'res.cloudinary.com', 'raw.githubusercontent.com'],
  },
  
    webpack(config) {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg)$/i,
        type: 'asset/resource',
      });
      return config;
    },
  };
  
  export default nextConfig;
  