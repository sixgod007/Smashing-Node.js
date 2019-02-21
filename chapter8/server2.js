
/**connect构建服务器 （serveStatic中间件） */

let connect = require("connect"),
    serveStatic = require("serve-static");

let app = connect();

app.use(serveStatic(__dirname));

app.listen(3000);



