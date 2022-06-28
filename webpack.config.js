const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  mode: "development", //au niveau de partie developpement
  module: {
    rules: [
        {
          test: /\.html$/,
          
          use:  [ 
            {
              loader: 'html-loader',
              options: {
                minimize: true, //pour minimiser le taille
              },
              
            
            }
          ]
        
        },
        {
          test: /\.css$/,
          use: [
            "style-loader", 
            "css-loader"]
        }
    ]

  },
  plugins: [
    new HtmlWebpackPlugin({
    filename: "index.html",
    template: './src/index.html'})
  ],
}











// const path = require('path');

// module.exports = {
//   module: {
//     rules: [{ test: /\.txt$/, use: 'raw-loader' }],
//   },
// };


// module.exports = {
//   module: {
//     rules: [
//       { test: /\.css$/, use: 'style-loader' },
//       { test: /\.css$/, use: 'css-loader' },
//     ],
//   },
// };

// // ---------------------------------------------------------------

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           { loader: 'style-loader' },
//           { loader: 'css-loader' }
//         ]
//       }
//     ]
//   }
// }
