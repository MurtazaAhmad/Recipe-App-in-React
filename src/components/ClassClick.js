import React, { Component } from 'react'

class ClassClick extends Component{

  //We do not write 'function' keyword in classes
  ClickHandler(){
    console.log('Class Button Clicked!')
  }

render(){
  return (
    <div>
    <p>First Approach</p>
    <button onClick={this.ClickHandler}>Click Me</button>

    <p>Second Approach</p>
    <button onClick={this.ClickHandler}>Click Me</button>
    </div>
  )
}
}

export default ClassClick
