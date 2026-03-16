const { application } = require("express");
const http=require("http");
const { json } = require("stream/consumers");
const server = http.createServer((req,res)=>{
    /* 
    if(req.url==="/")
    {
        res.write("Home Page 🏠")
    }
    else if(req.url==="/about")
    {
        res.write("About Page 📃");

    }
    else if(req.url==="/contact")
    {
        res.write("contact page ☎️");
    }
    else{
        res.write("Page not found ❌");
    }
 */

    res.writeHead(200, {"content-type":application/json});
    const data={
        name:"sana",
        role:"jdfh",
        skills:["AIML","cloud"]
    }
    res.write(JSON.stringify(data));
    res.end();
});

server.listen(3000,()=>{
    console.log("server running on port 3000")
});