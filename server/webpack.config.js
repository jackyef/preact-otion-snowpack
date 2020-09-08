const fs = require('fs-extra');
const path = require('path');
const webpack = require('webpack');
const StartServerWebpackPlugin = require('start-server-webpack-plugin');

const snowpackConfig = require('../snowpack.config');
const outputPath = path.resolve(__dirname, 'dist');
const projectRoot = path.resolve(__dirname, '../');
fs.removeSync(outputPath);

const isDev = process.argv.indexOf(`--mode='development'`) > -1;

module.exports = {
  entry: [
    isDev ? 'webpack/hot/poll?1000' : null, 
    path.resolve(__dirname, isDev ? './index.dev.js' : './index.tsx'),
  ].filter(Boolean),
  target: 'node',
  output: {
    filename: 'main.js',
    path: outputPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          context: __dirname,
          configFile: 'tsconfig.json',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
          name: snowpackConfig.__internal.outputPattern.assets, // this has to match `snowpack.config.json` assets pattern
          emitFile: false, // we don't need to emit file, snowpack will handle the bundling of assets
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
      STATIC_ASSETS_PATH: JSON.stringify(path.resolve(projectRoot, 'build')),
      ASSETS_MANIFEST_PATH: JSON.stringify(
        path.resolve(projectRoot, '.build-manifest/assets.json'),
      ),
    }),
    isDev ? new StartServerWebpackPlugin({
      name: 'main.js',
    }) : null,
    isDev ? new webpack.HotModuleReplacementPlugin({}) : null,
  ].filter(Boolean),
  mode: isDev ? 'development' : 'production',
};
