const http = require('http');
const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('Middleware1 here', req.url,req.method);
    next();
});
app.use((req,res,next)=>{
    console.log('Middleware2 here',req.url,req.method);   
    next(); 
});
// app.use((req,res,next)=>{
//     console.log('Middleware3 here');
//     res.send("<p>Welcome to server with NodeJS");
// });
app.get("/",(req,res,next)=>{
    console.log("Handling / for GET", req.url,req.method);
    res.send("<h1>Welcome To your Webpage</h1>");
});
app.get("/contact-us",(req,res,next)=>{
    console.log("Handling contact us", req.url,req.method);
    res.send(`
        <h1>Please give your details</h1>
        <form action="contact-us" method="POST">
            <input type = "text" name = "Name" placeholder = "Enter your name" />
            <input type = "text" name = "Email" placeholder = "Enter your email" />
            <input type = "Submit" ></input>
        `);
});
app.post("/contact-us",(req,res,next)=>{
    console.log('Handling /contact-us for POST');
    res.send('Thanks for your response');
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server Started http://localhost:${PORT}`);
});