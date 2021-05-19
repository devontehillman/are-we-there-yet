import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Chart from "../Chart"
function ResponseCollective() {
  const [answer, setResponses] = useState([]);
  const [topicID, setTopicID] = useState("");


  loadTopicID();

  useEffect(() => {  
    loadResponses();
  }, [topicID]);
  

  function something(res) {
    const totaltops = res.data;
    const newtopicID = totaltops[totaltops.length - 1];
    setTopicID(newtopicID._id);
  }
  function loadTopicID() {
    API.getTopics()
      .then((res) => something(res))
      .catch((err) => console.log(err));
    // console.log(topicID);
  }
  
  // function getThemResponses(res) {
  //   answer = res
  //   console.log(answer);

  // }

  function loadResponses() {
    API.getResponses(topicID)
      // .then((res) => getThemResponses(res.data))
        // .then((res) => console.log(res.data))
        .then((res) => setResponses(res.data))
      .catch((err) => console.log(err));
      // console.log(answer);
  }
console.log(answer);
console.log(topicID);

  return (
    <div>
      <Chart />
    </div>
  );
}
export default ResponseCollective;