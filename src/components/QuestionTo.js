import React, { Component } from "react"
import { connect } from "react-redux"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { handleAddAnswer } from "../actions/questions"

class QuestionTo extends Component {
  	state = {
      answer: null,
    }
    handleChange = (e) =>{
      const answer = e.target.value
      this.setState(()=>({
          answer
      }))

    }
    handleClick = (e) => {
      e.preventDefault()
      const {authedUser, id} = this.props
      const { dispatch} = this.props
      const { answer } = this.state
      dispatch(handleAddAnswer(id, authedUser, answer))

    }
  	
	render(){
      	console.log(this.state.answer)
    	const { users, question, authorUser } = this.props
        
        if ( question === null ) {
        	return <p>This question does not exist</p>
        }
      
      	const {
        		id, author, timestamp, optionOne, optionTwo
        } = question
  		
        
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
					<Form onSubmit={this.handleClick} onChange={(e) => this.handleChange(e)}>
                        <Form.Check
                          type="radio"
                          id="optionOne"
                          label={optionOne.text}
						  name = "group1"
						  value="optionOne"
                        />
                        <Form.Check
                          type="radio"
                          id="optionTwo"
                          label={optionTwo.text}
						  name = "group1"
						  value="optionTwo"
                        />
						<Button
                          type="submit" 
                          className="my-1"
                        >
                          Submit
                        </Button>
					</Form>
          		</div>
				
          	</div>
        )
    }
  
}

function mapStateToProps ({ users, questions, authedUser },{id}) {
	const question = questions[id];
  	const authorUser = users[question.author].name
	return {
		users,
      	question,
      	authorUser
      	
    }
}

export default connect(mapStateToProps) (QuestionTo);