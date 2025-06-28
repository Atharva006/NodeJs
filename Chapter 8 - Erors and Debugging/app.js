const http = require('http');
const testing = require('./test');

const server = http.createServer((req,res)=> {
    console.log(req.url,req.method);
    testing();
});

const PORT = 3001;
server.listen(PORT, ()=> {
    console.log(`Server has Started localhost:${PORT}`);
});