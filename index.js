const http = require("http");
const fs = require("fs");

const html = {
  render(path, response) {
    fs.readFile(path, null, function (error, data) {
      if (error) {
        response.writeHead(404);
        respone.write("file not found");
      } else {
        response.writeHead(200);
        response.write(data);
      }
      response.end();
    });
  },
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    html.render("./index.html", res);
  } else if (req.url === "/home") {
    html.render("./index.html", res);
  } else if (req.url === "/about") {
    html.render("./about.html", res);
  } else if (req.url === "/contact") {
    html.render("./contact.html", res);
  }
});

server.listen(3000);
