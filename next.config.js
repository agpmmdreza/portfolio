const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // webpack(config, options) {
  //   config.module.rules.push({
  //     test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
  //     use: {
  //       loader: 'url-loader',
  //       options: {
  //         limit: 100000,
  //       },
  //     },
  //   });
  //   return config;
  // },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
});
