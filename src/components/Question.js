import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, withRouter } from 'react-router-dom'


import QuestionTo from "./QuestionTo"

class Question extends Component {
  	state = {
    	hasClicked : false 
    }

	handleClick = (e) => {
      e.preventDefault()
      this.setState(()=>({
      	hasClicked : true
      }))
 	}
	render(){
    	const { users, question, authorUser } = this.props
        
        if ( question === null ) {
        	return <p>This question does not exist</p>
        }
     
      	const {
        		id, author, timestamp, optionOne, optionTwo
        } = question
		
		const { hasClicked } = this.state
        if (hasClicked === true) {
          return (
          <Link to = {`questionToAnswer/${id}`}>
			<QuestionTo id = {id} />
          </Link>
          
          )
        }
        
    	return(
        	<div>
     			<div className="question-info">
          			<img
						src={users[author].avatarURL}
						alt = {`Avatar of ${authorUser}`}
						width = "30"
						height = "30"
					/>
          			<h3>{`${authorUser} asks:`}</h3>
					<br/>
					<h4>Would you rather</h4>
					<p>{`${optionOne.text} or ...`}</p>
					<Link to = {`/questionToAnswer/${id}`}>
						<button>See more</button>
					</Link>
					
					
					
          		</div>
				
          	</div>
        )
    }
  
}

function mapStateToProps ({ users, questions },{id}) {
	const question = questions[id];
  	const authorUser = users[question.author].name
	return {
		users,
      	question,
      	authorUser
      	
    }
}

export default withRouter(connect(mapStateToProps) (Question));