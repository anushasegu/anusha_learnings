var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/html'});
   var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
   readStream.pipe(response);
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
