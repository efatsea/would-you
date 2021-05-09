import React, { Component } from "react"
import { connect } from "react-redux"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import  Navigation  from "./Navigation"
import Poll from "./Poll"
import { handleUserAnswer } from "../actions/shared"

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
      const qid = id
      dispatch(handleUserAnswer({
        authedUser,
        qid, 
        answer}))
      

    }
	render(){
    	const { users, question, authorUser, authedUser } = this.props
        if ( question === null ) {
        	return <p>This question does not exist</p>
        }
      
      	const {
        		id, author, timestamp, optionOne, optionTwo
        } = question
		const ids = Object.keys(users[authedUser].answers)
		const userAvatar =  users[authorUser].avatarURL
		const hasClicked = this.state.hasClicked
		const idA = ids.filter(i => i===id)
		const idStr = `"${id}"`
		const answ = users[authedUser].answers.idStr
		console.log(answ)
		
    	return(
        	<div>
          		<Navigation/>
          		{ idA[0]===id ? <Poll id= {id} answer={answ}/> 
     			: <div id="qi">
          			<div className = "question-poll">
          			<img
						src={userAvatar}
						alt = {`Avatar of ${authorUser}`}
						width = "100"
						height = "100"
					/>
          			<h3>{`${users[authorUser].name} asks:`}</h3>
					<br/>
					<h4>Would you rather</h4>
					<Form onSubmit={this.handleClick} onChange={(e) => this.handleChange(e)}>
                        <Form.Check
                          type="radio"
                          id="optionOne"
                          label={optionOne.text}
						  name = "group1"
						  value="optionOne"
                        />
						<h4>or</h4>
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
          		</div> }
          	</div>
        )
    }
  
}

function mapStateToProps ({ users, questions, authedUser },{match}) {
	const id = match.params.id
	const question = questions[id];
	const authorUser = users[question.author].id
	return {
		users,
      	question,
      	authorUser,
		authedUser,
		id
      	
    }
}

export default connect(mapStateToProps) (QuestionTo);