import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { useParams } from "react-router-dom";

function ReturnResponses(props) {
  const [answer, setAnswer] = useState([]);

  const { topicID } = useParams();
  useEffect(() => {
    API.getTopic(topicID)
      //   .then((res) => setAnswer(res.data.answer))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return <div>{answer}</div>;
}

export default ReturnResponses;
