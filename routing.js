
var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer(function(req,res){
    var q=url.parse(req.url);
   // console.log(q.pathname);


    if(req.url==='/'){
    fs.readFile('sample.html',function(err,data){ 
    res.writeHead(200,{'Content-type':'text/html'})
    res.write(data);
    res.end();
    })
}else if(req.url==='/signup'){
    fs.readFile('signup.html',function(err,data){ 
    res.writeHead(200,{'Content-type':'text/html'})
    res.write(data);
    res.end();
    })

}else if(req.url==='/signupaction'){
    res.writeHead(200,{'Content-type':'text/html'})
    res.write('Signup successful')
    res.end();
}else{
    res.writeHead(404,{'Content-type':'text/html'})
    res.write('Page not found')
    res.end();
}
}).listen(8888, () => console.log("Server started"));
