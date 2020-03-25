import React, { Component } from 'react'

class Great extends Component{

constructor(){
  super()
  this.state = {
    message: 'Heroes!'
  }
  //Code for 2nd approach
this.changeMessage = this.changeMessage.bind(this)
}

changeMessage(){
  this.setState({
    message: 'Never Die'
  })
}

render(){
  return (
    <div>
    <p>Great JS starts</p>
    <h3>{this.state.message}</h3>
    <p>First Approach</p>
    <button onClick={ () => this.changeMessage() }>Subscribe</button>

    <p>Second Approach</p>
    <button onClick={this.changeMessage}>Subscribe</button>
    <p>Great JS Ends</p>
    </div>
  )
}
}

export default Great
