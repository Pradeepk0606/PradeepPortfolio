const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure base path and asset prefix for GitHub Pages project site
  basePath: isProd ? '/PradeepPortfolio' : '',
  assetPrefix: isProd ? '/PradeepPortfolio/' : '',
  trailingSlash: true,
  output: 'export',
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    // Required for static export on GitHub Pages
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
};

export default nextConfig;
