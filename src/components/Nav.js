import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "@reach/router";

class Nav extends Component {
  render() {
    return (
      <>
        <Navbar className="mb-3" bg="dark" variant="dark">
          <Link to="/">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="../../components/logo512.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Unemployed
            </Navbar.Brand>
          </Link>
        </Navbar>
      </>
    );
  }
}
export default Nav;
