import React, { Component } from 'react'
import axios from 'axios'
import './IndexPage.css'
import { Table } from 'react-bootstrap'
import Template from './Template/Template'

class IndexPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response)
            this.setState({users: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retrieving data'})
        })
    }

    render(){
        const { users, errorMsg } = this.state
        return(
            <div>
                <div className='index_layout'>
                    <div className='index_layout_l'>
                    <h1>Local table</h1>
                        <Template />
                    </div>

                    <div className='index_layout_r'>
                        <h1>JSON table</h1>
                        <Table striped bordered hover className='json_table'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>   
                            {
                            
                                users.length ?
                                users.map(user => 

                                <tr>
                                    <td key={user.id}>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                                
                                ) : null
                            
                            }
                            { 
                                errorMsg ? <tr><td>{errorMsg}</td><td>{errorMsg}</td></tr> : null 
                            }
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>
        );
    }
}

export default IndexPage