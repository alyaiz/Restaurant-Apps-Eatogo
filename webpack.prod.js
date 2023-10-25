const { merge } = require("webpack-merge");
const common = require("./webpack.common");
//workbox taruh disini, karena cuman pake InjectManifest destructuring aja
const { InjectManifest } = require("workbox-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    //Kemudian panggil kayak gini
    new InjectManifest({
      swSrc: path.resolve(__dirname, "src/scripts/sw.js"),
      swDest: "./sw.bundle.js",
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    }),
  ],
});
