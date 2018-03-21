import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from "./components/customers/Customers";
import CounterContainer from "./components/counter/CounterContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Customers />
        <CounterContainer />
      </div>
    );
  }
}

export default App;
