import React, { Component } from "react";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavBar from "react-bootstrap/Navbar"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component { 
  onLogoutClick = e => {
  e.preventDefault();
  this.props.logoutUser();
};
  render() {
    const { user } = this.props.auth;

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
              <Nav.Link href="./viewprompt"><span className="glyphicon glyphicon-log-in"></span>View Prompt</Nav.Link>
              <Nav.Link href="./topicview"><span className="glyphicon glyphicon-log-in"></span>View Topics</Nav.Link>
            </Nav>
          </Container>
        </NavBar>
      </div>
    );
  }
}
NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);