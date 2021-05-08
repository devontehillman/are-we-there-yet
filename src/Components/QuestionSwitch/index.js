import React from "react";
import MultiButton from "../MultiButton";
import ThumbButton from "../ThumbButton";
import AnyQuestions from "../AnyQuestions";
import Container from "react-bootstrap/Container"
// import TopicChoice from "../TopicChoice";
import API from "../../utils/API";
// import App from "../../App";
// import chart

class QuestionSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    { 
      // prompt: 
      // { 
        value: "",
        topic: "" 
      // }
    };

    this.topicChange = this.topicChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  topicChange = e => {
    this.setState({ topic: e.target.value });
  };


//   topicChange(e) {
//     const topic = e.target.value
//     this.setState(function(state) {
//       return { 
//         details: Object.assign({}, 
//           state.prompt, {
//           topic: topic 
//   })
// }
// }
// )};

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.value);
    console.log(this.state.topic);
    API.saveTopic({
      // userID is a placeholder and needs to be updated to grab the user id from a global state
      // userID: req.user.id
      topic: this.state.topic,
      questionType: this.state.value,
    });
  }

  render() {
    console.log(this.state.value);
    let option;

       <option value="">Choose an option</option>
    if (this.state.value === "multipleChoice") {
      option = <MultiButton />;
    } else if (this.state.value === "thumbsChoice") {
      option = <ThumbButton />;
    } else if (this.state.value === "questionsPrompt") {
      option = <AnyQuestions />;
    }

    return (
      <div>
               <Container>
        <h3>Understanding/Comfort</h3>
        <form onSubmit={this.handleSubmit}>
          <label form="prompts">Choose a Type:</label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="">Choose an option</option>
            <option value="multipleChoice">Multiple Choice</option>
            <option value="thumbsChoice">Thumbs Choice</option>
            <option value="questionsPrompt">Any Questions?</option>
          </select>

          <input type="submit" value="Submit" />
          <input
          id="topic"
          className="questionName"
          placeholder="Input Topic Here"
          onChange={this.topicChange}
          value={this.state.topic}
        ></input>
        </form>
        {option}
        {/* listener for what is chosen. A switchcase for what is chosen.
Appropriate component is populated */}
      </Container>

      </div>
    );
  }
}

export default QuestionSwitch;