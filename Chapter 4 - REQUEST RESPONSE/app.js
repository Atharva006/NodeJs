const http = require('http');

const server = http.createServer((req, res)=>{
  //console.log(req.url);
  if(req.url === '/'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>WebPage</title></head>');
  res.write('<body><h1>Hello from Atharva</h1></body>');
  return res.end();
  }
  else if(req.url === '/products'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>WebPage</title></head>');
  res.write('<body><h1>Our Products</h1></body>');
  return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>WebPage</title></head>');
  res.write('<body><h1>WELCOME</h1></body>');
  return res.end();
});

const PORT  = 3000;
server.listen(PORT,() => {
  console.log(`Server is Started!`);
});