import React from "react";
import MultiButton from "../MultiButton";
import ThumbButton from "../ThumbButton";
import AnyQuestions from "../AnyQuestions";

//import StudentPromtView from "../StudentPromptView";
// import TopicChoice from "../TopicChoice";
import API from "../../utils/API";
// import App from "../../App";
// import chart

import Button from "react-bootstrap/Button";

class QuestionSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      topic: "",
      topiclist: []
    };
    this.topicChange = this.topicChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTopicClick = this.handleTopicClick.bind(this);
    this.loadTopics = this.loadTopics.bind(this)
  }

  async loadTopics() {
    await fetch("/api/topic")
    .then((res) => res.json())
    .then((data) => {
        this.setState({
        topiclist: data
      })
      console.log(this.state.topiclist)
    })
  }

  componentDidMount(){
    this.loadTopics()
  }

  handleTopicClick(e){
    // grab idof button clicked and saves to local storage and redirects
    localStorage.setItem('topicID', e.target.id );
    window.location.href='/final'
    //localStorage.removeItem('topicID')

  }
  
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  topicChange = (e) => {
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
    window.location.reload();
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
        <div className="container">
          <div style={{justifyContent: 'center', marginTop: "4rem" }} className="row">
            <h3  >Understanding/Comfort</h3>
          </div>
          <div style={{ marginTop: "2rem" }} className="row">
            <form onSubmit={this.handleSubmit} class="col s12">
            <div class="input-field col xl5 l5 m5 s12">
              <input
                id="topic"
                className="questionName"
                placeholder="Input Topic Here"
                onChange={this.topicChange}
                value={this.state.topic}
              ></input>
            </div>
            <div class="input-field col xl5 l5 m5 s12 ">
              <select className="browser-default" value={this.state.value} onChange={this.handleChange}>
                <option value="">Choose an option</option>
                <option value="multipleChoice">Multiple Choice</option>
                <option value="thumbsChoice">Thumbs Choice</option>
                <option value="questionsPrompt">Any Questions?</option>
              </select>
              </div>
            <div class="input-field col xl2 l2 m2 s12 ">
              <button class="btn waves-effect waves-light hoverable white-text green darken-3 " variant="primary" type="submit">
                Submit<i class="material-icons right">send</i>
              </button>
              </div>
            </form>
          </div>  
          <div class=".topic-list">
          <div  style={{justifyContent: 'center'}} className="row"> 
            <h3>Topics!</h3>
          </div>
          <div className="row topic-list">
            {this.state.topiclist.map(topiclist => 
            <Button className="topicbtn" onClick={this.handleTopicClick} style= {{margin:"10px"}} key={topiclist._id} id={topiclist._id}>{topiclist.topic}</Button>)}
          </div>
          </div>
          {/* {option} */}
          {/* listener for what is chosen. A switchcase for what is chosen.Appropriate component is populated */}
      </div>
    );
  }
}
export default QuestionSwitch;