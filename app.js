const http = require("http");

http.createServer((req, res) => {
	res.end("🔥kubernetes jenkins auto deployment lab 🚀");
}).listen(8080, () => {
	console.log("Server running on port 8080");
});
