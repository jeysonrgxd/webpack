# CURSO DE WEBPACK

este curso sera tomado de diferentes tutoriales de canales de youtube, blogs, plataformas, etc.

## comandos para instalar webpack y loaders(trabajar con css)

```
npm install -D webpack webpack-cli
npm install webpack webpack-cli --save-dev
npm install -D style-loader css-loader

```

## compilar webpack

```
npx webpack

```
-  Primero especificamos el punto de entrada de la aplicacion
- Output donde pondra la aplicacion por asi decirlo compilado
- loaders: transforma nuestro ficheros como para entender en diferentes navegores, etc.
- plugins : ejecutar codigo en diferentes puntos de webpack (hooks de webpack)

Instalar babel para compilar nuestro javascript y hacerlo compatible con todo los navegdores

```
npm install -D babel-loader @babel/core @babel/preset-env webpack

```
HTML Webpack Plugin  esto no sirve para crearnos un archivo index.html de salida la cual podemos configurar para que le inserte automaticamente el archivo js que compilamos ademas le podemos especificar una plantilla que sera de nuestro src
```
npm i --save-dev html-webpack-plugin       midudev
 
npm i -D html-loader html-webpack-plugin   jonmircha
```

loader para css
```
npm i -D mini-css-extract-plugin css-loader
```

Servidor de desarrollo de webpack

```
npm i -D webpack-dev-server
```

Manejo de archivos y lectura de archivos

```
npm i -D file-loader
```
