var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>Hello Nodejs!</h1>");
}).listen(3000);
