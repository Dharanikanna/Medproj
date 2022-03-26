const mysql = require("mysql")

var db = mysql.createConnection({
    host     : process.env.HDB_HOST,
    user     : process.env.HDB_USER,
    password : process.env.HDB_PASSWORD,
    database : process.env.HDATABASE
  });
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("Database is Connected..!");
  });

module.exports = db