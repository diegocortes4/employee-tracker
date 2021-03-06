const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const util = require("util");
const { exit } = require("process");
const figlet = require("figlet");

// connection with servers and ports 

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Mickey19",
  database: "employees" 
});

connection.connect(function (err) {
  if (err) throw err;
  start();
});

function start() {
  inquirer
    .prompt({
      type: "list",
      name: "option",
      message: "What would you like to do?",
      choices: [
        "Add Department",
        "Add Role",
        "Add Employee",
        "View Department",
        "View Role",
        "View Employee",
        "Update Employee Role",
        "Exit"
      ]
    })

    .then(function (result) {
      console.log("You entered: " + result.option);
      switch (result.option) {
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "View Department":
          viewDepartment();
          break;
        case "View Role":
          viewRole();
          break;
        case "View Employee":
          viewEmployee();
          break;
        case "Update Employee Role":
          updateRole();
          break;
        case "Exit":
          connection.end();
          break;
      }
    });
}

function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      message: "What is the name of the department you want to add?",
      name: "department"
    })
    .then(function (res) {
      const department = res.department;
      const query = `INSERT INTO department (Name) VALUES("${department}")`;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
      });
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the job title you want to add?",
        name: "Title"
      },
      {
        type: "input",
        message: "What is the salary for this position?",
        name: "Salary"
      },
      {
        type: "input",
        message: "What is the department ID for this position?",
        name: "departmentID"
      }
    ])

    .then(function (res) {
      const title = res.title;
      const salary = res.salary;
      const departmentID = res.departmentID;
      const query = `INSERT INTO role (title, salary, department_id) VALUE("${Role}", "${salary}", "${Department}")`;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
      });
    });
    }

    function addEmployee() {
      inquirer
        .prompt([
          {
            type: "input",
            message: "What is the employee's first name?",
            name: "first_name",
          },
          {
            type: "input",
            message: "What is the employee's last name?",
            name: "last_name",
          },
          {
            type: "input",
            message: "What is the employee's id number",
            name: "role_id",
          },
          {
            type: "input",
            message: "What is the employee's manager id",
            name: "manager_id",
          },
        ])
        .then((response) => {
          console.log(response);
    
          connection.query(`INSERT INTO employee SET ?`, response, (err, res) => {
            if (err) throw err;
            console.log("Successfully added");
            promptUser();
          });
        });
    }
    

    function allRoles() {
      connection.query("SELECT * FROM Role", (err, res) => {
        if (err) throw err;
        console.table(res);
        promptUser();
      });
    }
    function allDepartments() {
      connection.query("SELECT * FROM Department;", (err, res) => {
        if (err) throw err;
        console.table(res);
        promptUser();
      });
    }
