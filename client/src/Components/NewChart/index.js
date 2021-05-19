import React, {Component, useState, useEffect} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios'
import API from "../../utils/API";


function NewChart () {
        const[chartData, setchartData] = useState()
        const[topicID, setTopicID] = useState()

        getTopic()
        useEffect(() => {

            getChartData()
        },[topicID])


function getTopic (){
    axios.get("/api/topic").then(res => {
        const totaltops = res.data;
        const newtopicID = totaltops[totaltops.length - 1];
        setTopicID(newtopicID._id);
        console.log(newtopicID._id)
    })
}


function getChartData(){
         axios.get("/api/responses/" + topicID).then(res => {
            const coin = res.data;
            let labels = [];
            let data = [];
            coin.forEach(element => {
                labels.push(element._id);
                data.push(element.count);
                console.log(labels)
                });
                 setchartData({
                    chartData:{
                        labels: labels,
                        datasets:[
                        {
                            label:'Comprehension',
                            data:data,
                            backgroundColor:[
                            '#95B73D',
                            ]
                        }
                        ]
                }
     });
    })
    }
    

    return (
      <div className="chart">
          <h3>{topicID}</h3>
        <Bar
          data={chartData}
          options={{
              fontSize:25
            }
          }
        />
      </div>
    )
  
}

export default NewChart