import React, { useEffect, useState } from "react";
import axios from "axios";


/* import PostCard from "./components/PostCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

 */


/* 
//API integration using fetch
function App(){
  const [posts, setPosts]=useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>response.json())
    .then((data)=>{
      setPosts(data.slice(0,5));  //this shows only 5 post
    });
  },[]);

  return(
    <div>
      <h1>Fetch API Example</h1>
      {posts.map((post)=>(
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
 
export default App;
*/
/* 
function App(){
  const [posts, setPosts]= useState([]);
  useEffect(()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
      setPosts(response.data.slice(0,5));
    })
    .catch((error)=>{
      console.log(error);
    });
  },[]);

  return(
    <div>
      <h1>AXIOS API Example</h1>
      {posts.map((post)=>(
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );

}

export default App;
 */


/* 
function App(){
  const [posts, setPosts]= useState([]);
  const [loading, setLoading]=useState(true);
  const [error, setError]=useState(null);

  useEffect(()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
      setPosts(response.data.slice(0,5));
      setLoading(false);
    })
    .catch((error)=>{
      setError("Something went wrong!");
    });
  },[]);

  if(loading){
    return <h2>{error}</h2>
  }
  return(
    <div>
      <h1>AXIOS API Example</h1>
      {posts.map((post)=>(
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );

}
export default App;
 */



/* 
function App(()=>{
  axios
  .get()
})
*/