import React from 'react'

//function Hello(){
//  return <h3>Test Output</h3>
//}

//Writing using ES6 arrow function syntax

//const Hello = ({name, secondname}) => {
const Hello = (props) => {
  const {name, secondname} = props
  return (
    <div>
    <h3>Hello {name} {secondname} </h3>

  </div>
)}
//default allows us to import component with any name in the app.js
export default Hello
