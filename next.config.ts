import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/Fawkia-fouad-sadka",
  assetPrefix: "/Fawkia-fouad-sadka",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
