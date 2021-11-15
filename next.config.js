module.exports = {
  reactStrictMode: true,
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://143.198.166.162/:path*',
        },
      ]
    },
}
