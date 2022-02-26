// required packages for employee-tracker 
const mysql = require('mysql2');
const inquirer = require('inquirer');
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

//messagePrompt();

//create connection to the localhost

const connection = mysql.createConnection({
    host: 'localhost',
    database: "employeetracker",
    // Your username and password
    user: 'root',
    password: 'Isabelle312*',


});

//connection err
connection.connect(err => {
    if (err) throw err;

},
    console.log('mysql now connected')
);

// call for department table 

console.table([{

}])

// prompt messages
const promptMessage = {

    byDepartment: "View all departments",
    byEmployee: "View by Employee",
    byRole: "View by Role",
    addEmployee: "Add an Employee",
    deleteEmployee: "Remove an Employee",
    updateEmployee: "Update Employee info",
    updateRole: "Update role section",
    quit: "quit"
}

// function to invoke the promptMessages
function prompt() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'Please select one of the following',
            choices: [
                promptMessage.byDepartment,
                promptMessage.byEmployee,
                promptMessage.byRole,
                promptMessage.addEmployee,
                promptMessage.deleteEmployee,
                promptMessage.updateEmployee,
                promptMessage.updateRole,
                promptMessage.quit


            ]
        })
        .then(response => {
            console.log('response', response);
            switch (response.action) {
                case promptMessage.byDepartment:
                    byDepartment();
                    break;

                case promptMessage.byEmployee:
                    byEmployee();
                    break;

                case promptMessage.byRole:
                    byRole();
                    break;

                case promptMessage.addEmployee:
                    addEmployee();
                    break;


                case promptMessage.deleteEmployee:
                    deleteEmployee();
                    break;

                case promptMessage.updateEmployee:
                    updateEmployee();
                    break;

                case promptMessage.updateRole:
                    updateRole()
                    break;

                default:
                    process.exit(0)
                    break;
            }
        });
};
prompt();
function byDepartment() {
    const query = `SELECT department.department_name AS department, role.title, employee.id, employee.first_name, employee.last_name
      FROM employee 
      LEFT  JOIN role ON (role.id = employee.role_id)
      LEFT JOIN department ON (department.id = role.department_id)
      ORDER BY department.department_name; ` ;
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('\n');
        console.log('VIEW BY DEPARTMENT');
        console.log('\n');
        console.table(res);
        prompt();
    })
}

function byEmployee() {
    const query = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name AS department, role.salary
      FROM employee
      INNER JOIN role ON (role.id = employee.role_id)
      INNER JOIN department ON (department.id = role.department_id)
      ORDER BY employee.id;`;
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('\n');
        console.log('VIEW BY EMPLOYEES');
        console.log('\n');
        console.table(res);
        prompt();
    })
}

function byRole() {
    const query = `SELECT role.title, department.department_name AS department, role.salary 
      FROM role
      LEFT JOIN department on (role.department_id = department.id)
      order by role.title; `
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('\n');
        console.log('VIEW ALL ROLES');
        console.log('\n');
        console.table(res);
        prompt();
    })
};


//module.exports = {}; 