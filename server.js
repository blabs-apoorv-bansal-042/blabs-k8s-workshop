const http = require("http");

const port = process.env.PORT || 3000;
const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("This is home Page");
    res.end();
  } else if (req.url == "/health") {
    res.writeHead(401);
    res.write("unauthorised");
    res.end();
  } else if (req.url == "/ping") {
    console.log("In ping")
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("pong");
    res.end();
  } else res.end("Invalid Request!");
});


server.listen(port, function () {
  const { address } = server.address();
  console.log(`App listening at http://${address}:${port}`);
});

// kub8-image
// k8s-workshop-health