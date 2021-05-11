import React from "react";
// import { Render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Welcome from "./pages/welcome";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import InstructorTopicPage from "./pages/instructorTopicPage"
import QuestionSwitch from "./Components/QuestionSwitch";
import StudentPromptView from "./Components/StudentPromptView";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/topiclist" exact component={InstructorTopicPage}/>
          <Route path="/topic" exact component={QuestionSwitch} />
          <Route path="/stuff" exact component={StudentPromptView} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
