// import React, {Component} from 'react';
// import {Bar} from 'react-chartjs-2';
// import axios from 'axios';
// // import ResponseCollective, {topicID, answer} from '../ResponseCollective'


// const Chart = () => {
//   const [chart,setChart] = useState({});

//   useEffect(() => {
//     getData();
//   },[]);

//   const getData = async () => {
//     try{
//       const res = await axios.get('/api/responses/' +topicID).then(res => {
//         const coin = res.data;
//         let labels =[];
//         let data = [];
//         coin.forEach(element => {
//           labels.push(element._id);
//           data.push(element.count);
//         });
//             console.log(coin)
//             setChart({
//             chartData: {
//             labels: labels,
//             datasets:[
//               {
//                 label: "Comprehension",
//                 data:data,
//                 backgroundColor:'#95B73D'
//               }
//             ]
//             }
//             })

//               })
//       .catch((err) => {
//         res.status(422).json(err);
//       });
//     }
//     catch(error){
//       console.log(error.response);
//     }
//   };
//   // constructor(props){
//   //   super(props);
//   //   this.state = {
//   //     chartData:props.chartData
//   //   }
//   //   console.log(props)
//   // }



//   // static defaultProps = {
//   //   displayTitle:true,
//   // }
//   // componentDidMount(){
//   //   // this.getchartData(); // this should be this.getChartData();
//   //    this.getChartData();
//   //  }
 
//   //  getChartData(){
//   //    this.setState({
//   //      chartData:{
//   //        labels: ['1', '2', '3', '4', '5'],
//   //        datasets:[
//   //          {
//   //            label: "hi",
//   //            data:[
//   //              1,
//   //              4,
//   //              7,
//   //              22,
//   //              20,
//   //            ],
//   //            backgroundColor:[
//   //              '#95B73D',
//   //            ]
//   //          }
//   //        ]
//   //      }
//   //    });
//   //  }
//   render() {
//     return (
//       <div className="Chart">
//         {/* <Bar
//           data={this.state.chartData}
//         /> */}
//         <Chart data={chart} />
//       </div>
//     );
//   }
// }

// export default Chart;