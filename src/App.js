import React from 'react';
import { Render } from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from './Components/Navbar'
import Welcome from './Components/Welcome'
import SignUp from './Components/signUp'

function App (){
    return(
        <div>
        <NavBar />
        <Welcome />
        <SignUp />
        </div>
        <Router>
           
     <div>
     <NavBar />
    <Switch>
             <Route path="/" exact component={Welcome}/>
          <Route path="/login" exact component={Login}/>
     </Switch>
    
     </Router>
     </div>
    )
}

export default App;
