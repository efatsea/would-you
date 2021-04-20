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
        
        const voteOne = optionOne.votes.length
        const voteTwo = optionTwo.votes.length
        console.log(voteOne)
  		
    	return(
          	<Card style={{ width: '18rem' }}>
              <Card.Header>{`Asked by ${authorUser}`}</Card.Header>
				<h4>Results:</h4>
              <ListGroup variant="flush">
                <ListGroup.Item>{optionOne.text}</ListGroup.Item>
				<ListGroup.Item>{`${voteOne}/3`}</ListGroup.Item>
                <ListGroup.Item>{optionTwo.text}</ListGroup.Item>
				<ListGroup.Item>{`${voteTwo}/3`}</ListGroup.Item>
        
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