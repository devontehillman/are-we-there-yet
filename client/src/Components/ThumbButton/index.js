import React from "react";

class ThumbButton extends React.Component {
    constructor(props){
    super(props);
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const topicID = localStorage.getItem('topicID')
        console.log(topicID)
        fetch("/api/topic/" + topicID,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
        .then(res => res.json())
        .then(res=> console.log(res.classResponses))
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