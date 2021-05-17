import React, { Component } from 'react'
import axios from "axios";

import MultiButton from "../MultiButton";
import ThumbButton from "../ThumbButton";
import AnyQuestions from "../AnyQuestions";

import Row from "react-bootstrap/Row";

class TopicResponse extends Component {
    constructor(props) {
        super(props);
        this.state ={
            topic:"",
            prompt:"",
            value:""
        }
        
    }
    
    //axios.post("/api/topic" ,topic)
    componentDidMount(){
        const topic = localStorage.getItem('topicID')
        console.log(topic)
        fetch("/api/topic/" + topic,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
        .then(res => res.json())
        //.then(res=> console.log(res))
        .then((data) => {
            this.setState({
            topic: data.topic,
            prompt: data.questionType
          })
          console.log(this.state)
        })

    }
    
    render() {
        let option = this.state.prompt;

        // <option value="">Choose an option</option>;
        if (this.state.prompt === "multipleChoice") {
          option = <MultiButton />;
        } else if (this.state.prompt === "thumbsChoice") {
          option = <ThumbButton />;
        } else if (this.state.prompt === "questionsPrompt") {
          option = <AnyQuestions />;
        }

        return (
            <div className="prompt-response">
                <h1>{this.state.topic}</h1>
                <Row style={{justifyContent:"center"}}>{option}</Row>
                
            </div>
        )
    }
}

export default TopicResponse