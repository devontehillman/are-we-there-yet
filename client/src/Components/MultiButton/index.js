import React from "react";
import API from "../../utils/API";

function MultiButton({ topic }) {
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
      <button onClick={handleSubmit} value="1">
        1
      </button>
      <button onClick={handleSubmit} value="2">
        2
      </button>
      <button onClick={handleSubmit} value="3">
        3
      </button>
      <button onClick={handleSubmit} value="4">
        4
      </button>
      <button onClick={handleSubmit} value="5">
        5
      </button>
    </div>
  );
}

export default MultiButton;
