  /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/auth',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['d1q6c2tim6ecyb.cloudfront.net'],
  },
}

module.exports = nextConfig


  
  