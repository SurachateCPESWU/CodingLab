import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import './App.css';


const routerApp = () => (
    <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/Login' component={Login} />
        </div>
  </Router>
)
export default routerApp;