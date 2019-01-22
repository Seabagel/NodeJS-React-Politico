import React, { Component } from "react";

class Entry extends Component {
  styles = {
    auto: {
      margin: "0 auto",
      width: "100%"
    }
  };

  render() {
    return (
      <form>
        <div style={this.styles.auto} className="form-row">
          <button
            className="btn btn-secondary form-control form-group"
            type="button"
            onClick={this.props.onDelete}
            tabIndex="-1"
          >
            {this.props.listIndex}
          </button>
        </div>
        <div className="col">
          {" "}
          <input
            className="form-control form-group"
            type="text"
            placeholder="Bill"
            // value={this.props.counter.name}
            onBlur={e =>
              this.props.onChangeForm(e.target.value, e.target.placeholder)
            }
          />
        </div>

        <input
          className=" form-control form-group"
          type="text"
          placeholder="Cost"
          // value={this.props.counter.name}
          onBlur={e =>
            this.props.onChangeForm(e.target.value, e.target.placeholder)
          }
        />

        <select
          className="form-control form-group col-md-4"
          defaultValue="Bi-Monthly"
        >
          <option value="Monthly">Monthly</option>
          <option value="Bi-Monthly">Bi-Monthly</option>
          <option value="Weekly">Weekly</option>
        </select>

        <button
          className="btn btn-danger form-control form-group"
          type="button"
          onClick={this.props.onDelete}
          tabIndex="-1"
        >
          Delete
        </button>
      </form>
    );
  }
}

export default Entry;
