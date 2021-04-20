import React, { Component } from "react"
import { connect } from "react-redux"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import  Navigation  from "./Navigation"
import Poll from "./Poll"
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
      const {dispatch, authedUser, id} = this.props
      const { answer } = this.state
      console.log(authedUser, id, answer)
      dispatch(handleAddAnswer({
        authedUser,
        qid:id, 
        answer:answer}))

    }
  	
	render(){
    	const { users, question, authorUser, authedUser } = this.props
        
        if ( question === null ) {
        	return <p>This question does not exist</p>
        }
      
      	const {
        		id, author, timestamp, optionOne, optionTwo
        } = question
		const userAvatar =  users[authorUser].avatarURL

    	return(
        	<div>
          		<Navigation/>
     			<div className="question-info">
          			
          			<img
						src={userAvatar}
						alt = {`Avatar of ${authorUser}`}
						width = "30"
						height = "30"
					/>
          			<h3>{`${users[authorUser].name} asks:`}</h3>
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
				<Poll id={id} answer={this.state.answer}/>
          	</div>
        )
    }
  
}

function mapStateToProps ({ users, questions, authedUser },{match}) {
	const id = match.params.id
	console.log(match)
	const question = questions[id];
	const authorUser = users[question.author].id
	console.log(authorUser)
	return {
		users,
      	question,
      	authorUser,
		authedUser,
		id
      	
    }
}

export default connect(mapStateToProps) (QuestionTo);