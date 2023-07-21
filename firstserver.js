var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.end('your old server created successfully');

}).listen(1001);