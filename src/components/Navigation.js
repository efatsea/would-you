import React, { Component } from "react"
import { connect } from "react-redux"

class Navigation extends Component {
  	
	render(){
    	const { users, authedUser } = this.props
  		const userAvatar =  authedUser ? users[authedUser].avatarURL : null
        const userName = authedUser ? users[authedUser].name : null
    	return(
        	<div>
     			<span> Home </span>
          		<span> New Question </span>
          		<span> Leader Board </span>
          		<span>
          			{`Hello ${userName}`}
                    <img
                      src={userAvatar}
                      width = "50"
                      heigth = "50"
                    />
					
				</span>
          		
          	</div>
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