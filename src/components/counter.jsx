import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3  ']
  };

  // ES5 Approach to Bind Event Handlers
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

    // ES6 Approach Using Arrow Function to Inherit "This" Keyword
  handleIncrement = (e) => {
    console.log(e);
    console.log(this)
    // "setState" method, inherited from React base component, brings DOM in sync w/ Virtual DOM
    this.setState({count: this.state.count + 1})
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  }

  render() {
    let classes = this.getBadgeClasses();

    return (
      <React.Fragment>
        <span className={classes}>{this.formatCount()}</span>
        <button onClick={() => {this.handleIncrement({ id: 1})}} className="btn btn-secondary btn-sm">Increment</button>
        <div>{ this.renderTags() }</div>
      </React.Fragment>
    );
  }

  // Logic to Change CSS Class
  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += (this.state.count === 0) ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount () {
    const { count } = this.state
    return count === 0  ? 'Zero' : count;
  }

}

export default Counter;