var net = require("net"),
    stdout = process.stdout,
    count = 0,
    users = {};

/**创建服务器 */
var server = net.createServer(function (conn) {
    var nickname = "";
    conn.setEncoding("utf8");

    conn.write("> Welcome to node-chat!\n"
        + "> " + count + " other people are connected at this time.\n"
        + "> please write your name and press enter: ");

    count++;

    conn.on("close", function () {
        count--
    });

    conn.on("data", function (data) {
        if (!/[\r\n]/.test(data)) {
            nickname += data;
        } else {
            if (nickname) {
                console.log(nickname);

                if (users[nickname]) {
                    conn.write("\"" + nickname + "\"" + " already in use. try again: ");
                } else {
                    users[nickname] = conn;
                    conn.write("\"" + nickname + "\"" + " joined the room.\n");
                }
            }
            nickname = "";
        }

        // stdout.write(data);
    });
});

server.listen(3000, function () {
    console.log("\033[96m" + "   server listening on *:3000  " + "\033[39m");
})