import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    this.state.counterLen = this.state.counters.length;
  }

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 7 },
      { id: 4, value: 23 }
    ],
    counterLen: 0
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value += 1;
    this.setState({ counters });
  };

  handleMax = counter => {
    const counters = [...this.state.counters].map(c => {
      if (counter.id !== c.id) return c;
      return { ...c, value: 999 };
    });
    this.setState({ counters });
  };

  handleAdd = () => {
    const counters = [...this.state.counters];
    const counterLen = this.state.counterLen + 1;
    this.setState({ counterLen: counterLen });
    this.setState({
      counters: counters.concat({
        id: counterLen,
        value: 0
      })
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counter => {
    const counters = this.state.counters.filter(c => c.id !== counter.id);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-success m-2">
          Reset
        </button>
        <button onClick={this.handleAdd} className="btn btn-info m-2">
          Add element
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter} // encapsulation
            onDelete={() => this.handleDelete(counter)}
            onIncrement={() => this.handleIncrement(counter)}
            onMax={() => this.handleMax(counter)}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
