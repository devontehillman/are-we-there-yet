import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class NewChartB extends Component {
    constructor(props){
        super(props);
        this.state = {chartData: props.chartData}
        console.log(props.chartData)
    }

    render(){
        return(
        <div>
            <Bar data={this.state.chartData}/>
        </div>
        )
    }
}

export default NewChartB