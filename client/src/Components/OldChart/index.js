import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios'
import API from "../../utils/API";


class OldChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData,
      // topic: props.topic
    }
  }

  static defaultProps = {
    displayTitle:true,
  }
  componentDidMount(){
     this.getChartData();
    //  this.getTopic();

   }


// getTopic (){
//     axios.get("/api/topic").then(res => {
//         const totaltops = res.data;
//         const newtopicID = totaltops[totaltops.length - 1];
//         this.setState({
//             topic: newtopicID._id});
//         console.log(newtopicID._id)
//     })
// }


   getChartData(){
      const topicID = localStorage.getItem('topicID')
         axios.get("/api/responses/" + topicID).then(res => {
        const coin = res.data;
        let labels = [];
        let data = [];
        coin.forEach(element => {
            labels.push(element._id);
            data.push(element.count);
            console.log(labels)
              });
     this.setState({
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
    
  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              fontSize:25
            }
          }}
        />
      </div>
    )
  }
}

export default OldChart