import React, { Component } from "react"
import { connect } from "react-redux"

import Question from "./Question"

class Home extends Component {
  	
	render(){
    	const { users, authedUser, questions, answeredQ, unansweredQ } = this.props
  		console.log(unansweredQ)
        
    	return(
        	<div>
     			<div className="answered">
          			<ul>Answered Questions
          				{authedUser
          					?answeredQ.map((data)=>{
        						return(<li key={data}><Question id ={data}/></li>)
        						})
                        	: <p>Waiting...</p>}
          			</ul>
          		</div>
				<div className="unanswered">
					
				</div>
          	</div>
        )
    }
  
}

function mapStateToProps ({ authedUser, users, questions }) {
	const answeredQ = authedUser ? Object.keys(users[authedUser].answers) : null ;
    const allQuestions = Object.keys(questions);
    let unansweredQ =[]
    
    
  	
  
	return {
    	authedUser,
		users,
      	questions,
      	answeredQ,
      	unansweredQ
    }
}

export default connect(mapStateToProps) (Home);