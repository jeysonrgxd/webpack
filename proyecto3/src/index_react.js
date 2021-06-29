import style from './style.css'
import { saludar } from './otroarchivo.js'
import logo from './assets/olapequena.svg'
import presidente from './assets/presidente-atras.png'

import Swal from 'sweetalert2'

// importamos json
import data from './data.json'

const arr = [1, 2, 3, 4]

const button = document.getElementById("saludar")

button.onclick = () => {
   Swal.fire({
      title: "Hola",
      text: "Hola como estas"
   })
}

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
   $img = d.createElement("img"),
   $nav = document.createElement("nav");

let menu = ""

data.links.forEach(el => { menu += `<a href="${el[1]}">${el[0]}</a>` })

$logo.classList.add("icon")

$h1.textContent = "Hola mundo con webpack"
$logo.src = logo
$img.src = presidente
$nav.innerHTML = menu

$app.appendChild($h1)
$app.appendChild($logo)
$app.appendChild($nav)

// $app.appendChild($img)