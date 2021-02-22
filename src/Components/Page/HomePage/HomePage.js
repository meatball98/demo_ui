import React, { Component } from 'react'
import axios from 'axios'

class HomePage extends Component {
    

    render(){
        if(this.props.user){
            return(
                <p>Name : {this.props.user.name}</p>
                
            )
        }
        return(
            <div className='container'>
                
            </div>
        );
    }
}

export default HomePage