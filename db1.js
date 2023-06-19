function create(id, name,email) {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "nirmal"
    });
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        //Create a Table
        var sql = "CREATE TABLE student_tbl23 (id INT,name VARCHAR(255),email VARCHAR(255))";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 table created");
        });
    });
}
function insert(id, name,email) {
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "nirmal"
    });
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var id1=id,name1=name;email1=email;
        //Insert a record 
        var sql = "INSERT INTO student_tbl (id,name,email) VALUES(?,?,?)";
        con.query(sql,[id1,name1,email1],function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
}
function update(id, name,email) {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "nirmal"
    });
   con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        //Insert a record 
        var sql = "UPDATE student_tbl SET name='ANJANEYA' WHERE id=2";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record updated");
        });
    });
}
function del(id, name,email) {
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "nirmal"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        //Insert a record 
        var sql = "DELETE FROM student_tbl WHERE id=1";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record deleted");
        });
    });
}

module.exports={
    "create":create,"del":del,"update":update,"insert":insert
}