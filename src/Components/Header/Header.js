import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

class Header extends Component {
    handleLogout = () => {
        localStorage.clear();
        this.props.setUser(null)
    }


    render(){

        let buttons
        if(this.props.user) {
            buttons = 
            (
                <div className='navigation_r'>
                    <Link className='page_link' to='/' onClick={(this.handleLogout)}>Logout</Link>
                </div>
            )
        }else{
            buttons = 
            (
                <div className='navigation_r'>
                    <Link className='page_link' to='/login'>Login</Link>
                </div>
            )
        }

        return(
            <div className='container'>
                <div className='navigation'>
                    <div className='navigation_lf'>
                        <Link className='page_link' to='/'>Home</Link>
                    </div>

                    {buttons}
                </div>
            </div>
            );
        }    
    }

export default Header