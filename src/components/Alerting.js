import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'
import '../style.css'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Page404 from "./Page404"



class Alerting extends Component {
  
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
    const url = !this.props.url ? "Page404"  : this.props.url
        if (clicked === true) {
          return (
          <Redirect to={{
            pathname :  "/",
            state : { 
            	url: url
            }
            }}/>
          )
        }
  	return (
       
      <Alert variant="danger">
        Please Log in!
         <br/>
         <br/>
       	<Button onClick={this.handleClick}>
           Log In
        </Button>
      </Alert>
  	);
  }
  
}

export default connect() (Alerting);