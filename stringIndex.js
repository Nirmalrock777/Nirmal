var q = ['nirmal', 'arun', 'deepak'];
console.log(q.indexOf('deepak'));
var fs = require('fs');
var http = require('http');
var t = fs.readFileSync('./forms.html', 'utf-8');
var server = http.createServer((req, response) => {
    var url = req.url;
    if (url.indexOf('/home') >= 0) {
        response.end(t);
    }
    else if (url.indexOf('/about') >= 0) {
        response.end('u r in about page');
    }
    else if (url.indexOf('/contact') >= 0) {
        response.end('u r in contact page');
    } else if (url.indexOf('/') >= 0) {
        response.end('invalid request');
    }
});
server.listen(8000);