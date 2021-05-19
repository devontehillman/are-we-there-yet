import React, { useEffect, useState } from "react";
import MultiButton from "../MultiButton";
import ThumbButton from "../ThumbButton";
import AnyQuestions from "../AnyQuestions";
import API from "../../utils/API";
import Container from "react-bootstrap/Container";
function StudentPromptView() {
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("");
  useEffect(() => {}, []);
  setInterval(() => {
    loadTopics();
  }, 3000);
  function something(res) {
    const totaltops = res.data;
    const newtopic = totaltops[totaltops.length - 1];
    setTopic(newtopic.topic);
    setType(newtopic.questionType);
  }
  function loadTopics() {
    API.getTopics()
      .then((res) => something(res))
      // .then((res) => setTopic(res.data[0].topic))
      // .then((res) => setType(res.data[0].questionType))
      .catch((err) => console.log(err));
    console.log(topic);
  }
  let option;
  if (type === "multipleChoice") {
    option = <MultiButton />;
  } else if (type === "thumbsChoice") {
    option = <ThumbButton />;
  } else if (type === "questionsPrompt") {
    option = <AnyQuestions />;
  }
  return (
    <div>
      <Container>
        <h3>Comprehension Check</h3>
        {/* <button onClick={handleSubmit}>
          <input type="submit" value="Submit" />
        </button> */}
        <h1 style={{textAlign:"center", textDecoration: "underline;"}}>{topic}</h1>
        {option}
      </Container>
    </div>
  );
}
export default StudentPromptView;