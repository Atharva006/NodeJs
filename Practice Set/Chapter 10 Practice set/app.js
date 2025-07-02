//Core Module
const path = require('path');
//Local Module
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil');
//External Module
const express = require('express');
const app = express();

app.use(express.urlencoded());
app.use(hostRouter);

const PORT = 3000;
app.listen(PORT,()=>{
  console.log(`Server Stared on http://localhost:${PORT}`);
});


