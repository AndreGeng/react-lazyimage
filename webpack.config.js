var path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'react-transition-group': 'react-transition-group',
    'classnames': 'classnames',
    'prop-types': 'prop-types'
  }
};
