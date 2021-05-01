import React from "react";

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
  //   switch (value) {
  //     case "multipleChocie":
  //       return multipleChoice();
  //     case "thumbsChoice":
  //       return thumbsChoice();
  //     default:
  //       return questionsPrompt();
  //   }
  render() {
    return (
      <div>
        <input className="questionName"></input>
        <h3>Understanding/Comfort</h3>

        <form onSumbit={this.handleSubmit}>
          <label for="prompts">Choose a Type:</label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="multipleChoice">Multiple Choice</option>
            <option value="thumbsChoice">Thumbs Choice</option>
            <option value="questionsPrompt">Any Questions?</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
        {/* listener for what is chosen. A switchcase for what is chosen.
Appropriate component is populated */}
      </div>
    );
  }
}

export default QuestionSwitch;
