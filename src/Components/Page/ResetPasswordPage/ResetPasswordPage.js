import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class ResetPasswordPage extends Component {

    handleSubmit = e => {
        e.preventDefault()

        const data = {
            email: this.email
        }

        axios.post('forget_password',data)
        .then(
            res => {
                console.log(res)
            }
        )
        .catch(
            err => {
                console.log(err)
            }
        )
    }

    render(){
        return(
            <div className='login_form'>
                    <form className='form_detail'>
                    <h1>Reset Password</h1>

                    <input type='email' placeholder='Email' onChange={e => this.email = e.target.value}/>

                    <button className='reset_button'>Reset</button>

                    <p>Already have an account? <Link to='/login'>Sign in</Link></p>
                </form>  
            </div>
        );
    }
}

export default ResetPasswordPage