import React, { Component } from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { Switch } from 'react-router'
import '../style.css'
import Dashboard from "./Dashboard"
import Login from './LogIn'
import Home from './Home'
import Question from './Question'
import QuestionTo from './QuestionTo'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import Page404 from "./Page404"
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
      		<Switch>
      			<Route path = '/' exact component ={Login} />
                <Route path = '/dashboard'  component = {Dashboard} />
                <Route path = '/leaderboard' component = {LeaderBoard} />
                <Route path = '/home' component ={Home} />
                <Route path = '/add' component ={NewQuestion} />
                <Route path = '/question/:id' component ={Question} />
                <Route path = '/questions/:id' component ={QuestionTo} />
				<Route component={Page404}/>
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
