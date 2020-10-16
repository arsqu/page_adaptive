module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 192,
      minPixelValue: 2,
      propList: ["*"],
      exclude: function (file) {
        return file.indexOf("common.css") == -1;
      }
    }
  }
};
