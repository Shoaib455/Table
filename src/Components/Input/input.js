import React from 'react'
import Style from './style'
import Form from 'react-bootstrap/Form'

export default ()=>{
    return(
        <form className="d-flex flex-column">
            
            <div className="d-flex flex-column inputs">
            <input className="inputall" placeholder="First name" />
            <input className="inputall mt-2" placeholder="Last name"/>
            <input className="inputall mt-2" placeholder="Email" />
            <input className="inputall mt-2" placeholder="Mobile"/>
            
            <div className="checkbox d-flex mt-1">
              <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox"/>
              </Form.Group>
             <p className="ml-3 para-input">I accept the <span className="span">Privacy Policy</span> and <span className="span">Terms & Conditions.</span></p>
           
            </div>
            <Style/>
            </div>
        </form>
    );
}