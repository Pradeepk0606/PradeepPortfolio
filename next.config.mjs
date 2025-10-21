const isProd = process.env.NODE_ENV === 'production';
const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Only apply GitHub Pages options when explicitly targeting gh-pages
  basePath: isGhPages ? '/PradeepPortfolio' : '',
  trailingSlash: isGhPages ? true : false,
  output: isGhPages ? 'export' : undefined,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    // Required for static export on GitHub Pages
    unoptimized: isGhPages ? true : false,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: isGhPages
      ? 'https://pradeepk0606.github.io/PradeepPortfolio'
      : (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  },
};

export default nextConfig;
