const withImages = require('next-images');

const basePath = '';

module.exports = withImages({
  esModule: true,
  exclude: /\.svg$/,
  poweredByHeader: false,
  webpack5: true,
  inlineImageLimit: false,

  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    });

    return config;
  },
  basePath
});
