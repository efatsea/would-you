import React, { Component } from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


import Dashboard from "./Dashboard"
import Login from './LogIn'
import Home from './Home'
import Question from './Question'
import QuestionTo from './QuestionTo'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import { handleInitialData } from "../actions/shared";



class App extends Component {
  componentDidMount() {
  	this.props.handleInitialData();
  }
  render() {
    const { authedUser } = this.props;
  	return (
      <Router>
      	<div className="App">
      		<Route path = '/' exact component ={Login} />
          	<Route path = '/dashboard' component = {Dashboard} />
			<Route path = '/leaderBoard' component = {LeaderBoard} />
			<Route path = '/home' component ={Home} />
			<Route path = '/newQuestion' component ={NewQuestion} />
			<Route path = '/question/:id' component ={Question} />
			<Route path = '/questionToAnswer/:id' component ={QuestionTo} />
      </div>
      </Router>
      
  	);
  }
  
}

function mapStateToProps({ authedUser}) {
	return {
    	authedUser
    }
}

export default connect(mapStateToProps, { handleInitialData }) (App);
