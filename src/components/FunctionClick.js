import React from 'react'

//function Hello(){
//  return <h3>Test Output</h3>
//}

//Writing using ES6 arrow function syntax

//const Hello = ({name, secondname}) => {
//const FunctionClick = () => {
//Another way of writing function
function FunctionClick(){

function ClickHandler(){
  console.log('Button Clicked!')

}

  return (
    <div>
    <button onClick={ClickHandler}>Click</button>
  </div>
)}
//default allows us to import component with any name in the app.js
export default FunctionClick
