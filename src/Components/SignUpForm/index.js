import React, {Component} from 'react'

class SignUp extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch ('https://jsonplaceholder.typicode.com/posts', {
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
                <div action="/action_page.php" className="signup">
                    <label  htmlFor="Fname" onChange={this.handleChange} >
                        First name:
                      
                        </label>
                    <input type="text" name="fname" value={this.state.value} placeholder="First Name" />
                    <label  htmlFor="Lname" onChange={this.handleChange}>
                        Last name:
                       
                        </label>
                    <input type="text" name="lname"  value={this.state.value} placeholder="Last Name" />
                    <label htmlFor="Uname" onChange={this.handleChange}>
                        Username:
                        
                        </label>
                    <input type="text" name="Uname" value={this.state.value} placeholder="Username" />
                    <label htmlFor="password" onChange={this.handleChange}>
                        Password:
                     
                        </label>
                    <input type="text" name="password"  value={this.state.value} placeholder="Password" />
                    <label htmlFor="email" onChange={this.handleChange}>
                        Email:
                     
                        </label>
                    <input type="text" name="email"  value={this.state.value} placeholder="Email" />
                    <input type="submit" value="Submit" />
                </div>
                </form>
        </div>
    )
}
}

export default SignUp;