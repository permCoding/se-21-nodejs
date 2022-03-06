const http = require("http")

const server = http.createServer();

let contenttype = {
    "Content-Type": "text/html"
};

const request = (req, res) => {
    res.writeHead(200, contenttype);
    let br = (req.url == "/line")? '\n': "<br>";
    res.write("- server -");
    res.write(br);
    res.end("- test -");
    console.log("request");
};

const listening = () => {
    console.log(server.address().port);
};

server.listen(3000);

server.on("request", request);

server.on("listening", listening);
