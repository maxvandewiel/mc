const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "/src/index.ts", // main
  output: {
    path: path.resolve(__dirname, "dist"), // output folder
    publicPath: "/",
  },
  module: {
    rules: [
    {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
        {
          loader: "file-loader",
        },
        ]
    },
    ],
  },
};