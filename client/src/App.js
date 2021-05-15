import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
// imports state from redux store to be accessed by app 
import { Provider } from "react-redux";
import store from "./store";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Navbar from "./Components/layout/Navbar";
// change to welcome page
import Welcome from "./Components/layout/Welcome";
// change to sign up 
import Dashboard from "./Components/Dashboard/Dashboard";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import PrivateRoute from "./Components/Private-route/PrivateRoute";
import InstructorTopicPage from "./pages/instructorTopicPage"
import QuestionSwitch from "./Components/QuestionSwitch";
import StudentPromptView from "./Components/StudentPromptView";
import Fruit from "./Components/Fruit"
import "./App.css";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // console.log('dh1') 
  // console.log(token)
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              {/* these are the route that can only be accessed by users */}
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/topiclist" exact component={InstructorTopicPage}/>
              <PrivateRoute exact path="/addtopic" component={QuestionSwitch} />
              <PrivateRoute exact path="/viewtopics" component={StudentPromptView} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
