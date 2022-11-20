/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	compiler: {
		// enable styleComponets
		styledComponents: true
	},
}

module.exports = nextConfig
