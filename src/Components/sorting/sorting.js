import React, {useState} from 'react';
import arraySort from 'array-sort';
import data from '../data/data.json'
import { Table } from 'react-bootstrap'


export default ()=>{

    // sorting 



    const [frontEndTeam, setFrontEndTeam ]= useState(data);

    const [nameSortType, setNameSortType] = useState("");

    const sortByNames = () => {
        if(!nameSortType || nameSortType==="DESC"){
            setFrontEndTeam(arraySort(frontEndTeam, 'name'));
            setNameSortType("ASC")
        }else {
            setFrontEndTeam(arraySort(frontEndTeam, 'name',{reverse: true}  ));
            setNameSortType("DESC")
        }
    };


 

    const sortByCompany = () => {
        if(!nameSortType || nameSortType==="DESC"){
            setFrontEndTeam(arraySort(frontEndTeam, 'company'));
            setNameSortType("ASC")
        }else {
            setFrontEndTeam(arraySort(frontEndTeam, 'company',{reverse: true}  ));
            setNameSortType("DESC")
        }
    };


    

    return(
        <>

        <Table striped bordered hover>
        <thead>
                    <tr>
                        <th onClick={()=>sortByCompany()}>{nameSortType&&nameSortType==="ASC"}Name</th>
                        <th onClick={()=>sortByNames()}>{nameSortType&&nameSortType==="ASC"}Company</th>
                        <th onClick={()=>sortByNames()}>{nameSortType&&nameSortType==="ASC"}email</th>
                        <th onClick={()=>sortByNames()}>{nameSortType&&nameSortType==="ASC"}Address</th>
                        <th onClick={()=>sortByNames()}>{nameSortType&&nameSortType==="ASC"}Company</th>
                    </tr>
                </thead>
            {frontEndTeam.map(single => 
            
               
                <tbody>
                    <tr>
            <td>{single.name}</td>
            <td>{single.company}</td>
            <td>{single.email}</td>
            <td>{single.phone}</td>
            <td>{single.address}</td>

            {/* <td>   <button onClick={this.onDeleteHandle.bind(this, single.id)}>Delete</button> </td> */}
            </tr>
            </tbody>
            
            )}
            </Table>        
   
    </> 
);

}