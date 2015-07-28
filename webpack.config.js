module.exports = {
  context: __dirname + "/app",
  entry: {
    javascripts: ["./scripts/app.js","./styles/main.css"],
    html:       "./index.html",
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.css$/,
        loader: "style!css"
      }
    ]
  }
}
