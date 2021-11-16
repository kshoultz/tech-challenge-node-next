module.exports = {
  reactStrictMode: true,
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://mwi-challenge.com/:path*',
        },
      ]
    },
}
