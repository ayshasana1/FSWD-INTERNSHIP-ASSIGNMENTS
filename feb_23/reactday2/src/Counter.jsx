/* 
usestate hooks
components has state

synatx:
const[state, setstate]= usestate(initialvalue);

*/
import React, { useState } from "react";

function Counter(){
    const [count,setCount]=useState(0);

    return(
        <div>
            <h2>Counter App</h2>
            <h1>{count}</h1>

            <button onClick={()=>setCount(count+1)}>➕</button>
            <button onClick={()=>setCount(count-1)}>➖</button>
        </div>
    );
}
export default Counter;