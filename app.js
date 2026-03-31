const http = require("http");

http.createServer((req, res) => {
	res.end("🔥kubernetes updations done @ 19:39 pm  🚀");
}).listen(8080, () => {
	console.log("Server running on port 8080");
});
