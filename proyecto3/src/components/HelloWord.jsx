// import React, { Component } from 'react'

// export class HelloWord extends Component {

//    render() {
//       return (
//          <>
//             <h1>!Hola mundo, Webpack con {this.props.name}</h1>
//          </>
//       )
//    }

// }

import React from 'react'

export const HelloWord = ({ name, data: { links } }) => {

   console.log(links)

   return (
      <>
         <h1>!Hola mundo, Webpack con {name}</h1>

         {links.map((item, x) => (
            <a key={x} href={item[1]}>{item[0]}</a>
         ))}
      </>
   )
}
