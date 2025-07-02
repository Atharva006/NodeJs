//Core Module
const path = require('path');

//External Module
const express = require('express');
const hostRouter = express.Router();

//Local Module
const rootDir = require('../utils/pathUtil');

hostRouter.get("/",(req,res)=>{
    console.log(req.body); 
  res.sendFile(path.join(rootDir,'views','contact-us.html'));
});
hostRouter.post("/filled", (req, res) => {
  console.log(req.body);  
  res.sendFile(path.join(rootDir,'views','filled.html'));
});
hostRouter.use("/",(req,res)=>{
  res.sendFile(path.join(rootDir,'views','404.html'));
});

module.exports = hostRouter;