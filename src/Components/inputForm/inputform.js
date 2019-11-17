import React from 'react'
import Style from './Style'

export default()=>{
    return(
        <div className="container-fluid form-background">
            <div className="column from-body">
                <div className="form-data">
                    <form className="form d-flex">
                        <label>First Name</label>
                        <input></input>

                        <label>First Name</label>
                        <input></input>

                        <label>Phone</label>
                        <input></input>

                        <label>Email</label>
                        <input></input>

                        <label>Post Body</label>
                        <input></input>

                        <button>Submit</button>

                    </form>
                </div>
            </div>   
        <Style/>
        </div>

    );

}