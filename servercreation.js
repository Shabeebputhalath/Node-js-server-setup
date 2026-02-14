var http=require('http');
http.createServer(server).listen(8888);

function server(req,res){
    res.write("Server is running");
    res.end();
}
// a simple server creation using node js
// ithile function server() is called when the server receives a request and it sends a response back to the client. The server listens on port 8888 for incoming requests.
// another way
var http=require('http');
var server=http.createServer(function(req,res){
    res.write("Server is running");
    res.end();
});