import React, { Component } from "react";

export default class Counter extends Component {
  badgeStyle = {
    fontSize: 20,
    fontWeight: "bold"
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  // Badge Style
  getBadgeClass = () => {
    let badgeClass = "badge m-1 badge-";
    badgeClass += this.props.counter.value === 0 ? "warning" : "primary";
    return badgeClass;
  };

  render() {
    return (
      <div>
        <span style={this.badgeStyle} className={this.getBadgeClass()}>
          {this.formatCount()}
        </span>

        <button
          className="btn btn-secondary btn-sm m-1"
          // onClick={() => this.props.onIncrement(this.props.counter)}
          onClick={this.props.onIncrement}
        >
          Increment
        </button>

        <button
          // onClick={this.props.onDelete}
          // onClick={() => this.props.onDelete(this.props.counter.id)}
          onClick={this.props.onDelete}
          className="btn btn-danger btn-sm m-1"
        >
          Delete
        </button>

        <button onClick={this.props.onMax} className="btn btn-dark btn-sm m-1">
          maximum
        </button>
      </div>
    );
  }
}
