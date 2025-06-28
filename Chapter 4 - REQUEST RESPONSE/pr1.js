const http = require('http');

const server = http.createServer((req, res) => {

  if(req.url === '/home'){
  
  res.write('<html>');
  res.write('<head><title>WebPage</title></head>');
  res.write('<body><h1>Welcome Home</h1></body>');
  return res.end();
  }
  else if(req.url === '/men'){
  
  res.write('<html>');
  res.write('<head><title>WebPage</title></head>');
  res.write('<body><h1>Mens Shop</h1></body>');
  return res.end();
  }
  else if(req.url === '/women'){
  
  res.write('<html>');
  res.write('<head><title>WebPage</title></head>');
  res.write('<body><h1>Womens Shop</h1></body>');
  return res.end(); 
  }
  else if(req.url === '/kids'){
  
  res.write('<html>');
  res.write('<head><title>WebPage</title></head>');
  res.write('<body><h1>Kids Shop</h1></body>');
  return res.end();
  }
  else if(req.url === '/cart'){
  
  res.write('<html>');
  res.write('<head><title>WebPage</title></head>');
  res.write('<body><h1>Your Cart</h1></body>');
    return res.end();
}

res.write('<html>');
  res.write('<head><title>WebPage</title></head>');
  res.write('<body>');
  
  res.write('<h1>Myntra E-commerce</h1>');
  res.write('<br><a href = "/home">Home</a><br>');
  res.write('<br><a href = "/men">Men</a><br>');
  res.write('<br><a href = "/women" >Women</a><br>');
  res.write('<br><a href = "/kids">Kids</a><br>');
  res.write('<br><a href = "/cart">Carts</a><br>');


  res.write('</body>');
  res.write('</html>');
return res.end();

});

const PORT = 3000;
server.listen(PORT, () =>{
  console.log('Sever Started....!');
});