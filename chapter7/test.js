let http = require("http");
// http.createServer(function (req, res) {
//     res.writeHead(200,{"content-type":"text/html"});
//     res.end("<h1>Hello Nodejs!</h1>");
// }).listen(3000);

// http.createServer(function (req, res) {
//     res.writeHead(200, { "content-type": "image/png" });
//     var stream = require("fs").createReadStream("image.png");
//     stream.on("data", function (data) {
//         res.write(data);
//     });

//     stream.on("end", function () {
//         res.end();
//     });
// }).listen(3000);

http.createServer(function (req, res) {
    console.log(req.headers);
    res.writeHead(200, { "content-type": "image/png" });
    require("fs").createReadStream("image.png").pipe(res);
}).listen(3000);