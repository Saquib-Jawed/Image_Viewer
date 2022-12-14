import React, { Component } from 'react';
import Home from '../screens/home/Home';
import Login from '../screens/login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from '../screens/profile/Profile';

class Controller extends Component {

    constructor() {
        super();
        this.state = {
            loggedIn: sessionStorage.getItem("access-token") == null ? false : true
        }
        this.baseUrl = "https://graph.instagram.com/";
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" render={({history},props)  => <Login {...props} baseUrl={this.baseUrl} history={history}/>} />
                        <Route exact path="/home" render={({history},props) => <Home {...props} baseUrl={this.baseUrl} history={history} />} />
                        <Route exact path="/profile" render={({history},props) => <Profile {...props} baseUrl={this.baseUrl} history={history} />} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Controller;