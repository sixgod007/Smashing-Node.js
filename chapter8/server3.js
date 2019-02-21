
/**connect构建服务器 （自定义的请求时间中间件） */

let connect = require("connect"),
    time = require("./request-time");


let app = connect();

app.use(time({ time: 500 }));

app.use(function (req, res, next) {
    if ("/a" == req.url) {
        res.writeHead(200);
        res.end("Fast!");
    } else {
        next();
    }
})

app.use(function (req, res, next) {
    if ("/b" == req.url) {
        setTimeout(function () {
            res.writeHead(200);
            res.end("Slow!");
        }, 1000);
    } else {
        next();
    }
})

app.listen(3000);



