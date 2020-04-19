import React from 'react'

// function Greet() {
//     return <h1>Hello Sean!</h1>
// }

//ES6 Arrow function preferred
//this is called a named export, you will have to import with the exact same name
export const Greet = props => {
    const { name, heroName } = props
    return (
        <div>
            <h1>
                Hello {name} a.k.a. {heroName}
            </h1>
        </div>

    )
}

//Greet component not connected until you export, 
// export default Greet