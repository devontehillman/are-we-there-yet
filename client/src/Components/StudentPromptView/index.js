import React, { Component } from "react";
import MultiButton from "../MultiButton";
import ThumbButton from "../ThumbButton";
import AnyQuestions from "../AnyQuestions";
import API from "../../utils/API";
import Container from "react-bootstrap/Container";

class StudentPromptView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        topics:[]
      }
      this.loadTopics = this.loadTopics.bind(this)
    }

 
   async loadTopics() {
    await fetch("/api/topic")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        this.setState({
        topics: data
      })
      console.log(this.state);
    })
  }

  componentDidMount(){
    this.loadTopics()
  }

render() {
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   loadTopics();
  //   console.log("Hi!");
  // }

  // let option;

  // if (type === "multipleChoice") {
  //   option = <MultiButton />;
  // } else if (type === "thumbsChoice") {
  //   option = <ThumbButton />;
  // } else if (type === "questionsPrompt") {
  //   option = <AnyQuestions />;
  // }

  return (
    <div>
      <Container>
        <h3>Topics!</h3>
       {this.state.topics.map(topiclist => 
          <h1 key={topiclist._id} >{topiclist.topic}</h1>
          )}
        {/* <button onClick={handleSubmit}>
          <input type="submit" value="Submit" />
        </button> */}
        {/* {this.state.topic.option} */}
      </Container>
    </div>
  );
}}
export default StudentPromptView;