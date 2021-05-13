import React from "react";
import API from "../../utils/API";

function ThumbButton({ topic }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Hi, good job!");
    console.log(e.target.value);
    const resp = e.target.value;
    addResponse();
    function addResponse() {
      API.saveResponse({
        userID: "2",
        topicID: { topic },
        answer: resp,
      });
    }
  }

  return (
    <div className="row">
      <button onClick={handleSubmit} value="up">
        Up
      </button>
      <button onClick={handleSubmit} value="ok">
        Ok
      </button>
      <button onClick={handleSubmit} value="down">
        Down
      </button>
    </div>
  );
}

export default ThumbButton;
