import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form"
// import FormControl from "react-bootstrap/FormControl"
// import Button from "react-bootstrap/Button"
import NavBar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div>
      {/* <Nav> */}

      <NavBar className="NavBar">
        <Container>
          <NavBar.Brand href="#home" className="cornerlogo">
            <img
              src="images/AWtY.png"
              alt="are we there yet logo"
              className="cornerlogo"
            ></img>
          </NavBar.Brand>
          <Nav className="selection">
            <Nav.Link href="./">
              <span className="glyphicon glyphicon-home"></span>Home
            </Nav.Link>
            <Nav.Link href="./signUp">
              <span className="glyphicon glyphicon-user"></span>Sign Up
            </Nav.Link>
            <Nav.Link href="./Login">
              <span className="glyphicon glyphicon-log-in"></span>Login
            </Nav.Link>
          </Nav>
        </Container>
      </NavBar>

      {/* <div className="navbar-header">
          <img src="images/AWtY.png" alt="Are We There Yet logo" style= {{width: "200px", height: "100px"}} />
        </div>
        <ul className="nav navbar-nav">
        
          <li className="active"><a href="./">Home</a></li><span className="glyphicon glyphicon-home"></span>
          </ul>
        <Nav.Link href="./signUp" className="sign-login"><span className="glyphicon glyphicon-user"></span> Sign Up</Nav.Link>
          <Nav.Link href="./Login" className="sign-login"><span className="glyphicon glyphicon-log-in"></span> Login</Nav.Link>
   
        </Container>
      </Nav> */}
    </div>
  );
}

export default Header;
