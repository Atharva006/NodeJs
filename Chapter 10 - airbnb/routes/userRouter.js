//Core Module
const path =require('path');

const express = require('express');
const userRouter = express.Router();
//Local Module
const rootDir = require('../utils/pathUtil.js');

userRouter.get("/",(req, res,next)=>{
  res.sendFile(path.join(rootDir,'views', 'home.html'));
});

module.exports = userRouter;