import React, { Component } from "react"
import { connect } from "react-redux"
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'


class Poll extends Component {
  	
	render(){
    	const { users, question, authorUser, authedUser } = this.props
        
        if ( question === null ) {
        	return <p>This question does not exist</p>
        }
      
      	const {
        		id, author, timestamp, optionOne, optionTwo
        } = question
  		
    	return(
          	<Card style={{ width: '18rem' }}>
              <Card.Header>{`Asked by ${authorUser}`}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Answer One</ListGroup.Item>
                <ListGroup.Item>Answer Two</ListGroup.Item>
        
              </ListGroup>
            </Card>
        )
    }
  
}

function mapStateToProps ({ users, questions, authedUser },{id}) {
	const question = questions[id];
  	const authorUser = users[question.author].name
	return {
		users,
      	question,
      	authorUser,
		authedUser
      	
    }
}

export default connect(mapStateToProps) (Poll);