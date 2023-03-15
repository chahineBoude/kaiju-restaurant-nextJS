/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp4$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos/",
          outputPath: "static/videos/",
          name: "[name].[hash].[ext]",
        },
      },
    });
    return config;
  },
};

require("dotenv").config();

module.exports = {
  env: {
    INSTA_API_ID: process.env.INSTA_API_ID,
    INSTA_API_KEY: process.env.INSTA_API_KEY,
  },
};

module.exports = {
  images: {
    domains: ["scontent.cdninstagram.com"],
  },
};
