// toda esta programacion de este archivo es delado del servidor lo ejecutara node.js

const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

// es un objeto con caracteristicas
module.exports = {
   module: {
      rules: [
         // esto son reglas
         {
            // que archivos soprtara esta regla
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
            }
         },
         // creamos otra regla
         {
            test: /\.html$/i,
            // le diremos que use los loaders en esta vez usamos un array para usar varios loader (pero solo usamos uno xD)
            use: [
               {
                  loader: 'html-loader',
                  options: {
                     minimize: true //para minimizar el html
                  }
               }
            ]
         },
         {
            test: /\.css$/i,
            use: [
               MiniCssExtractPlugin.loader,
               'css-loader'
            ]

         },
         {
            test: /\.(jpe?g|png|gif|svg|webp)$/i,
            use: ["file-loader?name=assets/[name].[ext]"]

         },
         {
            test: /\.(otf)$/i,
            use: ["file-loader?name=assets/[name].[ext]"]

         },

      ]
   },
   // utilizamos le plugin
   plugins: [
      new HTMLWebpackPlugin({
         template: './src/index.html',
         filename: './index.html'
      }),
      // le decimos que bamos a utilizar
      new MiniCssExtractPlugin()
   ]
}