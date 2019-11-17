import React from 'react'

export default()=>{
    return(
        <style>
            {`
            .inputs {
                display: flex;
                align-items: center;
                padding-top: 1%;
                
            }
            

            .inputall {
             padding-left:3px;
             height: 60px;
             background: #ecf0f2 none repeat scroll 0 0;
             border: 1px solid #ecf0f2;
             width:500px;
             border-radius: 5px;
            }
            .para-input{
                font-weight: bold;    
                    font-size: 19px;
                
            }
            .span{
                font-weight: bold;
                text-decoration: underline;
                color: #8a1082;
            }
            input#formBasicCheckbox {
                width: 30px;
                height: 20px;
            }
            
            `}
        </style>
    );
}