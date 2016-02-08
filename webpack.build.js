const path = require('path');
const webpack = require('webpack');
const package = require('./package.json');
const BASE_DIR = process.cwd();
const COMPONENT_FILE = process.env.COMPONENT_FILE;
const COMPONENT_NAME = process.env.COMPONENT_NAME;
const plugins = [];

function getPackageMain() {
  return require(path.resolve(BASE_DIR, 'package.json')).main;
}

if (process.env.MINIFY) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
  COMPONENT_FILE += '.min';
}

module.exports = {
  entry: path.resolve(BASE_DIR, getPackageMain()),
  output: {
    filename: 'bundle.js',
    path: path.resolve(BASE_DIR, 'dist/'),
    library: package.name,
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: plugins
};
