import React, { Component } from "react"
import { connect } from "react-redux"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { handleAddQuestion } from "../actions/shared"
import Navigation from "./Navigation"


class NewQuestion extends Component {
  	state = {
      optionOneText: null,
      optionTwoText: null,
      hasClicked: false
    }

  	handleChange = (e) =>{
      const optionOneText = e.target.value
      this.setState(()=>({
          optionOneText
      }))

    }
	
	handleChange2 = (e) =>{
      const optionTwoText = e.target.value
      this.setState(()=>({
          optionTwoText
      }))
    }

    handleClick = (e) => {
      e.preventDefault()
      this.setState(()=>({
    	hasClicked : true
   	  }))
      const { optionOneText, optionTwoText } = this.state
      const { dispatch, authedUser } = this.props
   
      dispatch(handleAddQuestion({
        optionOneText, 
        optionTwoText,
      	authedUser}))
    }
  	
	render(){

    	const { users, authedUser, questions } = this.props

    	return(
        	<div className = "NewQuestion">
          		<Navigation/>
          		<h1>Create New Question</h1>
          		<Form onSubmit={this.handleClick}>
          		  <h2>Please Complete the question:</h2>
          		  <br/>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Would you rather</Form.Label>
                    <Form.Control
          				onChange={(e) => this.handleChange(e)} 
						placeholder="Enter option one"
					/>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Or</Form.Label>
                    <Form.Control
						placeholder="Enter option two"
						onChange={(e) => this.handleChange2(e)}
						/>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
          </div>
        )
    }
  
}

function mapStateToProps ({ authedUser, users, questions }) {
	const keyl = Object.keys(users);
    const names = keyl.map((id)=>(users[id].name));
    
	return {
    	authedUser,
		users,
      	questions,
     
    }
}

export default connect(mapStateToProps) (NewQuestion);