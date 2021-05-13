import React, { useEffect, useState } from "react";
import MultiButton from "../MultiButton";
import ThumbButton from "../ThumbButton";
import AnyQuestions from "../AnyQuestions";
import API from "../../utils/API";
import Container from "react-bootstrap/Container";

function StudentPromptView() {
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    loadTopics();
  }, []);

  function something(res) {
    setTopic(res.data[0].topic);
    setType(res.data[0].questionType);
  }

  function loadTopics() {
    API.getTopics()
      .then((res) => something(res))
      // .then((res) => setTopic(res.data[0].topic))
      // .then((res) => setType(res.data[0].questionType))
      .catch((err) => console.log(err));
  }

  function handleSubmit(e) {
    e.preventDefault();
    loadTopics();
    console.log("Hi!");
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
        <h3>Press the Button!</h3>
        <h1>{topic}</h1>
        <button onClick={handleSubmit}>
          <input type="submit" value="Submit" />
        </button>
        {option}
      </Container>
    </div>
  );
}
export default StudentPromptView;
