import React, { Component } from "react"
import { connect } from "react-redux"


import Navigation from "./Navigation"


class LeaderBoard extends Component {
  	
	render(){
    	const { users, authedUser, questions, names, keyl } = this.props
        
        
    	return(
        	<div className = "LeaderBoard">
          	<Navigation/>
              <ul>
         			{keyl.map((ke)=>{
          			return(
						<li key={ke}>
                      		<p>{users[ke].name}</p>
      						<p>Answered Questions: {Object.keys(users[ke].answers).length}</p>
							<p>Created Questions: {Object.keys(users[ke].questions).length}</p>
							<p>Score: {Object.keys(users[ke].answers).length + Object.keys(users[ke].questions).length }</p>
      						
      					</li>)
                    })}

              </ul>
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
      	names,
      	keyl,
     
    }
}

export default connect(mapStateToProps) (LeaderBoard);