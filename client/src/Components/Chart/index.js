import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
  }
  componentWillMount(){
    // this.getchartData(); // this should be this.getChartData();
     this.getChartData();
   }
 
   getChartData(){
     this.setState({
       chartData:{
         labels: ['1', '2', '3', '4', '5'],
         datasets:[
           {
             label:'Comprehension',
             data:[
               1,
               4,
               7,
               22,
               20,
             ],
             backgroundColor:[
               '#95B73D',
             ]
           }
         ]
       }
     });
   }
  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In ',
              fontSize:25
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;