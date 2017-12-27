// standard way of defining webpack and can have multiple entry files
// bundle.js is the file that you ll display to the clients of your project and will be used on your react site
// module allow us to use babel and all
module.exports = {
  entry: {
    app: './src/index.jsx'
  },
  output: {
    filename: './bundle.js'
  },
  module: {
    loaders: [{
      exclude: /(node_modules)/,
      loader: 'babel'
    }]
  }
};
