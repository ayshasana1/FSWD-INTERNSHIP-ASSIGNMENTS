import React from "react";
import {useParams} from "react-router-dom";

const blogs=[
    {id:1, title: "React Basics", content: "This is React Basic Blog."},
    {id:2, title: "Understanding useStates", content: "This explains useState hook."},
    {id:3, title: "React Router Guide", content: "This explains React Router."}
];

function BlogDetails(){
    const {id} = useParams();
    const blog = blogs.find((b)=> b.id === parseInt(id));

    if (!blog){
        return <h2>Blog Not Found</h2>;
    }

    return(
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
    );
}

export default BlogDetails;
