const { merge } = require("webpack-merge");
const common = require("/webpack-merge");

module.exports = merge(common, {
  mode: "production",
});
