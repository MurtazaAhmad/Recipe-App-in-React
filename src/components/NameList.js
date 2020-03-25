import React from 'react'
function NameList(){
  const names = ['Robert','John','Jessica','Steven']
  const nameList = names.map(name => <h3>{name}</h3>)
  return <div>{nameList}</div>
}
//default allows us to import component with any name in the app.js
export default NameList
