
var mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'nirmal'
});
con.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connection to the database has been successful");
});

function createInCrud(id, names, email) {
  let query = "INSERT INTO student_tbl (id,names, email) VALUES (?,?,?)";
  con.query(query, [id, names, email], (err, result) => {
    if (err) {
      throw err;
    }
  });
}

function updateInCrud(id, names, email) {
  let query = "UPDATE student_tbl SET names = ?, email = ? WHERE id = ?";
  con.query(query, [names, email, id], (err, result) => {
    if (err) {
      throw err;
    }
  });
}

function deleteInCrud(id) {
  let query = "DELETE FROM student_tbl WHERE id = ?";
  con.query(query, [id], (err, result) => {
    if (err) {
      throw err;
    }
  });
}
module.exports = {
  createInCrud,
  updateInCrud,
  deleteInCrud
};