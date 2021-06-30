import style from './style.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { HelloWord } from './components/HelloWord.jsx'

// importamos json
import data from './data.json'

ReactDOM.render(
   <HelloWord name="jeyson" data={data}></HelloWord>,
   document.getElementById("app")
)

