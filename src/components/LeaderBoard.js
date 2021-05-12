import React, { Component } from "react"
import { connect } from "react-redux"

import Alerting from "./Alerting"
import Navigation from "./Navigation"


class LeaderBoard extends Component {
  	
	render(){
    	const { users, authedUser, keyl } = this.props
        const colors =[
          "#bf9e32",
          "#a8a9ad",
          "#cd7f32"]
    	return(
          authedUser === "" || authedUser === null  ? <Alerting/> : 
        	<div className = "LeaderBoard">
          	<Navigation/>
              <ul>
         			{keyl.map((ke)=>{
          			
          			return(
						<li className="leader-li" key={ke}>
							
							<div className="leader">
                              <h3 style={{backgroundColor: 
                                         ke===keyl[0] ? colors[0] 
										 : ke===keyl[1] ? colors[1] 
										 : ke===keyl[2] ? colors[2]  :null}} >{users[ke].name}</h3>
                              <span className="inline">
                                  <img
                                      src={users[ke].avatarURL}
                                      alt = {`Avatar of ${users[ke].name}`}

                                  />

                                  <div className= "quest">
                                      <h4>Answered Questions: {Object.keys(users[ke].answers).length}</h4>
									  <br/>
                                      <h4>Created Questions: {Object.keys(users[ke].questions).length}</h4>
                                  </div>
                                  <h4 className="score">Score:<br/><br/> {Object.keys(users[ke].answers).length + Object.keys(users[ke].questions).length }</h4>

                              </span> 
							</div>
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
    const sorted = keyl.sort((a,b)=>
    	(Object.keys(users[b].answers).length + Object.keys(users[b].questions).length) - (Object.keys(users[a].answers).length + Object.keys(users[a].questions).length)
    )
    
	return {
      	sorted,
    	authedUser,
		users,
      	questions,
      	names,
      	keyl,
     
    }
}

export default connect(mapStateToProps) (LeaderBoard);