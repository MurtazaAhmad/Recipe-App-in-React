import React, { Component } from 'react'

class Count extends Component{

constructor(props){
  super(props)
  this.state = {
    counter:1
  }
}

increment(){
  this.setState({
    counter: this.state.counter + 1
  }//,
  //() => {
    //console.log('Callback value', this.state.counter)
  //}
)
console.log(this.state.counter)

}

render(){
  return (
    <div>

    <p>More with setState</p>
    <h3>Count is : {this.state.counter}</h3>
    <button onClick={ () => this.increment() }>Increment</button>
    </div>
  )
}
}

export default Count
