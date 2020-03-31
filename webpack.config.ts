import path from 'path';
import { Configuration } from 'webpack';
import ManifestPlugin from 'webpack-manifest-plugin';
import cssnano from 'cssnano';

import { SERVER_PORT, IS_DEV, WEBPACK_PORT } from './src/server/config';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const plugins = IS_DEV ? 
                  [new ManifestPlugin()] 
                : [
                    new CleanWebpackPlugin(),
                    new ManifestPlugin(),
                    new MiniCssExtractPlugin({
                      filename: `css/[name].css`,
                      chunkFilename: '[id].css',
                    })
                  ];

let scssLoader = {
  test: /\.(css|scss)$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: true,
        localsConvention: 'camelCase',
        sourceMap: IS_DEV,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: IS_DEV,
        plugins: IS_DEV ? [cssnano()] : [],
      },
    },
    'sass-loader',
  ],
}
if (!IS_DEV) {
 scssLoader = {
    test: /\.(css|scss)$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: false,
          //localIdentName: '[local]___[hash:base64:5]',
        },
      },
      'sass-loader',
    ],
  }
}
                    


// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// plugins.push(new BundleAnalyzerPlugin());

const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const targets = IS_DEV ? { chrome: '79', firefox: '72' } : '> 0.25%, not dead';

const config: Configuration = {
  mode: IS_DEV ? 'development' : 'production',
  devtool: IS_DEV ? 'inline-source-map' : false,
  entry: ['./src/client/client'],
  output: {
    path: path.join(__dirname, 'dist', 'statics'),
    filename: `[name]-[hash:8]-bundle.js`,
    chunkFilename: '[name]-[hash:8]-bundle.js',
    publicPath: '/statics/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  optimization: {
    minimize: !IS_DEV,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, nodeModulesPath],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/env', { modules: false, targets }], '@babel/react', '@babel/typescript'],
            plugins: [
              '@babel/proposal-numeric-separator',
              '@babel/plugin-transform-runtime',
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              '@babel/plugin-proposal-object-rest-spread',
            ],
          },
        },
      },
      scssLoader,
      {
        test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/,
        use: 'url-loader?limit=10000',
      },
    ],
  },
  devServer: {
    port: WEBPACK_PORT,
    overlay: IS_DEV,
    open: IS_DEV,
    openPage: `http://localhost:${SERVER_PORT}`,
  },
  plugins,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};

export default config;
