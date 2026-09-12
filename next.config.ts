import type { NextConfig } from "next";

// GitHub Pages user site (https://dev-pyun.github.io) — served from the root,
// so no basePath / assetPrefix. Static export only; no server features.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
