import React from "react";
import API from "../../utils/API";

function AnyQuestions({ topic }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Hi, good job!");
    console.log(e.target.value);
    const resp = e.target.value;
    API.saveResponse({
      userID: "6099bf2843afca3ed4f46e53",
      topicID: { topic },
      answer: resp,
    });
  }

  return (
    <div className="row">
      <input placeholder="type question here"></input>
      <button onClick={handleSubmit} value="up">
        {" "}
      </button>
    </div>
  );
}

export default AnyQuestions;
