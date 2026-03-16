//conditional rendering
import React, { useState } from "react";

function ToggleMessage(){
    const [isVisible, setIsVisible]=useState(false);
    return(
        <div>
            <button onClick={()=>setIsVisible(!isVisible)}>
                Toggle Message
            </button>
            {isVisible && <h3>This Message is Visible🥳🥳</h3>}
        </div>
    );
}

export default ToggleMessage;