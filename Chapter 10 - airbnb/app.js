//Core Module
const path = require('path');

//External Module
const express = require('express');


//Local Module
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil.js');

const app = express();

// app.use((req,res,next)=>{
//   console.log(req.url,req.method);
//   next();
// });

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);



//404 Error
// app.use((req,res,next) =>{
//   res.status(404).send(`<h1>Your page not found 404 Error</h1>`);
// });
//HTML handling 404
app.use("/",(req,res,next)=>{
  res.sendFile(path.join(rootDir ,'views', '404.html'));
});



const PORT = 3000;
app.listen(PORT, ()=>{
  console.log(`Server Started http://localhost:${PORT}`);
});