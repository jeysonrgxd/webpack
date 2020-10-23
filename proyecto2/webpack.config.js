// importamos el plugin que instalamos para utilizarlo en nuestr configuracion de webpack
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
   output:{
      // le creamos el archivo que sera el js compilado para todos los navegadores y le ponemos un hash unico para ver diferentes compilaciones
      filename:'app.[contenthash].js'
   },
   module:{
      rules:[
         {
            test:/\.js$/,
            exclude: /node_modules/,
            use:{
               loader:'babel-loader',
               options:{
                  presets:['@babel/preset-env']
               }
            }
         }
      ]
   },
   plugins:[
      // esta configuracion esta en : https://github.com/jantimon/html-webpack-plugin
      new HtmlWebpackPlugin({
        title:"Practicando Webpack",
        template:'./src/index.html' 
      })
   ]
}