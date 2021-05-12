import React, { Component } from "react"
import { connect } from "react-redux"
import Navigation from "./Navigation"
import Home from "./Home"
import Alerting from "./Alerting"


class Dashboard extends Component {
	render(){
      	const { authedUser } = this.props
    	return(
          	authedUser === "" || authedUser === null  ? <Alerting/> : 
        	<div>
          		<Navigation/>
          		<Home/>

          	</div>
        )
    }
  
}

function mapStateToProps ({ questions , users, authedUser }) {
	return {
    	questions:questions,
      	users:users,
      	authedUser
    }
}

export default connect(mapStateToProps) (Dashboard);