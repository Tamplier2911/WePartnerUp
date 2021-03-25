const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  // entry
  entry: {
    main: path.resolve(__dirname, './src/index.tsx'),
  },

  // output
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/[name].[contenthash].js',
    publicPath: '',
  },

  // mode
  mode: 'production',

  // opt
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },

  // resolution
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets',
            publicPath: 'assets/',
          },
        },
      },
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-inline-loader',
      // },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
            },
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 2, sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(ts|js)x?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      // eslint: {
      //   files: './src/**/*',
      // },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/styles.[contenthash].css',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        path.join(process.cwd(), 'build/**/*'),
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Title',
      template: './public/index.html',
      filename: 'index.html',
      description: 'Description.',
    }),
  ],
};
