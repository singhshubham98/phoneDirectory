import React, { Component } from "react";
import "../static/css/dashboard.css";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1>Phone Directory</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPhone">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="inputPhone"
              placeholder="Enter Phone Number"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Dashboard;
