const express = require('express');

//const requestHandler = require('./user');

const app = express();
app.use("/",(req,res,next)=>{
  console.log('Hello from 1 middleware');
  next();
});

app.use("/form-details",(req,res,next)=>{
  console.log('Hello from 2 middleware');
  res.send  ("<p>Welcome to Page via NodeJs</p>");
});




const PORT =3000;
app.listen(PORT, ()=>{
  console.log(`Server Started localhost:${PORT}`);
});