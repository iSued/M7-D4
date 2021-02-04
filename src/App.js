import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/Nav";
import FirstPage from "./components/FirstPage";

class App extends Component {
  state = { jobs: { hello: "je" } };
  render() {
    return (
      <>
        <Nav />

        <div className="container mt-3">
          <FirstPage path="/" />
        </div>
      </>
    );
  }
}

export default App;
