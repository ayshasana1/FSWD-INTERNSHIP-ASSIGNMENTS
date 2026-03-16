import React from "react";

/* function Welcome(props){
    return(
        <div>
            <h2>Hello, {props.name}👋</h2>
            <p>your role is: {props.role}</p>
        </div>
    );
}
 */

function Welcome({name,role}){
    return(
        <div>
            <h2>Hello {name}</h2>
            <p>Role is:{role}</p>
        </div>
    );
}
export default Welcome;