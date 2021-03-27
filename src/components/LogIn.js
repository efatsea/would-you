import React, { Component } from "react"
import { connect } from "react-redux"
import Dashboard from "./Dashboard"



class LogIn extends Component {
  render() {
  
  	return (
      <div className="login">
      	<h2>Welcome to the Would you... App!</h2>
      	<p>Please sign in to continue</p>
      	<br/>
      	<label>Sign In</label>
      	
      	
      	<button>
      	</button>
      	
      
      </div>
  	);
  }
  
}


export default connect() (LogIn);
