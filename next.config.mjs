import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

/** @type {import('next').NextConfig} */

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, 'src/sass')], // Assuming you have a src/sass directory
  },
  redirects: async () => [
    {
      source: '/',
      destination: '/login',
      permanent: true,
    },
  ],
};

export default nextConfig;