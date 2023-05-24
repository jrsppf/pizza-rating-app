import React, { Component } from "react";
import "./App.css";
import Album from "./components/Album";
import Home from './components/Home';

import axios from "axios";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     message: "",
  //   };

  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   axios
  //     .get("http://localhost:8080/health")
  //     .then((response) => this.setState({ message: response.data.name }));
  // }

  render() {
    return (
      <div>

        {/* <div className="button__container">
          <button className="button" onClick={this.handleClick}>
            Click Me
          </button>
          <p>{this.state.message}</p>
        </div> */}
          <div>
            <Home />
          </div>
      </div>
    );
  }
}
export default App;
