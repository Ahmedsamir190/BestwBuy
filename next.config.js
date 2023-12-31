/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakeapi.platzi.com",
      },
      {
        protocol: "https",
        hostname: "placeimg.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
      {
        protocol: "https",
        hostname: "dfcdn.defacto.com.tr",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
            {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
};
