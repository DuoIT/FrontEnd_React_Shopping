import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import './App.css';
import Header from './components/partials/Header';
import DieuhuongURL from './router/DieuhuongURL';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <DieuhuongURL />
          

        </div>

      </Router>      
    );
  }
}

export default App;
