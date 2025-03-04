import http from "http";
import dotenv from "dotenv";
dotenv.config();

const server = http.createServer(
  (request: http.IncomingMessage, response: http.ServerResponse) => {
    const { url } = request;

    if (url === "/") {
        response.writeHead(200, {"Content-Type": "text/html "});
        response.end("<h1>Home</h1>");
        return
    }
    if (url === "/about") {
        response.writeHead(200, {"Content-Type": "text/html "});
        response.end("<h1>About</h1>");
        return
    }
    if (url === "/my-account") {
        response.writeHead(403, {"Content-Type": "text/palin "});
        response.end("You have no access to this page");
        return
    }
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Page not found");
    return;
  }


);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
