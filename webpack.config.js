const ENV = process.env.NODE_ENV;
// const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: __dirname + "/public",
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          "style-loader",
          "css-loader",
        ]
      },

      // {
      //   test: /\.html$/,
      //   use: {
      //     loader: 'html-loader',
      //     options: {
      //       minimize: true,
      //       removeComments: true,
      //       collapseWhitespace:true
      //     },
          
      //   }
      // },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //     "file-loader"
      //   ]
      // }
    ]
  },
//   plugins: [
//     new GoogleFontsPlugin({
//         fonts: [
//             { family: "Open Sans" },
//             { family: "Roboto", variants: [ "bold" ] }
//         ]
//         /* ...options */
//     })
// ]
  
};


if (ENV === 'production') {
  baseConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
}
// module: [
//   {
//     loader: "babel-loader",
//     test: /\.js/
//   }
// ]