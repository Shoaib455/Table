import React,{Component} from 'react'
import data from '../../Components/data/data.json'
import ReactDOM from 'react-dom'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Style from './style'

const selectRow = {
    mode: 'checkbox',
    bgColor: 'rgb(238, 193, 213)'
  };

  const cellEdit = {
    mode: 'click',
    blurToSave: true
  };


let order = 'desc';
 class SortTable extends React.Component {

  handleBtnClick = () => {
    if (order === 'desc') {
      this.refs.table.handleSort('asc', 'name');
      order = 'asc';
    } else {
      this.refs.table.handleSort('desc', 'name');
      order = 'desc';
    }
  }



  render() {
    return (
        
      <div className="col-md-12">
    
        <button onClick={ this.handleBtnClick }>Sort Product Name</button>
        <BootstrapTable ref='table' data={ data } striped hover condensed insertRow exportCSV
          selectRow={ selectRow }
          cellEdit={ cellEdit }
          deleteRow
         >
        
        
            <TableHeaderColumn width='105'  height='150' filter={ { type: 'TextFilter', delay: 1000 } }  className="company" dataField='name'  isKey={ true } dataSort={ true }><h5 style={{textAlign:"center"}}>Name</h5></TableHeaderColumn>
            <TableHeaderColumn width='120'  dataField='company' className="company" dataSort={ true }><h5 style={{textAlign:"center"}}>Company</h5></TableHeaderColumn>
            <TableHeaderColumn width='270'  dataField='email' className="company" dataSort={ true }><h5 style={{textAlign:"center"}}>Email</h5></TableHeaderColumn>
            <TableHeaderColumn width='150'  dataField='phone' className="company" dataSort={ true }><h5 style={{textAlign:"center"}}>Phone</h5></TableHeaderColumn>
            <TableHeaderColumn width='150'  dataField='address' className="company" dataSort={ true }><h5 style={{textAlign:"center"}}>Address</h5></TableHeaderColumn>
        </BootstrapTable>
        <Style/>
      </div>
    );
  }
}    
export default SortTable;