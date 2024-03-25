/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["cloudflare-ipfs.com", "avatars.githubusercontent.com", "loremflickr.com"], // 허용할 도메인 목록을 지정
    // deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048], // 지원할 디바이스 크기 목록
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // 제공할 이미지 크기 목록
    // path: "/_next/image", // 이미지 요청 경로
    // loader: "default", // 이미지 로더
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloudflare-ipfs.com",
        port: "",
        pathname: "/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/",
      },
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/640/480?lock=",
      },
    ],
  },
};

module.exports = nextConfig;
