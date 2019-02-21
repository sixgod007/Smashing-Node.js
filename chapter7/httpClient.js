/** 客户端 */

let http = require("http"),
    qs = require("qs"),
    stdin = process.stdin,
    stdout = process.stdout;




function send(theName) {
    http.request({
        host: "127.0.0.1",
        port: 3000,
        url: "/",
        method: "POST"
    }, function (res) {
        res.setEncoding("utf8");
        res.on("data", function (chunk) {
        });
        res.on("end", function () {
            console.log("\033[96m request complete!\033[39m\n");
            stdout.write("\n your name: ");
        });
    }).end(qs.stringify({ name: theName }));

}

stdout.write("\n Your name: ");
stdin.resume();
stdin.setEncoding("utf8");
stdin.on("data", function (name) {
    send(name.replace("\n", ""));
})

