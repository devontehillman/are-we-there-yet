import React from "react"
import Container from "react-bootstrap/Container"


function NavBar(props) {
    return (
<div>
<Container>
<h3 className="welcome">Welcome To Are We There Yet</h3>

<div className="recaps">Recap/Overall Stats</div>

<img src="images/AWtY.png" alt="Are We There Yet logo" className="welcomelogo" />
</Container>
</div>
    );
}

export default NavBar;