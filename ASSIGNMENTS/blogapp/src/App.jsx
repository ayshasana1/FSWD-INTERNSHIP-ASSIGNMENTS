import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";


function App(){
  return(
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blogs" element={<BlogList/>} />
        <Route path="/blog/:id" element={<BlogDetails/>} />
        <Route path="*" element={<NotFound/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App;