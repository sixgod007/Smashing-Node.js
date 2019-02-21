
/**connect构建服务器 （morgan(logger)中间件） */

let connect = require("connect"),
    morgan = require("morgan");

let app = connect();
app.use(morgan('combined'));
app.use(function (req, res, next) {
    if ("GET" == req.method && "/" == req.url) {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<b>request complete!</b>");
    } else {
        next();
    }
});
app.listen(3000);



