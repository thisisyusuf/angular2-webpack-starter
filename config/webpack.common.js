var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var rupture = require('rupture');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.styl$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss-loader!stylus-loader')
      },
      {
        test: /\.styl$/,
        include: helpers.root('src', 'app'),
        loader: 'raw!postcss-loader!stylus-loader'
      }
    ]
  },

  postcss: function(){
    return[
      require('autoprefixer')({ /* ...options */ }),
      require('lost')({ /* ...options */ })
    ];
  },

  stylus: {
    use: [rupture()]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
