const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/static/" : "/",
  configureWebpack: {
    plugins: [
      new BundleTracker({ path: __dirname, filename: "./webpack-stats.json" })
    ]
  }
};
