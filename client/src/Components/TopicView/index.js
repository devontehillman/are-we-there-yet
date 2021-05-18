import React from "react";
import axios from "axios";
import MultiButton from "../MultiButton";
import ThumbButton from "../ThumbButton";
import AnyQuestions from "../AnyQuestions";
import StudentPromtView from "../StudentPromptView";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import TopicChoice from "../TopicChoice";
import API from "../../utils/API";
// import chart
// connection for redux state management
import Logout from "../Logout/Logout"
import { connect } from "react-redux";
//get access to the history object's properties and the closest <Route>'s match
import { Link, withRouter } from "react-router-dom";
import { getTopics } from "../../actions/topicActions";
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
    this.handleTopicClick = this.handleTopicClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    window.location.href='/topicresponse'
    //localStorage.removeItem('topicID')
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  topicChange = (e) => {
    this.setState({ topic: e.target.value });
  };
  handleSubmit(e) {
    e.preventDefault();
    const topic = {
      topic: this.state.topic,
    };
    // axios.post("/api/topic" ,topic);
    API.saveTopic({
      topic: this.state.topic,
      questionType: this.state.value,
      classResponses: {}
    });
    window.location.reload();
  }
  render() {
    console.log(this.state.value);
    let option;
    // // <option value="">Choose an option</option>;
    // if (this.state.value === "multipleChoice") {
    //   option = <MultiButton />;
    // } else if (this.state.value === "thumbsChoice") {
    //   option = <ThumbButton />;
    // } else if (this.state.value === "questionsPrompt") {
    //   option = <AnyQuestions />;
    // }
    return (
      <div>
        <Logout />
        <h1 style={{ textAlign: "center" }}>Add a Topic</h1>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Col>
                <Form.Control
                  id="topic"
                  className="questionName"
                  placeholder="Input Topic Here"
                  onChange={this.topicChange}
                  value={this.state.topic}
                ></Form.Control>
              </Col>
              <Col>
                <Form.Control
                  as="select"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option value="Hello">Choose an option</option>
                  <option value="multipleChoice">Multiple Choice</option>
                  <option value="thumbsChoice">Thumbs Choice</option>
                  <option value="questionsPrompt">Any Questions?</option>
                </Form.Control>
              </Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Row>
          </Form>
          <Row className="topic-list">
          <h3>Topics!</h3>
          {this.state.topiclist.map(topiclist => 
          <Button 
          onClick={this.handleTopicClick}
          style= {{margin:"10px"}}
          key={topiclist._id}
          id={topiclist._id}
          >
          {topiclist.topic}
          </Button>
          )}
          </Row>
          {option}
          {/* listener for what is chosen. A switchcase for what is chosen.
Appropriate component is populated */}
        </Container>
      </div>
    );
  }
}
QuestionSwitch.propTypes = {};
//allow us to access topics from our Redux state as a prop inside our component
const mapStateToProps = (state) => {
  return {
    topic: state.topic,
  };
};
export default connect(mapStateToProps, { getTopics })(
  withRouter(QuestionSwitch)
);