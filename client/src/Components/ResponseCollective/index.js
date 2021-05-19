import React, { useEffect, useState } from "react";
import API from "../../utils/API";
// import myLineGraph from "../graphs";
import Chart from "../Chart"
function ResponseCollective() {
  const [answer, setResponses] = useState("");
  //   const [_id, setID] = useState([]);
  //   const [userID, setuserID] = useState([]);
  //   const [topicID, settopicID] = useState([]);
  useEffect(() => {}, []);
  loadResponses();
  function getThemResponses(res) {
    const totalResponses = res.data;
    const newresponse = totalResponses[totalResponses.length - 1];
    setResponses(newresponse.answer);
    console.log(answer);
    // setID(totalResponses._id);
    // setuserID(totalResponses.userID);
    // settopicID(totalResponses.topicID);
  }
  function loadResponses() {
    API.getResponses()
      .then((res) => getThemResponses(res))
      //   .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  ////////////CHARTS!////////////////
  //   chartRef = React.createRef();
  //   const myChartRef = this.chartRef.current.getContext("2d");
  //   new Chart(myChartRef, {
  //     type: "line",
  //     data: {
  //       //Bring in data
  //       labels: ["Jan", "Feb", "March"],
  //       datasets: [
  //         {
  //           label: "Sales",
  //           data: [86, 67, 91],
  //         },
  //       ],
  //     },
  //   });
  //////////////////////////////////////////
  return (
    <div>
      {answer}
      {/* {answers.length ? (
        <List>
          {answers.map((answer) => (
            <ListItem key={answer._id}>
              <strong>{answer.answer}</strong>
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>No One Has an Opinion, I Guess.</h3>
      )} */}
      {/* <myLineGraph /> */}
      <Chart />
    </div>
  );
}
export default ResponseCollective;