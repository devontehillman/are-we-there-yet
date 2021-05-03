import React from "react";
import MultiButton from "../MultiButton";
import ThumbButton from "../ThumbButton";
import AnyQuestions from "../AnyQuestions";
import TopicChoice from "../TopicChoice";
// import chart

class QuestionSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    console.log(this.state.value);
    let option;

    if (this.state.value === "multipleChoice") {
      option = <MultiButton />;
    } else if (this.state.value === "thumbsChoice") {
      option = <ThumbButton />;
    } else if (this.state.value === "questionsPrompt") {
      option = <AnyQuestions />;
    }

    return (
      <div>
        <h3>Understanding/Comfort</h3>
        <TopicChoice />
        <form>
          <label form="prompts">Choose a Type:</label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="">Choose an option</option>
            <option value="multipleChoice">Multiple Choice</option>
            <option value="thumbsChoice">Thumbs Choice</option>
            <option value="questionsPrompt">Any Questions?</option>
          </select>
          <input onSumbit={this.handleSubmit} type="submit" value="Submit" />
        </form>
        {option}
        {/* listener for what is chosen. A switchcase for what is chosen.
Appropriate component is populated */}
      </div>
    );
  }
}

export default QuestionSwitch;

// components
