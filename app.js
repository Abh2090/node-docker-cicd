const http = require("http");

http.createServer((req, res) => {
	res.end("🔥Kubernetes Rolling update successfully 🚀");
}).listen(8080, () => {
	console.log("Server running on port 8080");
});
