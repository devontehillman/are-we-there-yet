import React from 'react';
import { Render } from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from "./Components/Navbar"
import Welcome from "./Components/Welcome"


function App (){
    return(
        <div>
        <NavBar />
        <Welcome />
        </div>
    //     <Router>
           
    // <div>
    // <NavBar />
    // <Switch>
    //         <Route path="/" exact component={Welcome}/>

    // </Switch>
    // </div>
    // </Router>
    )
}

export default App;