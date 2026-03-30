const http = require("http");

http.createServer((req, res) => {
	res.end("🔥CI/CD Pipeline updated successfully 🚀");
}).listen(8080, () => {
	console.log("Server running on port 8080");
});
