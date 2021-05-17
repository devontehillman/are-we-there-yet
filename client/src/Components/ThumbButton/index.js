import React from "react";

class ThumbButton extends React.Component {
    constructor(props){
    super(props);
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.id)
    }

render() {
    return (
        <div className="row">
        <button onClick={this.handleSubmit} id = "1" >Up</button>
        <button onClick={this.handleSubmit} id = "2" >Ok</button>
        <button onClick={this.handleSubmit} id = "3" >Down</button>
        </div>
    )

}
}

export default ThumbButton;