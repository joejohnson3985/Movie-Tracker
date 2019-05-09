import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { addUserData } from '../../APICalls/APICalls';


class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
       name: '',
      status: ''
    }
  }

  handleChange = (e) => {
    let value = e.target.value.toLowerCase()
    this.setState({
      [e.target.name]: value
    })
  }


  handleAddUser = (e) => {
    e.preventDefault();
    const URL = 'http://localhost:3000/api/users/new'
    try {
      addUserData(URL, {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      this.setState({ status: 'success' })
      console.log('User Added')
    } catch(error) {
      console.log('Something went wrong')
    }
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleAddUser}>
      <h3>Make an account</h3>
          <input onChange={this.handleChange} name="name" placeholder="Name" value ={this.state.name}/>
          <input onChange={this.handleChange} name="email" placeholder="Email" value ={this.state.email}/>
          <input onChange={this.handleChange} name="password" placeholder="Password" value={this.state.password}/>
            <button> Sign Up </button>
      </form>
      </div>
    );
  }
}

export default  AddUser