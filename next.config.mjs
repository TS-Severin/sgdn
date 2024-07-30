/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ["de"],
        defaultLocale: "de",
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
                port: '',
                pathname: '/**',
            },
        ],
    },

};

export default nextConfig;
