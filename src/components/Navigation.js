import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect, NavLink } from 'react-router-dom'
import { setAuthedUser } from "../actions/authedUser"

class Navigation extends Component {
  
  	state = {
    	logoutClicked : false
    }
  
  	handleClick = (e) => {
      e.preventDefault()
      const userName = null
      this.setState(()=>({
      	logoutClicked : true
      }))
      const { dispatch} = this.props
      dispatch(setAuthedUser(userName))
 	}

	render(){
      	const { logoutClicked } = this.state
        if (logoutClicked === true) {
          return (
          <Redirect to="/" />
          )
        }
      
    	const { users, authedUser } = this.props
  		const userAvatar =  authedUser ? users[authedUser].avatarURL : null
        const userName = authedUser ? users[authedUser].name : null
    	return(
        	<nav className = "nav">
          		<ul>
                    <li><NavLink to ='/home' exact activeClassName='active'>
                            Home
                    </NavLink></li>
                    <li><NavLink to ='/' exact activeClassName='active'>
                            New Question
                    </NavLink></li>
          			<li><NavLink to ='/' exact activeClassName='active'>
                            LeaderBoard
                    </NavLink></li>
                    <li> <span>
                        {`Hello ${userName}`}
                        <img
                          src={userAvatar}
                          width = "50"
                          heigth = "50"
                        />

                    </span></li>
                    <li><button onClick={this.handleClick}>
                        Log Out
                    </button></li>
          		</ul>
          	</nav>
        )
    }
  
}

function mapStateToProps ({ authedUser, users }) {
	
	return {
    	authedUser,
		users,
    }
}

export default connect(mapStateToProps) (Navigation);