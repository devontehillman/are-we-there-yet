import React, { Component } from 'react'

class TopicList extends Component {
    constructor(){
        super();
        this.state={
            topic:'',
            prompt:'',
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

  
    
    render() {
        return (
            <div>
            <h3 class="TopicBig">Topic List</h3>
                <br/>
                <form onSubmit={this.onSubmit} className="Topic"><br/>
                    <div>
                    <input type="text" name="topic1" placeholder="Topic" value={this.state.value} /><br/><br/>
                    <input type="text" name="topic1" placeholder="Topic" value={this.state.value} /><br/><br/>
                    <input type="text" name="topic1" placeholder="Topic" value={this.state.value} /><br/><br/>
                    <input type="text" name="topic1" placeholder="Topic" value={this.state.value} /><br/><br/>
                    <input type="text" name="topic1" placeholder="Topic" value={this.state.value} /><br/><br/>
                    </div>
                </form>
            </div>
        )
    }
}


export default TopicList