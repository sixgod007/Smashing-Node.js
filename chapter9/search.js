var request = require("superagent");

module.exports = function search(query, fn) {
    request.get("https://suggest.taobao.com/sug?code=utf-8")
        .query({ q: query })
        .end((err, res) => {
            // console.log(JSON.parse(res.text).result);
            // console.log(JSON.parse(res.text).result[0]);
            console.log(3);
            var arr = [
                { text: "llccyy", from_user: "lcy" },
                { text: "aavvcc", from_user: "abc" }
            ]

            return fn(null, arr);
            fn(new Error("Bad response!"))
        });
}