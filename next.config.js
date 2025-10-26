/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'magix-movies.vercel.app',
                port: '',
                pathname: '/**',
            },
            // https:
            // "magix-movies.vercel.app",
            // "img.shields.io",
        ],

    }
}

module.exports = nextConfig
