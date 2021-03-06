import React, { Component } from "react"
import { connect } from "react-redux"
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Question from "./Question"




class Home extends Component {
  	state = {
      anClicked : false,
      unanClicked : true
    }
    handleAnClicked = (e) =>{
      const an = document.getElementById("an")
      const unan = document.getElementById("unan")
      const anbt = document.getElementById("ansButton")
      const unanbt = document.getElementById("unansButton")
      this.setState(()=>({
          	anClicked : true,
        	unanClicked : false
      }))
	  an.style.display = "block"
      unan.style.display = "none"
      anbt.style.backgroundColor = "#5f7daf";
      unanbt.style.backgroundColor = "grey";
    }
	
	handleUnanClicked = (e) =>{
      const an = document.getElementById("an")
      const unan = document.getElementById("unan")
      const anbt = document.getElementById("ansButton")
      const unanbt = document.getElementById("unansButton")
      this.setState(()=>({
          	anClicked : false,
        	unanClicked : true
      }))
	  unan.style.display = "block"
      an.style.display = "none"
      unanbt.style.backgroundColor = "#5f7daf";
      anbt.style.backgroundColor = "grey";
    }
    

	render(){
    	const { authedUser, answeredQ, unansweredQ } = this.props
 
    	return(
          <div>
          	<nav className="questions-nav">
          		<ButtonGroup>
          			<Button
						bsPrefix = "btn"
						onClick = {this.handleUnanClicked}
						className= "ansButton"
						id= "unansButton"
						size= "lg"
						style = {{backgroundColor:"#5f7daf"}}
						block
					>
						Unanswered Questions
					</Button>
					<Button 
          				onClick = {this.handleAnClicked}
						size= "lg"
						className= "ansButton"
						id = "ansButton"
						style = {{backgroundColor:"grey"}}
						block

					>
						Answered Questions
					</Button>
          		</ButtonGroup>
             
            </nav>
        	<div className="home">     		
     			<div id="an" className="answered" style={{display:"none"}}>
          			<ul>
          				{authedUser
          					?answeredQ.map((data)=>{
        						return(<li key={data}><Question id ={data}/></li>)
        						})
                        	: <p>Waiting...</p>}
          			</ul>
          		</div>
				<div id="unan" className="unanswered" style={{display:"block"}}>
					<ul>
          				{authedUser
          					?unansweredQ.map((data)=>{
        						return(<li key={data}><Question id ={data}/></li>)
        						})
                        	: <p>Waiting...</p>}
          			</ul>
				</div>
          	</div>
		  </div>
        )
    }
  
}

function mapStateToProps ({ authedUser, users, questions }) {
	const answeredQ = authedUser ? Object.keys(users[authedUser].answers) : null ;
  	const answeredQue = authedUser ? answeredQ.sort((a,b) => questions[b].timestamp-questions[a].timestamp) :null
    const allQuestions = Object.keys(questions);
    const unansweredQ = authedUser ? allQuestions.filter(quest => !answeredQ.includes(quest)) : null;
  	const unansweredQue = authedUser ? unansweredQ.sort((a,b) => questions[b].timestamp-questions[a].timestamp) :null;
  	
    
	return {
    	authedUser,
		users,
      	questions,
      	answeredQ,
      	unansweredQ
    }
}

export default connect(mapStateToProps) (Home);