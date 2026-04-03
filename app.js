const http = require("http");

// ❌ Intentional crash
throw new Error("Crash test for auto rollback");

const server = http.createServer((req, res) => {
  const version = process.env.VERSION || "unknown";

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from VERSION " + version + " 🚀");
});

server.listen(8080, "0.0.0.0", () => {
  console.log("Server running on port 8080");
});
