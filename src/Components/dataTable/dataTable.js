import React,{Component} from 'react'
import { Table } from 'react-bootstrap';
import data from '../../Components/data/data.json'




export default function table(props)
{
    return(


        <Table  striped bordered hover>
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Email</th>  
                  <th>Phone</th>
                  <th>Address</th>
                </tr>
            </thead>

            <tbody>
            {
                props.data.map(row =>(
                    <tr>
                       <td active>{row.name}</td>
                       <td>{row.company}</td>
                       <td>{row.email}</td>
                       <td>{row.phone}</td>
                       <td>{row.address}</td>
                   </tr>
                ))
            
            
            }
            </tbody>
           
        </Table>
    );
}