// required packages for employee-tracker 
const mysql = require('mysql2');
const inquirer = require('inquirer');
const { userInfo } = require('os');
const tracker = require();
require('console.table');

const messagePrompt = {
    viewAllDept: "View all Departments",
    viewAllEmployees: "View all Employees",
    viewAllRoles: "View all Roles",
    addDept: "Add a Department to the Database",
    addEmployee: "Add Employee to the Database",
    addARole: "Add a Role to the Database",
    updateEmployeeRole: "Update an Employee's Role",
    quit: "quit"
};

//create connection to the localhost

const connect = mysql2.createConnection({
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,

// Your username and password
    username: 'root',
    password: 'Isabelle312*',
    database: 'employee-tracer',

});

//connection err
connection.connect(err => {
    if (err) throw err;

},
    console.log('mysql now connected')
);






module.exports = {}; 