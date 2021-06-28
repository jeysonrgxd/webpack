import style from './style.css'
import { saludar } from './otroarchivo.js'
import logo from './assets/olapequena.svg'

const arr = [1, 2, 3, 4]

const codeESNext = () => console.log(...arr)

const app = document.getElementById("app")

console.log("Hola mundo sin configuración con Webpack x2 👌")

codeESNext()

console.log(app)

// document.getElementById("app").innerHTML = `<img src="${logo}" alt="Webpack" />`
const d = document,
   $app = d.getElementById("app"),
   $h1 = d.createElement("h1"),
   $logo = d.createElement("img"),
   $img = d.createElement("img")

$logo.classList.add("icon")

$h1.textContent = "Hola mundo con webpack"
$logo.src = logo

$app.appendChild($h1)
$app.appendChild($logo)