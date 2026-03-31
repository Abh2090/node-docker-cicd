const http = require("http");

http.createServer((req, res) => {
	res.end("🔥kubernetes updations done @18:19 pm,31st march 2026 🚀");
}).listen(8080, () => {
	console.log("Server running on port 8080");
});
