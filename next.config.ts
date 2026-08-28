import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Turbopack scoped to this repository when a parent directory also
  // contains a package manager lockfile.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
