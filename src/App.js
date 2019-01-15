import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Router from './router';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar'
import './App.css'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='wrapper'>
          <Sidebar />
          <div className='container'>
            <Router />
          </div>
        </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
