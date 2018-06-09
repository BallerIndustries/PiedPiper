import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to our totally awesome app.</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload :-)
          <DatePicker />
        </p>
      </div>
    );
  }
}

export default App;
