import React, { Component } from "react";
import { fire } from "./config/fbConfig";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriber: {
        username: "",
        phone_number: ""
      }
    };

    this.itemsRef = fire.ref("subscriber");
    this.itemsRef.on("value", data => {
      var subscriber = data.val();
      var keys = Object.keys(subscriber);
      console.log(keys);
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        console.log(subscriber[k].username);
      }
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.itemsRef.push({
      username: this.refs.username.value,
      phone_number: this.refs.phone_number.value
    });
  };

  handleDelete = id => {
    this.itemsRef.update({
      [id]: null
    });
  };

  render() {
    return (
      <div className="container">
        <h1> Phone Directory </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group" id="spc-1">
            <div className="input-1">
              <i className="fa fa-user" />
              <input
                type="text"
                className="form-control"
                ref="username"
                placeholder="Enter name"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-1">
              <i className="fa fa-phone" />
              <input
                type="tel"
                className="form-control"
                ref="phone_number"
                placeholder="Enter phone number"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit{" "}
          </button>
        </form>
        <div>
          <p className="para" ref="para" />
        </div>
      </div>
    );
  }
}

export default App;
