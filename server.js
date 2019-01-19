const http = require('http');
const hostname = '127.0.0.1';
const port = 3002;

function ServerParams(req,res)
{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
}
const server = http.createServer(ServerParams);



// //OR

// const server = http.createServer(function (req,res){
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });

// //OR

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
//   });


  // **************** //

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
