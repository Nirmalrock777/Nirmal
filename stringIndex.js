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
    }
    else if (url.indexOf('/style') >= 0) {
        fs.readFile('style.css', 'utf-8', (err, data) => {
            response.end(data);
        })
    }

    else if (url.indexOf('/button') > 0) {
        fs.readFile("./button.js", "utf-8", (err, data) => {
            if (err) {
                response.statusCode = 500;
                response.end("Error reading home.html");
            } else {
                response.write(data);
                response.end();
            }
        });
    }
    else if (url.indexOf('/users') >= 0) {
        console.log(url);
        var queryStr = url.split('?')[1];
        var parameters = queryStr.split('&');
        console.log(parameters);
        for (var i = 0; i < parameters.length; i++) {
            var param = parameters[i];
            console.log(param);
            var paramDetails = param.split("=");
            console.log(paramDetails);
        };
        fs.readFile("./success.html", "utf-8", (err, data) => {
            if (err) {
                response.statusCode = 500;
                response.end("Error reading home.html");
            } else {
                response.write(data);
                response.end();
            }
        });
    }

    else {
        response.end('invalid request');
    }
});
server.listen(8000);



