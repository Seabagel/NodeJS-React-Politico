import React, { Component } from "react";
import Entry from "./entry";
import "./entries.css";

class Entries extends Component {
  constructor() {
    super();
    this.state.counterLen = this.state.counters.length;
  }

  state = {
    counters: [],
    tempCounter: { id: 1, name: "", value: 0 },
    counterLen: 0,
    income: 0
  };

  // handleReset = () => {
  //   let counters = [...this.state.counters];
  //   counters = [{ id: 1, name: "Food", value: 120 }];
  //   this.setState({ counters });
  // };

  // handleDelete = counter => {
  //   const counters = this.state.counters.filter(c => c.id !== counter.id);
  //   this.setState({ counters });
  // };

  handleUpdateForm = (eValue, ePlace) => {
    const tempCounter = { ...this.state.tempCounter };
    if (ePlace.substring(0, 4) === "Bill") tempCounter.name = eValue;
    else if (ePlace.substring(0, 4) === "Cost")
      tempCounter.value = parseFloat(eValue);
    console.log(eValue);
    this.setState({ tempCounter });
  };

  handleAddEntry = () => {
    const counters = [...this.state.counters];
    const counterLen = this.state.counterLen + 1;
    const tempCounter = { ...this.state.tempCounter, id: counterLen };
    this.setState({ counterLen: counterLen });
    this.setState({
      counters: counters.concat(tempCounter)
    });
  };

  handleChangeIncome = txtValue => {
    const income = parseFloat(txtValue);
    this.setState({ income });
  };

  render() {
    return (
      <main>
        <div className="form-row marginSpace">
          <div className="col-md-3">
            <button
              type="button"
              onClick={this.handleReset}
              className="btn btn-warning form-control"
              tabIndex="-1"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="form-row marginSpace">
          <label className="col-md-5 col-form-label ">
            <h4>Income per paycheck:</h4>
          </label>
          <div className="col-md-4 ">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text ">$</div>
              </div>
              <input
                type="text"
                className="form-control"
                onBlur={e => this.handleChangeIncome(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <select className="form-control" defaultValue="Bi-Monthly">
              <option value="Monthly">Monthly</option>
              <option value="Bi-Monthly">Bi-Monthly</option>
              <option value="Weekly">Weekly</option>
            </select>
          </div>
        </div>

        {/* Label of textbox */}

        <div className="form-row ">
          <div className="col-md-4">
            <label>Name of Entry</label>
          </div>
          <div className="col-md-3">
            <label>Value</label>
          </div>
          <div className="col-md-3">
            <label>Frequency</label>
          </div>
          <div className="col-md-2">
            <label htmlFor="">&nbsp;</label>
          </div>
        </div>

        {/* Textbox for inputing data */}

        <div className="addData">
          <div className="form-row counterBg">
            <div className=" col-md-4">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    {this.state.counters.length}
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="txtBill"
                  placeholder="Bills, Savings"
                  onBlur={e =>
                    this.handleUpdateForm(e.target.value, e.target.placeholder)
                  }
                />
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
                  id="txtValue"
                  placeholder="Cost"
                  onBlur={e =>
                    this.handleUpdateForm(e.target.value, e.target.placeholder)
                  }
                />
              </div>
            </div>

            <div className="col-md-3">
              <select className="form-control" defaultValue="Bi-Monthly">
                <option value="Monthly">Monthly</option>
                <option value="Bi-Monthly">Bi-Monthly</option>
                <option value="Weekly">Weekly</option>
              </select>
            </div>

            <div className="col-md-2 ">
              <button
                className="btn btn-primary form-control "
                type="button"
                tabIndex="-1"
                onClick={e => this.handleAddEntry()}
              >
                Add Entry
              </button>
            </div>
          </div>
        </div>

        {this.state.counters.map(counter => (
          <Entry
            key={counter.id}
            counter={counter}
            listIndex={this.state.counters.indexOf(counter) + 1}
          />
        ))}
      </main>
    );
  }
}

export default Entries;
