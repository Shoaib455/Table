
// import Table from './Components/bootsraptable/bootsrap'
// import Toggle from './Components/table2/table2';
// import Table from './Components/dataTable/dataTable'
// import Toggle from './Components/addrow/addrow'
// import Toggle from './Components/sorting/sorting'
// import Toggle from './Components/ButtonModel/Model'
// import Toggle from './Components/qualificationdata/qualificationdata'
// import Toggle from './Components/sidebar/sidebar'
// import Toggle from './Components/Input/input'
// import Toggle from './Components/slider2/slider'
// import Toggle from './Components/bubbleslider/bubbleslider'
// import Toggle from './Components/collapse/Collapse'
// import Toggle from './Components/inputForm/inputform'



import React from 'react'
import data from './Components/data/data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Toggle from './Components/qualificationdata/qualificationdata'


export default ()=>{
  return(
      // <Table data={data} />
      <Toggle />
  );
}

    















// import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


// let order = 'desc';
//  class SortTable extends React.Component {

//   handleBtnClick = () => {
//     if (order === 'desc') {
//       this.refs.table.handleSort('asc', 'name');
//       order = 'asc';
//     } else {
//       this.refs.table.handleSort('desc', 'name');
//       order = 'desc';
//     }
//   }

//   render() {
//     return (
//       <div>
        
//         <button onClick={ this.handleBtnClick }>Sort Product Name</button>
//         <BootstrapTable ref='table' data={ data } striped hover condensed>
//             <TableHeaderColumn width='115' style={ { color: 'red' } } dataField='name' isKey={ true } dataSort={ true }>Name</TableHeaderColumn>
//             <TableHeaderColumn width='115' dataField='company' dataSort={ true }>Company</TableHeaderColumn>
//             <TableHeaderColumn width='260' dataField='email' dataSort={ true }>Email</TableHeaderColumn>
//             <TableHeaderColumn width='260' dataField='phone' dataSort={ true }>Phone</TableHeaderColumn>
//             <TableHeaderColumn width='150' dataField='address' dataSort={ true }>Address</TableHeaderColumn>
//         </BootstrapTable>
//       </div>
//     );
//   }
// }    
// export default SortTable;    


// export default function Example (){
// return(
//   <BootstrapTable data={data} striped hover>
//       <TableHeaderColumn isKey dataField='name'>Name</TableHeaderColumn>
//       <TableHeaderColumn dataField='company'>Company</TableHeaderColumn>
//       <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
//       <TableHeaderColumn dataField='phone'>Phone</TableHeaderColumn>
//       <TableHeaderColumn dataField='address'>Address</TableHeaderColumn>
//   </BootstrapTable>
// );
// }



































// function App({
//   render{
//     return (
//       <div>
    
//       </div>
//     )
//   }



