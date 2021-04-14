import React, { Component } from "react"
import { connect } from "react-redux"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router-dom'

import { setAuthedUser } from "../actions/authedUser"
import Dashboard from "./Dashboard"


class LogIn extends Component {
  
  state = {
  	userName: null,
    hasSubmit : false
  }
  handleChange = (e) =>{
  	const userName = e.target.value
    this.setState(()=>({
    	userName
    }))
    
  }
  handleClick = (e) => {
	e.preventDefault()
  	const { dispatch} = this.props
    const { userName } = this.state
    this.setState(()=>({
    	hasSubmit: true
    }))
    dispatch(setAuthedUser(userName))
  }

  render() {
    const { hasSubmit } = this.state
    if (hasSubmit === true) {
      return (
      <Redirect to="/dashboard" />
      )
    }
    const {names, userAvatar, keys} = this.props
	const usersLength = []
	for (var i = 0; i < names.length; i++) {
        usersLength[i] =i
    }
	console.log(this.state)
	
    
  	return (
      <div className="login">
      	<h2>Welcome to the Would you... App!</h2>
      	<p>Please sign in to continue</p>
      	<br/>
      	<label>Sign In</label>
      	<Form onSubmit={this.handleClick}>
          <Form.Label className="my-1 mr-2" htmlFor="loginform">
          </Form.Label>
          <Form.Control
            as="select"
            className="my-1 mr-sm-2"
            id="loginform"
            custom
			onChange={(e) => this.handleChange(e)}
          >
      		
            <option value="0">Choose...</option>
      		{usersLength.map((i)=>(
    			 <option key={keys[i]} value={keys[i]} data-icon={userAvatar[i]}>{names[i]}</option>
    		))}
			
          </Form.Control>
          <Button
			type="submit" 
			className="my-1"
		  >
            Log In
          </Button>
        </Form>
      </div>
	
  	);
  }
  
}

function mapStateToProps ( { users, authedUser } ) {
  	const keys = Object.keys(users);
    const names = keys.map((id)=>(users[id].name));
  	const userAvatar = keys.map((id)=>(users[id].avatarURL))
	return {
    	names,
      	authedUser,
      	userAvatar,
      	keys
    }
}

export default connect(mapStateToProps) (LogIn);
