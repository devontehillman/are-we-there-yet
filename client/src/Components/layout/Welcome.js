import React from "react"
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom";


class Welcome extends React.Component {
    render() {
    return (
        <div className="container" style={{marginTop: "50px"}}>
            <div className="card welcome-card" style={{textAlign:"center"}}> 
                <div className="Row">
                    <h1 >Welcome To Are We There Yet?</h1>
                </div>
                <div className="Row">
                    <h1>Where comprehension is the destination</h1>
                </div>
                <div className="Row" style={{display: "flex"}}>
                    <div className="col s2">
                        <Link
                            to="/register"
                            style={{
                            width: "140px",
                            borderRadius: "3px",
                            letterSpacing: "2px",
                            color : "blue"
                            }}
                            className="btn btn-large btn-flat waves-effect white brown-text"
                        >
                            Register
                        </Link>
                </div>
                    <div className="col s2">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white green-text"
              >
                Log In
              </Link>
                </div>
                </div>
                <div class="row" style={{marginTop: "50px"}}>
                    <div class="col s12 m4" style={{marginTop: "-20px"}}>
                        <div class="card">
                            <div class="card-content">
                                <h1 style={{textDecoration:"underline"}}>Instructor Choose a Topic</h1>
                            </div>
                            <div class="card-image">
                                <img src="/images/comp2.png"/>
                            </div>
                            <div class="card-content">
                            <p>The Instructor adds a topic along with the type of comprehension check they what to 
                                use to gauge the classes understanding. 
                            </p>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4 " style={{marginTop: "50px"}}>
                        <div class="card">
                            <div class="card-content">
                                <h1 style={{textDecoration:"underline"}}>Student Responds</h1>
                            </div>
                            <div class="card-image">
                                <img src="/images/comp1.png"/>
                            </div>
                            <div class="card-content">
                            <p>The student is then shown the last prompt the teacher input. After answering the prompt
                                the student can then wait on the next.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4" style={{marginTop: "125px"}}>
                        <div class="card">
                            <div class="card-content">
                                <h1 style={{textDecoration:"underline"}}>Real Time Analytics</h1>
                            </div>
                            <div class="card-image">
                                <img src="/images/comp4.png"/>
                            </div>
                            <div class="card-content">
                            <p>When the teacher chooses they then click the topic from the topic list to view the 
                            chart from the answers allowing them to effectively gauge the classes comprehension.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <Chart /> */}
                {/* w */}
                {/* <img src="images/AWtY.png" alt="Are We There Yet logo" className="welcomelogo" /> */}
            </div>    
        </div>
    );
    }
}

export default Welcome;