/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.fakercloud.com'
            },
            {
                protocol: 'https',
                hostname: 'cloudflare-ipfs.com'
            },
        ],
    },
};

export default nextConfig;
