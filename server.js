var readline=require('readline');
var fs=require('fs');
var http=require('http');
var server=http.createServer((request,response)=>{
   response.end('hello fro the server');
    console.log('new request has received');
    console.log(request);
});
server.listen(8000,'127.0.0.1',()=>{
    console.log('server has started');
})