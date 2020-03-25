import React, { Component } from 'react'

class Welcome extends Component{
render(){
const {name,secondname} = this.props
//  return <h3>Hey!! {this.props.name} {this.props.secondname}</h3>
return <h3>Hey!! {name} {secondname}</h3>

}

}

export default Welcome
