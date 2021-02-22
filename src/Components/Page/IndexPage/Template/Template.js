import React from 'react'
import './Template.css'
import user from '../Data/Data'
import { Table } from 'react-bootstrap'

function Template({
    name, email
}) {
    return(
        <div>
            <Table striped bordered hover className='local_table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((users, index) => (
                        <tr key={index}>
                            <td className='ss'>{users.name}</td>
                            <td>{users.email}</td>
                        </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Template