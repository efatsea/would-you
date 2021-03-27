import React, { Component } from "react"
import { connect } from "react-redux"

import LogIn from "./LogIn"


class Dashboard extends Component {
	render(){
    	return(
        	<div>
          		<nav>Navigation</nav>
          		<LogIn/>
          		{this.props.questions[2]}
          	</div>
        )
    }
  
}

function mapStateToProps ({ questions , users }) {
	return {
    	questions:questions,
      	users:users
    }
}

export default connect(mapStateToProps) (Dashboard);