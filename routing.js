
var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    if(req.url==='/'){
    fs.readFile('sample.html',function(err,data){ 
    res.writeHead(200,{'Content-type':'text/html'})
    res.write(data);
    res.end();
    })
}else if(req.url==='/login'){
    res.write('login')
    res.end()
}else{
    res.writeHead(404,{'Content-type':'text/html'})
    res.write('error')
}
}).listen(8888,()=> console.log("Server started")
)