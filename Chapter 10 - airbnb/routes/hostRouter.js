const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/host/add-home", (req, res) => {
  res.send(`
    <h1>Register your Home with Airbnb</h1>
    <form action="/host/add-home" method="POST">
      <input type="text" name="houseName" placeholder="Enter your Home name" />
      <input type="submit" />
    </form>
  `);
});

hostRouter.post("/host/add-home", (req, res) => {
  console.log(req.body);  
  res.send(`
    <h1>Registered Successfully</h1>
    <a href="/">Go to Home</a>
  `);
});

module.exports = hostRouter;
