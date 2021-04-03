import React, { Component } from "react"
import { connect } from "react-redux"


class Navigation extends Component {
  	
  	
	render(){
    
    	return(
        	<div>
     			<span> Home </span>
          		<span> New Question </span>
          		<span> Leader Board </span>
          		<span>
          			{`Hello ${this.props.authedUser}`}
					<span>
						
					</span>
				</span>
          		
          	</div>
        )
    }
  
}

function mapStateToProps ({ authedUser, users }) {
	
	return {
    	authedUser,
		users,
		
		
    }
}

export default connect(mapStateToProps) (Navigation);