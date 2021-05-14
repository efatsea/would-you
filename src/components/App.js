import React, { Component } from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router'
import '../style.css'
import Dashboard from "./Dashboard"
import Login from './LogIn'
import Home from './Home'
import Question from './Question'
import QuestionTo from './QuestionTo'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import Alerting from "./Alerting"
import Page404 from "./Page404"
import { handleInitialData } from "../actions/shared";



class App extends Component {
  componentDidMount() {
  	this.props.handleInitialData();
  }
  render() {
  	return (
      <Router>
      	<div className="App">
      		<Switch>
      			<Route path = '/' exact component ={Login} />
                <Route path = '/dashboard'  component = {Dashboard} />
                <Route path = '/leaderboard' component = {LeaderBoard} />
                <Route path = '/home' component ={Home} />
                <Route path = '/add' component ={NewQuestion} />
                <Route path = '/question/:id' component ={Question} />
                <Route path = '/questions/:id' component ={QuestionTo} />
				<Route path = '/page404' component ={Page404} />
				<Route component={Alerting}/>
      		</Switch>
      		
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
