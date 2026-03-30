const http = require("http");

http.createServer((req, res) => {
	res.end("🔥 Fresh Start CI/CD 🚀");
}).listen(8080, () => {
	console.log("Server running on port 8080");
});
