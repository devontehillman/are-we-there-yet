import React, { Component } from "react";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"

class Navbar extends Component {
  render() {
    return (
      <Nav>
      <Container>
      <div className="navbar-header">
           <img src="images/AWtY.png" alt="Are We There Yet logo" style= {{width: "200px", height: "100px"}} />
         </div>
         <ul className="nav navbar-nav">
           <li className="active"><a href="./">Home</a></li>
         </ul>
         <Nav.Link href="./signUp" class="sign-login"><span class="glyphicon glyphicon-user"></span> Sign Up</Nav.Link>
           <Nav.Link href="./login" class="sign-login"><span class="glyphicon glyphicon-log-in"></span> Login</Nav.Link>
    
         </Container>
       </Nav>
    );
  }
}

export default Navbar;
