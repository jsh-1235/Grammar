const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
// const webpack = require("webpack"); //to access built-in plugins
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    home: "./src/home.js",
    about: "./src/about.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // [style-loader](/loaders/style-loader)
          { loader: "style-loader" },
          // [css-loader](/loaders/css-loader)
          {
            loader: "css-loader",
            options: {
              modules: false,
            },
          },
          // [sass-loader](/loaders/sass-loader)
          // { loader: "sass-loader" },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./html/home.html", filename: "./home.html", chunks: ["home"] }), new HtmlWebpackPlugin({ template: "./html/about.html", filename: "./about.html", chunks: ["about"] })],
};
