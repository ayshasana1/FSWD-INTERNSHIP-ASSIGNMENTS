import React, { useEffect } from "react";

function LifecycleDemo(){
    useEffect(()=>{
        console.log("Component Mounted");
    }, []);
    return(
        <div>
            <h2>Check Console</h2>
        </div>
    );
}
export default LifecycleDemo;