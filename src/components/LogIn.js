import React, { Component } from "react"
import { connect } from "react-redux"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { setAuthedUser } from "../actions/authedUser"
import Dashboard from "./Dashboard"


class LogIn extends Component {
  
  state = {
  	userName: null,
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
    dispatch(setAuthedUser(userName))
  }

  render() {
    const {names} = this.props
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
      		{names.map((name)=>(
    			 <option value={name}>{name}</option>
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
	return {
    	names,
      	authedUser,
    }
}

export default connect(mapStateToProps) (LogIn);
