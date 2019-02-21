/** 服务端 */

let http = require("http"),
    qs = require("qs");

http.createServer(function (req, res) {
    var body = "";

    req.on("data", function (chunk) {
        body += chunk;
    });

    req.on("end", function () {
        console.log("\n got name \033[90m" + qs.parse(body).name + "\033[39m");

        res.writeHead(200, { "content-type": "text/html" });
        res.end("Done");
    });

}).listen(3000);