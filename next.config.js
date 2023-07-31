/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.ativaesportes.com.br',
        port: '',
        pathname: '/public/ativaesportes/imagens/produtos/camisa-lacoste-masculina-th761823-031-63bd8ef10a659.jpg',
      },
    ],
  },
}

module.exports = nextConfig
