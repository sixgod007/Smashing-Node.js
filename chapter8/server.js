/**http构建服务器 */

var http = require("http"),
    fs = require("fs");


var server = http.createServer(function (req, res) {
    const reqUrl = req.url;

    if ("GET" == req.method && "/images" == req.url.substr(0, 7) && ".png" == reqUrl.substr(-4)) {

        fs.stat(__dirname + req.url, function (err, stat) {
            if (err || !stat.isFile()) {
                res.writeHead(404);
                res.end("Not Found");
                return;
            } else {
                serve(__dirname + reqUrl, "image/png");
            }
        });

    } else if ("GET" == req.method && "/" == reqUrl) {

        serve(__dirname + "/index.html", "text/html");

    } else {

        res.writeHead(404);
        res.end("Not Found");
    }

    function serve(path, type) {
        res.writeHead(200, { "content-type": type });
        fs.createReadStream(path).pipe(res);
    }
}).listen(3000);

