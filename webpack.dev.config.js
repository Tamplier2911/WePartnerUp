const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  // entry
  entry: path.resolve(__dirname, './src/index.tsx'),

  // output
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './build'),
    publicPath: '',
  },

  // mode
  mode: 'development',

  // dev server setup
  devServer: {
    contentBase: path.resolve(__dirname, './build'),
    port: 3000,
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
        use: ['file-loader'],
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
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

  // plugins
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      // eslint: {
      //   files: './src/**/*',
      // },
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        path.join(__dirname, 'build/**/*'),
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Title',
      template: './public/index.html',
      description: 'Description.',
    }),
  ],
};
