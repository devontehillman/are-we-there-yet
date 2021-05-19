import React, { useEffect, useState } from "react";
import API from "../../utils/API";
// import myLineGraph from "../graphs";
import Chart from "../Chart"
function ResponseCollective() {
  const [answer, setResponses] = useState([]);
  const [topicID, setTopicID] = useState("");
  //   const [_id, setID] = useState([]);
  //   const [userID, setuserID] = useState([]);
  //   const [topicID, settopicID] = useState([]);

  function something(res) {
    const totaltops = res.data;
    const newtopicID = totaltops[totaltops.length - 1];
    setTopicID(newtopicID._id);
  }
  function loadTopicID() {
    API.getTopics()
      .then((res) => something(res))
      .catch((err) => console.log(err));
    console.log(topicID);
  }

  useEffect(() => {}, []);
  
  loadResponses();
  function getThemResponses(res) {
    setResponses(res);
    console.log(answer);

  }
  function loadResponses() {
    API.getResponses(topicID)
      .then((res) => getThemResponses(res.data))
        // .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  loadTopicID();
  
  return (
    <div>
      <Chart />
    </div>
  );
}
export default ResponseCollective;