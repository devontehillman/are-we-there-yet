import React from "react";
import MultiButton from "../MultiButton";
import ThumbButton from "../ThumbButton";
import AnyQuestions from "../AnyQuestions";
import API from "../../utils/API";
import Container from "react-bootstrap/Container";

class StudentPromtView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // prompt:
      // {
      value: "",
      topic: "",
      // }
    };

    this.topicChange = this.topicChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  topicChange = (e) => {
    this.setState({ topic: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    API.getTopics({
      // userID is a placeholder and needs to be updated to grab the user id from a global state
      // userID: req.user.id
    });
  }

  render() {
    console.log(this.state.value);
    let option;

    <option value="">Choose an option</option>;
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
            <select>
              <option value="">Choose an option</option>
              <option value="multipleChoice">Multiple Choice</option>
              <option value="thumbsChoice">Thumbs Choice</option>
              <option value="questionsPrompt">Any Questions?</option>
            </select>
            <input type="submit" value="Submit" />
          </form>
          {option}
          {/* listener for what is chosen. A switchcase for what is chosen.
    Appropriate component is populated */}
        </Container>
      </div>
    );
  }
}
export default StudentPromtView;
