import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  // Pin workspace root to this project so Next.js stops warning about
  // stray lockfiles from neighbouring projects on the same machine.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
