const buildingGhPages = Boolean(process.env.GH_PAGES);
const prefix = buildingGhPages ? '/preact-otion-snowpack/' : '/';

module.exports = {
  extends: '@snowpack/app-scripts-preact',
  install: ['@prefresh/vite/utils'],
  scripts: {},
  plugins: [
    [
      '@snowpack/plugin-webpack',
      {
        extendConfig: require('./webpack.config.extend'),
        sourceMap: true,
        outputPattern: {
          js: 'main.[contenthash:10].js',
          css: 'main.[contenthash:10].css',
          assets: '[name].[contenthash:10].[ext]',
        },
      },
    ],
  ],

  buildOptions: {
    baseUrl: prefix,
  },

  // our custom key used for synchronization with the server bundle config
  // not part of snowpack APIs!
  __internal: {
    outputPattern: {
      js: 'main.[contenthash:10].js',
      css: 'main.[contenthash:10].css',
      assets: '[name].[contenthash:10].[ext]',
    },
  },
};
