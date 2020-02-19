import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/layout/Navbar.js";
import Landing from "./components/layout/Landing.js";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Landing />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;