//Core module
const path = require('path');

//External Module
const express = require('express');
const hostRouter = express.Router();

//Local Module
const rootDir = require('../utils/pathUtil.js');

hostRouter.get("/host/add-home", (req, res) => {
  res.sendFile(path.join(rootDir,'views','addHome.html'));
});

hostRouter.post("/host/add-home", (req, res) => {
  console.log(req.body);  
  res.sendFile(path.join(rootDir,'views','addedHome.html'));
});

module.exports = hostRouter;
