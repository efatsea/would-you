import React, { Component } from "react"
import { connect } from "react-redux"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dashboard from "./Dashboard"



class LogIn extends Component {
  render() {
    const {names} = this.props
    
  	return (
      <div className="login">
      	<h2>Welcome to the Would you... App!</h2>
      	<p>Please sign in to continue</p>
      	<br/>
      	<label>Sign In</label>
      	<Form>
          <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
          </Form.Label>
          <Form.Control
            as="select"
            className="my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            custom
          >
      		
            <option value="0">Choose...</option>
      		{names.map((name)=>(
    			 <option value={name}>{name}</option>
    		))}
          </Form.Control>
          <Button type="submit" className="my-1">
            Log In
          </Button>
        </Form>
      </div>

  	);
  }
  
}

function mapStateToProps ( { users } ) {
  	const keys = Object.keys(users);
    const names = keys.map((id)=>(users[id].name));
	return {
    	names
    }
}

export default connect(mapStateToProps) (LogIn);
