import React, { Component } from 'react';
import NavBar from '../components/navbar';
import Counters from '../components/counters';
import './Calculator.css';

class Calculator extends Component {

  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  // Controlled Component Receives All Data Via Props
  // Controlled by Parent (Counters)
  constructor(props) {
    super(props);
    console.log('App - Constructor');
    // this.state = this.props.something;
  }

  componentDidMount() {
    // AJAX Call
    console.log('App - Mounted');
  
  }

  handleIncrement = counter => {
    // Clone the Array
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    // Have React Update The New State:
    this.setState({ counters })
    console.log(counters[index])
  }

  handleDecrement = counter => {
    // Clone the Array
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    // Have React Update The New State:
    this.setState({ counters })
    console.log(counters[index])
  }


  handleDelete = (counterId) =>  {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  render() {
    console.log('App - Rendered');
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main role="main" className="container">
          <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default Calculator;