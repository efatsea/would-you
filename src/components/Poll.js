import React, { Component } from "react"
import { connect } from "react-redux"
import ProgressBar from 'react-bootstrap/ProgressBar'

class Poll extends Component {
  	
	render(){
    	const { users, answer, question, authorUser } = this.props
        
        if ( question === null ) {
        	return <p>This question does not exist</p>
        }
      
      	const {
        		author, optionOne, optionTwo
        } = question
        
        const voteOne = optionOne.votes.length
        const voteTwo = optionTwo.votes.length
        const n1 = voteOne*100/3
        const now1 = n1.toFixed(0)
        const n2 = voteTwo*100/3
        const now2 = n2.toFixed(0)
       
       
  		
    	return(
          	<div className = "question-info" >
              <h3 >{`Asked by ${authorUser}`}</h3>
				
				<span className="inline">
                  <img
                  src={users[author].avatarURL}
                  alt = {`Avatar of ${authorUser}`}
                  />

                  <div className="question-overview">
					<h4>Results:</h4>
					<div className = "question-poll" style={{backgroundColor: "optionOne"===answer ? "#ebefe3" : "white" }}>
						{"optionOne"===answer ? <p id="vote">Your vote</p> :null}
                        <p><b>{optionOne.text}</b></p>
                        <ProgressBar now={now1} label={`${now1}%`} />
                        <p>{`${voteOne} out of 3 votes`}</p>
					</div>
                 	<div className = "question-poll" style={{backgroundColor: "optionTwo"===answer ? "#ebefe3" : "white" }}>
						{"optionTwo"===answer ? <p id="vote">Your vote</p> :null}
                        <p><b>{optionTwo.text}</b></p>
                        <ProgressBar now={now2} label={`${now2}%`} />
                        <p>{`${voteTwo} out of 3 votes`}</p>
					</div>
                  </div>
                        
				</span>
            </div>
        )
    }
  
}

function mapStateToProps ({ users, questions, authedUser },{id}) {
	const answer = users[authedUser].answers[id]
	const question = questions[id];
  	const authorUser = users[question.author].name
	return {
		users,
      	question,
      	authorUser,
		authedUser,
      	answer,
		
    }
}

export default connect(mapStateToProps) (Poll);