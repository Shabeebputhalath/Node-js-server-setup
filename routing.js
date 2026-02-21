
var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer(function(req,res){
    var q=url.parse(req.url,true); // for cut the unwanted part of url and get the pathname
   // console.log(q.pathname);


    if(q.pathname==='/'){
    fs.readFile('sample.html',function(err,data){ 
    res.writeHead(200,{'Content-type':'text/html'})
    res.write(data);
    res.end();
    })
}else if(q.pathname==='/signup'){
    fs.readFile('signup.html',function(err,data){ 
    res.writeHead(200,{'Content-type':'text/html'})
    res.write(data);
    res.end();
    })

}else if(q.pathname==='/signupaction'){
    //console.log(q.query.lastName); // for get the query data from url

    res.writeHead(200,{'Content-type':'text/html'})
    res.write('<h1>'+q.query.firstName+' '+q.query.lastName+'</h1>') // for print the query data in html format
    res.end();
}else{
    res.writeHead(404,{'Content-type':'text/html'})
    res.write('Page not found')
    res.end();
}
}).listen(8888, () => console.log("Server started"));
