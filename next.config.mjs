/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'images.ctfassets.net',
          pathname: '**', // allows all paths from this domain
        },
      ],
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
  