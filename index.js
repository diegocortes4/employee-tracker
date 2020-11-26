const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// connection with servers and ports 

const connection = mysql.createConnection({
    host: "localhost",
    port: 8800,
    user: "root",
    password: "root",
    database: "tracker_DB"
  });

  connection.connect(function(err) {
    if (err) throw err;
    start();
  });

  