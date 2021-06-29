import style from './style.css'
import logo from './assets/olapequena.svg'
import presidente from './assets/presidente-atras.png'
import Swal from 'sweetalert2'
// importamos json
import data from './data.json'

import { HelloWord } from './components/HelloWord.ts'

const button = document.getElementById("saludar")

button.onclick = () => {
   Swal.fire({
      title: "Hola",
      text: "Hola como estas"
   })
}

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

let hello = new HelloWord("typescript")

$h1.textContent = hello.saludar()
$logo.src = logo
$img.src = presidente
$nav.innerHTML = menu

$app.appendChild($h1)
$app.appendChild($logo)
$app.appendChild($nav)

// $app.appendChild($img)