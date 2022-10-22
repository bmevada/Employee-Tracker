// Add installation dependencies
const consoletable = require("console.table");
const mysql2 = require("mysql2");
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const { resolveSoa } = require("dns");
const { rootCertificates } = require("tls");


// Create connection to Server - port, username, SQL password,
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: root,
    password: 'password',
    database: 'employeeDB',
},
    console.log('Connected to the employeeDB database')
);

// View established connection in terminal
connection.connect((err) => {
    if (err) throw err;
  
    console.table(chalk.white("\n Welcome to the Employee Tracker Database \n"));
  
    console.table(
      chalk.yellow.bold(
        `====================================================================================`
      )
    );
    console.log(``);
    console.table(chalk.yellow.bold(figlet.textSync("Employee Tracker")));
    console.log(``);
    console.log(``);
    console.table(
      chalk.green.bold(
        `====================================================================================`
      )
    );

// Start main function
badCompany();
});

// Prompt the user with the initial questions

const initialQuestions = [
    {
        message: 'What would you like to do?',
        type: 'list',
        name: 'options',
        choices: ['Add a new employee', 'Add a new department', 'Add a new role', 'View all employees', 'View all departments', 'View all roles'],
    }
];

// Add variables to add a new employee
const addEmployee = [
    {
        message: 'What is the employees first name?',
        type: 'input',
        name: 'firstName',
    },
    {
        message: 'What is the employees last name?',
        type: 'input',
        name: 'lastName',
  
    },
    {
        message: "What is the employee's role?",
        type: 'input',
        name: 'employeeRole',
        
    },
    {   // Define manager info to the new employee
        message: "What is the employee's manager's id?",
        type: 'input',
        name: 'managerId',
        
    },
];

// Define the new employee roles

function init() {
    initialPrompt();
    addNewDepartment();
}

function initialPrompt() {
    inquirer.prompt(initialOptions).then((initialResponses) => {
        console.log(initialResponses);
    })
};

init();

module.exports = db;

function addNewDepartment() {
    inquirer.prompt(addDepartment).then((addDepartmentResponse) => {
        const sql = `INSERT INTO department(name)
        VALUES(${addDepartmentResponse})`;
    });
}









