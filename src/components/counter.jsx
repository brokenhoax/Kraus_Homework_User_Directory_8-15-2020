import React, { Component } from 'react';

class Counter extends Component {

  // state = {
  //   value: this.props.counter.value,
  //   tags: ['tag1', 'tag2', 'tag3  ']
  // };

  // ES5 Approach to Bind Event Handlers
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

    // ES6 Approach Using Arrow Function to Inherit "This" Keyword
  // handleIncrement = (e) => {
  //   console.log(e);
  //   console.log(this)
  //   "setState" method, inherited from React base component, brings DOM in sync w/ Virtual DOM
  //   this.setState({value: this.state.value + 1})
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //   return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  // }

  render() {
    // let classes = this.getBadgeClasses();

    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} 
          className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} 
          className="btn btn-danger btn-sm m-2">
          Delete
        </button>
        {/* <div>{ this.renderTags() }</div> */}
      </React.Fragment>
    );
  }

  // Logic to Change CSS Class
  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += (this.props.counter.value === 0) ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatValue () {
    const { value } = this.props.counter;
    return value === 0  ? 'Zero' : value;
  }

}

export default Counter;