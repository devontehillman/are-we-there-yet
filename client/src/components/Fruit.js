import React from 'react';
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const options = [
  { value: 'thumbsChoice', label: 'Thumbs Up/Down' },
  { value: 'multipleChoice', label: 'Multiple Choice' },
  { value: 'questionsPrompt', label: 'Any Questions?' },
];

class Fruit extends React.Component {
  state = {
    selectedOption: null,
  };
  onSubmit = () => {
    console.log(this.state.val);
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  handleSubmit(e) {
    e.preventDefault();
    //console.log(this.state.value);
    console.log(this.state.topic);

    const topic = {
      topic: this.state.topic,
      //questionType: this.state.value
    }
    
    // axios.post("/api/topic" ,topic);
    // API.saveTopic({
    //   // userID is a placeholder and needs to be updated to grab the user id from a global state
    //   // userID: req.user.id
    //   topic: this.state.topic,
    //   questionType: this.state.value,
    // });
  }

  render() {
    const { selectedOption } = this.state;

    return (
    <div>
        <Container className="justify-content-md-center" style={{marginTop:"10px", justifyContent:"center"}}>
            <Form onSubmit={this.handleSubmit}>
            <Form.Row>
            <Col>
            <Form.Control 
            type="text"
            placeholder="Topic" 
            onChange={this.handleChange} 
            value={this.state.topic}
            onChange={e => this.setState({ val: e.target.value })}/>
            </Col>
            <Col>
            <Select value={selectedOption} onChange={this.handleChange} options={options}/>
            </Col>
            <Col>
            <Button variant="primary" type="submit" onClick={this.onSubmit}>  
            Submit
            </Button>
            </Col>
            </Form.Row>
            </Form>
          </Container>
    </div>
    );
    
  }
}
{/* <Row>
                
<form onSubmit={this.handleSubmit}>
<label form="prompts">Choose a Type:</label>
<Select value={selectedOption} onChange={this.handleChange} options={options}/>
<input type="submit" value="Submit" />
<input
  id="topic"
  className="questionName"
  placeholder="Input Topic Here"
  onChange={this.topicChange}
  value={this.state.topic}
></input>
</form>
</Row> */}

export default Fruit