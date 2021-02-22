import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'
import axios from 'axios'

class LoginPage extends Component {

    state = {}

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        };

        axios.post('login', data)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            this.state({
                loggedIn: true
            })
            this.props.setUser(res.data.user)
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        if(this.state.loggedIn) {
            return <Redirect to = {'/'}/>
        }

        return(
            <div className='login_form'>
                    <form className='form_detail' onSubmit={this.handleSubmit}>
                    <h1>Login Form</h1>

                    <input type='email' placeholder='Email' />

                    <input type='password' placeholder='Password'/>

                    <Link className='forget_password' to='/reset_password'>Forget your password?</Link>

                    <button className='SignIn_button'>Login</button>

                    <p>Have not an account yet? <Link to='/register'>Sign up</Link></p>
                </form>  
            </div>
        );
    }
}

export default LoginPage