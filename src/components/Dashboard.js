import React, { Component } from "react"
import { connect } from "react-redux"

import LogIn from "./LogIn"
import Navigation from "./Navigation"
import Home from "./Home"


class Dashboard extends Component {
	render(){
    	return(
        	<div>
          		<Home/>
          		
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