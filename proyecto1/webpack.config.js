const path = require('path')

const cssRules = {
   // busca todos los archivos que tienen la extencion .css
   test: /\.css$/,

   // despues usar los loaders 
   use: [
      'style-loader',
      'css-loader'
   ]
}

module.exports = {
   // ubicamos el archivo donde por asi decirlo compilara otimizara webpack 
   entry: './src/index.js',
   
   output:{
      // archivo final done pondra todo el resultado 
      filename: 'main.js',

      // donde pondra este archivo main.js
      path:path.resolve(__dirname,'dist')
   },
   module:{
      rules:[
         cssRules
      ]
   }

};