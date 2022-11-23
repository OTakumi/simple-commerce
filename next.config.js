/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: (() => {
    let compilerConfig = {
      // enable styleComponets
      styledComponents: true
    }

    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        // Remove the data-testid attribute used by React Testing Library in the production env.
        reactRemoveProperties: {properties: ['^data-testingid$'], }
      }
    }
    return compilerConfig
  })(),
  async rewrites() {
    return [
      {
        // ex ./app/proxy
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        // ex. http://localhost:8000
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ]
  },
}

module.exports = nextConfig
