/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGO_URL: process.env.MONGO_URL,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    },
    images: {
        domains: [
            "images.pexels.com", "fakeimg.pl", "www.google.com", "www.nationalgeographic.com", "i.natgeofe.com", "img.freepik.com"
        ]
    }
}

module.exports = nextConfig
