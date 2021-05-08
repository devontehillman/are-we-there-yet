import React, {Component} from 'react'

class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
        }
    }

    //handles the submit
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    
    // handles the submit for posting from the form to the api  
    onSubmit(e){
        e.preventDefault();
        
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    render() {
    return (
        <div>
            <form onSubmit={this.onSubmit} className="login">
                <div>
                    <label htmlFor="uname" onChange={this.onChange} >Username:</label><br/>
                    <input type="text" name="uname" value={this.state.uname} placeholder="Username"/><br/>
                </div>
                <div>
                    <label htmlFor="lname">Password:</label><br/>
                    <input type="text" name="password" onChange={this.onChange} placeholder="Password" value={this.state.password}/><br/><br/>
                    <input type="submit" value="Submit" />
                </div>
            </form> 
        </div>
    )
}
}

export default Login;
