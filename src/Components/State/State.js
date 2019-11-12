// import React,{useState} from 'react'

// function Example(){

//     const [count,setCount] = useState(0);

//     return(
//         <div>
//             <p>You Clicked {count} Time</p>
//             <button onClick={()=> setCount(count+1)}>
//                 Click it and see the count 
//             </button>
//         </div>
//     );
// }
// export default Example;

import React, { useState,useEffect } from 'react'

function Example(){
    
    const [count,setCount]= useState(0);

    useEffect(()=>{

        });

    return(
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={()=> setCount(count+1)}>
                Click Me
            </button>
        </div>
    );
}
export default Example;

