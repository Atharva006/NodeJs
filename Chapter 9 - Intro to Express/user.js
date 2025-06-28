const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
  //console.log(req.url);

  if(req.url === '/'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>WebPage</title></head>');
  res.write('<body><h1>FILL YOUR DETAILS.</h1>');

  res.write('<form action="/form-details" method="POST">');

  res.write('<input type="text" name=username placeholder="Enter your name">');
  res.write('<label for=male>Male</label>');
  res.write('<input type="radio" id="male" name="gender" value="male">');
  res.write('<label for="female">Female</lable>');
  res.write('<input type="radio" name="gender" value="female"><br>');
  res.write('<br><input type="submit" value="Submit">');
  
  res.write('</form>');
  res.write('</body>');
  res.write('</html>');

  return res.end();
  }
  else if(req.url === "/form-details" && req.method ==="POST"){
    fs.writeFileSync('user.txt', 'Atharva Bhosale');
    res.statusCode =302;
    res.setHeader('Location', '/');
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>WebPage</title></head>');
  res.write('<body><h1>WELCOME SIR!</h1></body>');
  return res.end();
});

const PORT  = 3000;
server.listen(PORT,() => {
  console.log(`Server is Started!`);
});