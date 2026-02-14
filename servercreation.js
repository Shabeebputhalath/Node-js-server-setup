var http=require('http');
http.createServer(server).listen(8888);

function server(req,res){
    res.write("Server is running");
    res.end();
}
