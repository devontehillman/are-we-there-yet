import React from 'react'
import Form from 'react-bootstrap/Form'

function SignUp() {
    return (
        <div>
            <Form>
                <div action="/action_page.php" class="signup">
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
            </Form>
        </div>
    )
}

export default SignUp;