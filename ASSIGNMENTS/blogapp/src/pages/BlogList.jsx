import React from "react";
import {Link} from "react-router-dom";

const blogs=[
    {id:1, title: "React Basics"},
    {id:2, title: "Understanding useStates"},
    {id:3, title: "React Router Guide"}
];

function BlogList(){
    return(
        <div>
            <h1>Blog List</h1>
            {blogs.map((blog)=>(
                <div key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <h3>{blog.title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
