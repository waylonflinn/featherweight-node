express = require("express");

app = express();

app.use(app.router);

app.get("/node", function(req, res){

	res.writeHead(200);
	res.end("rocks!");
});

app.get("/", function(req, res){
	res.sendfile("index.html");
});

app.listen(8080);