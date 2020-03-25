import React, { Component } from 'react'

class Form extends Component{

  constructor(props){
    super()
    this.state = {
      username: '',
      comments: '',
      choice: 'react',
      imageUrl: 'https://picsum.photos/200'
    }
  }
  //event itself is passed to the arrow function
  //for handling onchange value of input field
  handleUsernameChange = (event) => {
    this.setState({
  username: event.target.value

})
  }

  //onchanging comments value
  handleCommentsChange = (event) => {
    this.setState({
  comments: event.target.value

})
}

//onchanging select
handleSelectChange = (event) => {
  this.setState({
choice: event.target.value

})
}

handleSubmit = (event) => {
//alert(`hello`)
  alert(`${this.state.username} ${this.state.comments} ${this.state.choice}`)
  event.preventDefault()
}

  render(){
    const check = {
      marginRight:'5px'
    }
    return (
    <div>
      <br/>
      <form onSubmit={this.handleSubmit}>
      <div>
      <label style={check}>Full Name</label>
      <input type='text' value={this.state.username}
      onChange={this.handleUsernameChange}
      />
      </div>
      <div>
      <label style={check}>Comments</label>
      <textarea value={this.state.comments}
      onChange={this.handleCommentsChange}
      ></textarea>
      </div>
      <div>
      <label style={check}>Select</label>
      <select value={this.state.choice}
      onChange={this.handleSelectChange}>
      <option value="React">React</option>
      <option value="Node">Node</option>
      <option value="Vue">Vue</option>
      <option value="Angular">Angular</option>
      </select>
      </div>
      <button type='submit' className='btn btn-primary'>Submit</button>
      </form>

      <img src={this.state.imageUrl} />
      </div>
    )
  }
}
export default Form
