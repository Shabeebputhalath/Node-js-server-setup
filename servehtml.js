

var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('sample.html',function(err,data){ //you can change the data name like hai
    res.writeHead(200,{'Content-type':'text/html'})
    res.write(data);
    res.end();
    })
}).listen(8888)

 
    
