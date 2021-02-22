import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './RegisterPage.css'
import axios from 'axios'

class RegisterPage extends Component {
    
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            name : this.name,
            email : this.email,
            password : this.password,
            password_confirm : this.password_confirm,
        }
        axios.post('register', data)
        .then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    };

    render(){
        return(
            <div>
                    <form className='form_detail' onSubmit={this.handleSubmit}>
                    <h1>Register Form</h1>

                    <input type='text' placeholder='username' onChange={(e => this.name = e.target.value)}/>

                    <input type='email' placeholder='Email' onChange={(e => this.email = e.target.value)}/>

                    <input type='password' placeholder='Password' onChange={(e => this.password = e.target.value)}/>
                    
                    <input type='password' placeholder='Password' onChange={(e => this.password_confirm = e.target.value)}/>

                    <button className='SignIn_button'>Sign Up</button>

                    <p>Already have an account? <Link to = '/login'>Sign in</Link></p>
                </form>  
            </div>
        );
    }
}

export default RegisterPage