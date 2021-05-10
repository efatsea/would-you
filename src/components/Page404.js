import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'
import '../style.css'
import Button from 'react-bootstrap/Button'



class Page404 extends Component {
  
  state = {
    	clicked : false
    }

  handleClick = (e) => {
    e.preventDefault()
    this.setState(()=>({
      clicked : true
    }))
  }
  render() {
    const { clicked } = this.state
        if (clicked === true) {
          return (
          <Redirect to="/dashboard" />
          )
        }
  	return (
          <div>
          	<h4>Something went wrong... :(
				<br/>
				Return Home</h4>
            <Button onClick={this.handleClick}>
               Home
            </Button>
          </div>
      	
      
  	);
  }
  
}

export default connect() (Page404);