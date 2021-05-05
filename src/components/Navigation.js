import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect, NavLink } from 'react-router-dom'
import { setAuthedUser } from "../actions/authedUser"
import Button from 'react-bootstrap/Button'


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
        	<nav className = "navi">
          		<ul>
                    <li><NavLink to ='/dashboard' exact activeClassName='active'>
                            Home
                    </NavLink></li>
                    <li><NavLink to ='/newQuestion' exact activeClassName='active'>
                            New_Question
                    </NavLink></li>
          			<li><NavLink to ='/leaderBoard' exact activeClassName='active'>
                            LeaderBoard
                    </NavLink></li>
          			<hr/>
                    <li >
                        {`Hello ${userName}`}
                    </li>
					<li>
						<img
                          src={userAvatar}
                          width = "50"
                          heigth = "50"
                        />
					</li>
                    <li><Button style={{ backgroundColor:"#bf6464", border:"0px"}} onClick={this.handleClick}>
                        Log Out
                    </Button></li>
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