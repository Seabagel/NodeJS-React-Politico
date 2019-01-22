import React, { Component } from "react";
import "./entries.css";

class Entry extends Component {
  render() {
    return (
      <div className="form-row counterBg">
        <div className=" col-md-4">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">{this.props.listIndex}</div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Bills, Savings"
              tabIndex="-1"
              readOnly
            >
              {/* {this.props.counter.name} */}
            </input>
          </div>
        </div>

        <div className="col-md-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">$</div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Cost"
              tabIndex="-1"
              readOnly
            >
              {/* {this.props.counter.value} */}
            </input>
          </div>
        </div>

        <div className="col-md-3">
          <select
            className="form-control"
            defaultValue="Bi-Monthly"
            tabIndex="-1"
            readOnly
          >
            <option value="Monthly">Monthly</option>
            <option value="Bi-Monthly">Bi-Monthly</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>

        <div className="col-md-2 ">
          <button
            className="btn btn-danger form-control "
            type="button"
            tabIndex="-1"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Entry;
