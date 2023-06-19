var create = require('./db1.js')
var fs = require('fs');
var http = require('http');
var t = fs.readFileSync('./newform.html', 'utf-8');
var server = http.createServer((req, res) => {
    var url = req.url;
    if (url.indexOf('/home') >= 0) {
        res.end(t);
    }
    else if (url.indexOf('/style') >= 0) {
        fs.readFile('style.css', 'utf-8', (err, data) => {
            res.end(data);
        })
    }
    else if (url.indexOf('/users') >= 0) {
        console.log(url);
        var emp = [];
        var queryStr = url.split('?')[1];
        // console.log(queryStr);
        var parameters = queryStr.split('&');
        console.log(parameters);
        for (var i = 0; i < parameters.length; i++) {
            var param = parameters[i];
            console.log(param);
            var paramDetails = param.split("=");
            console.log(paramDetails);
            emp.push(paramDetails);
        };
        fs.readFile("./success.html", "utf-8", (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end("Error reading home.html");
            } else {
                res.write(data);
                res.end();
            }
        });
        console.log(emp);
        create.insert(emp[0][1],  emp[1][1], emp[2][1]);
    }
    else {
        res.end('invalid request');
    }
});
server.listen(8000, () => console.log('Server Is Running'));
