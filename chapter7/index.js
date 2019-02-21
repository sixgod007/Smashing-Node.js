/**form表单提交 */

var http = require("http"),
    qs = require("querystring");

http.createServer(function (req, res) {
    let url = req.url;
    if ("/favicon.ico" == req.url) {//浏览器页面标题前面的图片请求

        res.writeHead(200, { "content-type": "image/png" });
        require("fs").createReadStream("favicon.ico").pipe(res);

    } else if ("/" == req.url) {

        res.writeHead(200, { "content-type": "text/html" })
        res.end("<form method='POST' action='/url'>"
            + "<h1>My form</h1>"
            + "<fieldset>"
            + "<label>Personal information</label>"
            + "<p>What\'s your name?</p>"
            + "<input type='text' name='name'>"
            + "<p><Button>Submit</Button></p>"
            + "</fieldset></form>");

    } else if ("/url" == req.url && "POST" == req.method) {

        var body = "";
        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function () {
            res.writeHead(200, { "content-type": "text/html" });
            /*     res.end("<p>Content-Type: " + req.headers["content-type"] + "</p>" +
                    "<p>Data: </p><pre>" + qs.parse(body).name + "</pre>"); */
            res.end("<p>Your name is <b>" + qs.parse(body).name + ".</b></p>");
        });

    } else {
        res.writeHead(404);
        res.end("<p>Page Not Found.</p>")
    }
}).listen(3000);