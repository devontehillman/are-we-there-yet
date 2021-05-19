import React from "react";
import API from "../../utils/API";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


function ThumbButton({ topic }) {
    const btnStyle = {
    margin:"10px"
    }

  let newtopic;
  grabTopic();
  function something(res) {
    const totaltops = res.data;
    newtopic = totaltops[totaltops.length - 1];
    console.log(newtopic._id);
  }
  function grabTopic() {
    API.getTopics()
      .then((res) => something(res))
      // .then((res) => setTopic(res.data[0].topic))
      // .then((res) => setType(res.data[0].questionType))
      .catch((err) => console.log(err));
    console.log(topic);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Hi, good job!");
    console.log(e.target.value);
    const resp = e.target.value;
    API.saveResponse({
      userID: "6099bf2843afca3ed4f46e53",
      topicID: newtopic._id,
      answer: resp,
    });
  }
  return (
    <div className="row">
      <div className="col s12" style={{ display: "flex", justifyContent: "center"}}>
        <a className="emoji col xl4 l4 m4 s4" style={btnStyle} onClick={handleSubmit} value="up">👍</a>
        <a className="emoji col xl4 l4 m4 s4" style={btnStyle} onClick={handleSubmit} value="ok">👌</a>
        <a className="emoji col xl4 l4 m4 s4" style={btnStyle} onClick={handleSubmit} value="down">👎 </a>
      </div>
    </div>
   
  );
} 

//{<FontAwesomeIcon color="Black" icon="thumbs-down" size="3x"/>}
//{<FontAwesomeIcon color="Black" icon="thumbs-up" flip="horizontal" size="3x"/>}
export default ThumbButton;