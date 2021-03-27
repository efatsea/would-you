import React, { Component } from "react"
import { connect } from "react-redux"
import Dashboard from "./Dashboard"

import { handleInitialData } from "../actions/shared";



class App extends Component {
  componentDidMount() {
  	this.props.handleInitialData();
  }
  render() {
    const { authedUser } = this.props;
  	return (
      <div className="App">
          <Dashboard/>
      
      </div>
  	);
  }
  
}

function mapStateToProps({ authedUser}) {
	return {
    	authedUser
    }
}

export default connect(mapStateToProps, { handleInitialData }) (App);
