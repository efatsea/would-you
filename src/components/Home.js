import React, { Component } from "react"
import { connect } from "react-redux"

import Question from "./Question"



class Home extends Component {
  	
	render(){
    	const { users, authedUser, questions, answeredQ, unansweredQ } = this.props
  		console.log(unansweredQ)
        
    	return(
        	<div className="home">
          		
     			<div className="answered">
          			<h3>Answered Questions</h3>
          			<ul>
          				{authedUser
          					?answeredQ.map((data)=>{
        						return(<li key={data}><Question id ={data}/></li>)
        						})
                        	: <p>Waiting...</p>}
          			</ul>
          		</div>
				<div className="unanswered">
					<h3>Unanswered Questions</h3>
					<ul>
          				{authedUser
          					?unansweredQ.map((data)=>{
        						return(<li key={data}><Question id ={data}/></li>)
        						})
                        	: <p>Waiting...</p>}
          			</ul>
				</div>
          	</div>
        )
    }
  
}

function mapStateToProps ({ authedUser, users, questions }) {
	const answeredQ = authedUser ? Object.keys(users[authedUser].answers) : null ;
    const allQuestions = Object.keys(questions);
    const unansweredQ = authedUser ? allQuestions.filter(quest => !answeredQ.includes(quest)) : null;
    
	return {
    	authedUser,
		users,
      	questions,
      	answeredQ,
      	unansweredQ
    }
}

export default connect(mapStateToProps) (Home);