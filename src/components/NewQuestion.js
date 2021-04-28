import React, { Component } from "react"
import { connect } from "react-redux"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


import Navigation from "./Navigation"


class NewQuestion extends Component {
  	state = {
      optionOne: null,
      optionTwo: null,
      hasClicked: false
    }

  	handleChange = (e) =>{
      const optionOne = e.target.value
      this.setState(()=>({
          optionOne
      }))

    }
	
	handleChange2 = (e) =>{
      const optionTwo = e.target.value
      this.setState(()=>({
          optionTwo
      }))
    }

    handleClick = (e) => {
      e.preventDefault()
      this.setState(()=>({
    	hasClicked : true
   	  }))
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