import React, {useState,Component } from 'react'
import data from '../data/data.json'
import { Table } from 'react-bootstrap'  
import arraySort from 'array-sort'
import ReactDOM from 'react-dom'


class Todo extends Component { 
    // onSubmitHandle(event) {  event.preventDefault();
    // this.setState({    mockData: [...this.state.mockData, {        id: Date.now(),        title: event.target.item.value,        done: false,        date: new Date()    }]  });
    // event.target.item.value = '';}

    onDeleteHandle(){ 
      let id = arguments[0];
      this.setState({    
        mockData: this.state.mockData.filter(item => {    
          if (item.id !== id) 
        {        return item;      }    })  });}


    
    
        // renderEditForm() {    if (this.state.edit) {      return <form onSubmit={this.onUpdateHandle.bind(this)}>        <input type="text" name="updatedItem" className="item" defaultValue={this.state.title} />        <button className="update-add-item">Update</button>      </form>    }  }
        // {this.renderEditForm()}

        // onEditHandle(event) {  this.setState({    edit: true,    id: arguments[0],    title: arguments[1]  });}
        // this.setState({      mockData: this.state.mockData.map(item => {        if (item.id === this.state.id) {          item['title'] = event.target.updatedItem.value;          return item;        }
        // return item;      })   });

    state = {  edit: false,  
                 id: null,
        
          mockData: data  
     }
 
     render() 
         {
             return (   
              <div>   
                {/* <form onSubmit={this.onSubmitHandle.bind(this)}>  
                <input type="text" name="item" className="item" />     
                <button className="btn-add-item">Add</button>    
                </form>  */}
              
              <Table striped bordered hover>
<thead>
  <tr>
    <th>Name</th>
    <th>Company</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Address</th>
  </tr>
</thead>


                 {this.state.mockData.map(item => (        
                 <tbody>
                 <tr>
                 <td key={item.id}>{item.name}</td>
                 <td>{item.company}</td>
                 <td>{item.email}</td>
                 <td>{item.phone}</td>
                 <td>{item.address}</td>
                 <td>   <button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button> </td>
                 


                 </tr>
                 </tbody>
               ))}   

               </Table>
               </div>  );}

        

}
export default Todo;



                 {/* <button onClick={this.onEditHandle.bind(this, item.id, item.title)}>Edit</button>        */}
                 {/* <button onClick={this.onCompleteHandle}>Complete</button>      */}