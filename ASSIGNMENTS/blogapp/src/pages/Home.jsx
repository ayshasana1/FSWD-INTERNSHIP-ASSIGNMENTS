import React from "react";
import {Link} from "react-router-dom";

function Home(){
    return(
        <div>
            <h1>Welcome to my Blog App</h1>
            <Link to="/blogs">Go to Blog List</Link>
        </div>
    );
}

export default Home;
