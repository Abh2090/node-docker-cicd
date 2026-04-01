const http = require("http");

http.createServer((req, res) => {
	throw new Error("App brokenizzzzzzzzzzzzzzzzzzzwwwwz!);
}).listen(8080, () => {
	console.log("Server running on port 8080");
});

