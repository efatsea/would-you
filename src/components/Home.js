import React, { Component } from "react"
import { connect } from "react-redux"

class Home extends Component {
  	
	render(){
    	const { users, authedUser, questions, answeredQ } = this.props
  		console.log(answeredQ)
        
    	return(
        	<div>
     			<div className="answered">
          			<ul>
          				{authedUser
          					?answeredQ.map((id)=>{
        						return(<li>{questions[id].optionOne.text}</li>)
        						})
                        	: <p>Waiting...</p>}
          			</ul>
          		</div>
				<div className="unaswered">
					
				</div>
          	</div>
        )
    }
  
}

function mapStateToProps ({ authedUser, users, questions }) {
	const answeredQ = authedUser ? Object.keys(users[authedUser].answers) : null
	return {
    	authedUser,
		users,
      	questions,
      	answeredQ
    }
}

export default connect(mapStateToProps) (Home);