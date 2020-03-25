import React, { Component } from 'react'

class UserGreeting extends Component {

constructor(props){
  super()
  this.state = {
    isLoggedIn : true
  }
}

render(){

//Third Approach
return (
  this.state.isLoggedIn ?
 <div>Welcome User</div>  :
 <div>Welcome Guest</div>
)



//Second Approach
// let message
// if (this.state.isLoggedIn) {
//   message = <div>Welcome User</div>
// }
// else {
//   message = <div>Welcome Guest</div>
// }
// return <div>{message}</div>


//First Approach
  // if (this.state.isLoggedIn) {
  //   return (
  //     <div>
  //     <p>This is if else testing</p>
  //     <p>Welcome User</p>
  //     </div>
  //   )
  // }
  // else {
  // return (
  // <div>
  // <p>This is if else testing</p>
  //   <p>Welcome Guest</p>
  // </div>
  // )
  // }

}
}
export default UserGreeting
