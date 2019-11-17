import React, {useState, useEffect} from 'react';
import arraySort from 'array-sort';
// import data from '../data/data.json'
import { Table } from 'react-bootstrap'
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import {Button} from'react-bootstrap'
import Move from '../../Components/ButtonModel/Model'




export default()=>{



    // model button starts here
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // model button ends here
    const [data, setdata] = useState([]);

    useEffect(()=>{
        axios.get('https://personal-app-team.herokuapp.com/api/team').then(res=>{
            console.log("response", res.data);
            setFrontEndTeam(res.data)
        });
    },[]);



    const deleteName = (id) => {
        setFrontEndTeam([...frontEndTeam.filter((sin) => sin.id !== id)])
    
    };


    const addMember = () => {
        let newFrontEndList = [...frontEndTeam];
        newFrontEndList.push({id: frontEndTeam.length+2, name: name,company: company,email: email,phone: phone,address: address});
        setFrontEndTeam(newFrontEndList);
        setName("");
        setCompany("");

    };

    // editing portion
    const updateName = () => {
        let newFrontEndList = [...frontEndTeam];
        let newFrontEndList2 = [...frontEndTeam];
        let newFrontEndList3 = [...frontEndTeam];
        let newFrontEndList4 = [...frontEndTeam];
        let newFrontEndList5 = [...frontEndTeam];
        
        newFrontEndList[id].name= name;
        newFrontEndList2[id].company= company;
        newFrontEndList3[id].email= email;
        newFrontEndList4[id].phone= phone;
        newFrontEndList5[id].address= address;
        setFrontEndTeam(newFrontEndList,newFrontEndList2,newFrontEndList3,newFrontEndList4,newFrontEndList5);
        setName("");
        setCompany("");
        setEmail("");
        setPhone("");
        setAddress("");
        setId("");
    };

    const editName = (id) => {
        setName(frontEndTeam.find((sin, index)=>index === id).name);
        setCompany(frontEndTeam.find((sin, index)=>index === id).company);
        setEmail(frontEndTeam.find((sin, index)=>index === id).email);
        setPhone(frontEndTeam.find((sin, index)=>index === id).phone);
        setAddress(frontEndTeam.find((sin, index)=>index === id).address);
        setId(id);
    };

    const [id, setId] = useState("");
    // ------------------------


    // const addMember = () => {
    //     let newFrontEndList = [...frontEndTeam];
    //     newFrontEndList.push({id: frontEndTeam.length+2, name: name});
    //     setFrontEndTeam(newFrontEndList);
    //     setName("");
    // };


    const [frontEndTeam, setFrontEndTeam ]= useState([]);

    const [nameSortType, setNameSortType] = useState("");
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    // const [name, setName] = useState("");
    // const [name, setName] = useState("");

    const sortByNames = (x) => {
        x.toString();        
        if(!nameSortType || nameSortType==="DESC"){
        setdata(arraySort(frontEndTeam, x));
        setNameSortType("ASC");
        // this.classList.toggle("fas fa-caret-up");
        }
        else
        {
        setdata(arraySort(frontEndTeam, x,{reverse: true} ));
        setNameSortType("DESC")
        // this.classList.toggle("fas fa-caret-down");
        }
       };


    return(
        <>
        {/* <button onClick={()=>sortByCompany()}>{nameSortType&&nameSortType==="ASC"?"ASCENDING":"DESCENDING"}</button>
        <button onClick={()=>sortByNames()}>{nameSortType&&nameSortType==="ASC"?"ASCENDING":"DESCENDING"}</button> */}
        <Table  hover>
        <thead>
                    <tr style={{background:"lightseagreen",height:"50px",fontSize:"22px"}}>
                        <th  onClick={()=>sortByNames("name")}>NAME</th>
                        <th onClick={()=> sortByNames("company")}>COMPANY</th>
                        <th onClick={()=>sortByNames("email")}>EMAIL</th>
                        <th onClick={()=>sortByNames("phone")}>PHONE</th>
                        <th onClick={()=>sortByNames("address")}>ADDRESS</th>
                        <Button variant="primary"  onClick={handleShow} ><a style={{fontSize:"29px" }}>+</a></Button>
     
                    </tr>
                </thead>
            {frontEndTeam.map((single, index) => 
            
               
                <tbody>
                    <tr>
                        
            <td style={{background:""}}>{single.name}</td>
            <td>{single.company}</td>
            <td>{single.email}</td>
            <td>{single.phone}</td>
            <td>{single.address}</td>
            <Button variant="secondary mt-1" onClick={() => deleteName(single.id)}>Delete</Button>


            <Button className="ml-1" variant="primary"  onClick={() => editName(index)}>Edit</Button>
                
            {/* <button onClick={() => editName(index)}>Edit</button> */}


            </tr>
            </tbody>


            )}
    
            </Table>        

            <input onChange={(event) => setName(event.target.value)} value={name ? name : ""} type="text"/>
            <input onChange={(event) => setCompany(event.target.value)} value={company ? company : ""} type="text"/>
            <input onChange={(event) => setEmail(event.target.value)} value={email ? email : ""} type="text"/>
            <input onChange={(event) => setPhone(event.target.value)} value={phone ? phone : ""} type="text"/>
            <input onChange={(event) => setAddress(event.target.value)} value={address ? address : ""} type="text"/>
            <button onClick={() => addMember()}>Add New Team Member</button>
            <button onClick={() => updateName()}>Update</button>


            {/* model button functionality starts here */}





        <Modal show={show} onHide={handleClose} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title style={{alignItems: 'center'}}>ADD DATA</Modal.Title>
          </Modal.Header>
          <Modal.Body>  
            <div className="d-flex flex-column">           
            <label>Name</label>
            <input style={{width:"450px",height:"35px"}} onChange={(event) => setName(event.target.value)} value={name ? name : ""} type="text"/>
            <label>Company</label>
            <input style={{width:"450px",height:"35px"}} onChange={(event) => setCompany(event.target.value)} value={company ? company : ""} type="text"/>
            <label>Email</label>
            <input style={{width:"450px",height:"35px"}} onChange={(event) => setEmail(event.target.value)} value={email ? email : ""} type="text"/>
            <label>Phone</label>
            <input style={{width:"450px",height:"35px"}} onChange={(event) => setPhone(event.target.value)} value={phone ? phone : ""} type="text"/>
            <label>Address</label>
            <input style={{width:"450px",height:"35px"}} onChange={(event) => setAddress(event.target.value)} value={address ? address : ""} type="text"/>
            </div>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary"  onClick={() => addMember()}>
            Add Data
            </Button>
          </Modal.Footer>
        </Modal>

            </>
);
}
