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
viewCompany();
});

// Prompt the user with the initial questions

const initialQuestions = [
    {
        message: 'What would you like to do?',
        type: 'list',
        name: 'options',
        choices: ['Add a new employee', 'Add a new department', 'Add a new role', 'Remove an employee', 'Remove a department', 'Remove a role', 'Update an employee', 'Update a department', 'Update a role', 'View all employees', 'View all employees by manager','View all departments', 'View all roles'],
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
        message: "What is the employee's title of their role?",
        type: 'input',
        name: 'title',
    
    },
    {
        message: "What is the employee's id",
        type: 'input',
        name: 'role_id',
    },
    {
        message: "What is the employee's salary",
        type: 'input',
        name: 'salary',
    },
    {   // Define manager info to the new employee
        message: "What is the employee's manager's id?",
        type: 'input',
        name: 'manager_id',
        
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

// Add delete function for Employee, Department and Role

const deleteEmployee = () => {
    connection.query(allStaff, (err, results) => {
      if (err) throw err;

      console.table(results);
  
      inquirer
        .prompt([
          {
            message: "Enter employee role ID of the employee you would like to remove",
            name: "removeRoleId",
            type: "input",
          },
        ])
        .then((answer) => {
          connection.query(`Remove an employee`, {
            id: answer.removeID,
          });
          viewCompany();
        });
    });
  };

const deleteDepartment = () => {
    const query = "select * from department";
    connection.query(query, (err, results) => {
      if (err) throw err;
      inquirer
        .prompt([
          {
            name: "department",
            type: "list",
            // make a new array and loop through, return each item ie.(department)
            choices: function () {
              let choiceArr = results.map((choice) => choice.name);
              return choiceArr;
            },
            // pick the array item to be deleted
            message: "Which department would you like to delete",
          },
        ])
        .then((answer) => {
          connection.query(`Remove a department`, {
            name: answer.dept,
          });
          viewCompany();
        });
    });
  };
  
 
  const deleteRole = () => {
    query = `select * from role`;
    connection.query(query, (err, results) => {
      if (err) throw err;
  
      inquirer
        .prompt([
          {
            name: "removeRole",
            type: "list",
            choice: function () {
              let choiceArr = results.map((choice) => choice.title);
              return choiceArr;
            },
  
            message: "Which role would you like to delete",
          },
        ])
        .then((answer) => {
          connection.query(`Remove a role`, {
            title: answer.removeRole,
          });
          viewCompany();
        });
    });
  };

// Add delete function for Employee, Department and Role
  
  
  








