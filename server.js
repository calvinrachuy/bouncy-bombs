var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  fs.readFile('index.html', function(err, file) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(file);
    res.end();
  });
}).listen(3000);