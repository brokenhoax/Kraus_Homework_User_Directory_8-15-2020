import React, { Component } from 'react';
import Employees from './components/employees';
import './App.css';

class App extends Component {
  render() {
    return (
      <main role="main" className="container">
        <Employees/>
      </main>
    );
  }
}

export default App;