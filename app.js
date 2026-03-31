const http = require("http");

http.createServer((req, res) => {
	res.end(" 🚀kubernetes deployment using git hub auto trigger ");
}).listen(8080, () => {
	console.log("Server running on port 8080");
});
