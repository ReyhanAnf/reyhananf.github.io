/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: false,
    images: {
        unoptimized: true,
        domains: ['blogger.googleusercontent.com'],
    },
};

export default nextConfig;
