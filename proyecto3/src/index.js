import style from './style.css'

const arr = [1, 2, 3, 4]

const codeESNext = () => console.log(...arr)

const app = document.getElementById("app")

console.log("Hola mundo sin configuración con Webpack x2 👌")

codeESNext()

console.log(app)

