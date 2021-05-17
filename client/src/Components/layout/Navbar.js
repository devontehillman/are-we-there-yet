import React, { Component } from "react";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavBar from "react-bootstrap/Navbar"

class Navbar extends Component {
  render() {
    return (
      <div>
        <NavBar className="NavBar">
          <Container>
            <NavBar.Brand href="#home" className="cornerlogo"><img src="images/AWtY.png" alt="are we there yet logo" className="cornerlogo"></img></NavBar.Brand>
            <Nav className="selection">
              <Nav.Link href="./"><span className="glyphicon glyphicon-home"></span>Home</Nav.Link>
              <Nav.Link href="./Register"><span className="glyphicon glyphicon-user"></span>Sign Up</Nav.Link>
              <Nav.Link href="./Login"><span className="glyphicon glyphicon-log-in"></span>Login</Nav.Link>
              <Nav.Link href="./addtopic"><span className="glyphicon glyphicon-log-in"></span>Add Topic</Nav.Link>
              <Nav.Link href="./viewtopics"><span className="glyphicon glyphicon-log-in"></span>See Topics</Nav.Link>
              <Nav.Link href="./topicresponse"><span className="glyphicon glyphicon-log-in"></span>Topic Response</Nav.Link>
            </Nav>
          </Container>
        </NavBar>
      </div>
    );
  }
}

export default Navbar;

