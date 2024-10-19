import { resolve } from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias['@'] = resolve('./');
        return config;
      },
};

export default nextConfig;
