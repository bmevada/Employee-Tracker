//called out the prompt of inquirer, so only have to write "prompt"
const { prompt } = require("inquirer");
//calling out any of the files within db, when calling db variable
const db = require("./db");
require("console.table");

loadMainPrompts();

//Based on the readme instructions -- created the prompts : THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

function loadMainPrompts() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                },

                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Add Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Remove Employee",
                    value: "REMOVE_EMPLOYEE"
                },
                {
                    name: "Remove Role",
                    value: "REMOVE_ROLE"
                },
                {
                    name: "Remove Department",
                    value: "REMOVE_DEPARTMENT"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;
        // Call the appropriate function depending on what the user chose
        switch (choice) {
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            case "ADD_EMPLOYEE":
                addEmployee();
                break;
            case "UPDATE_EMPLOYEE_ROLE":
                updateEmployeeRole();
                break;
            case "VIEW_DEPARTMENTS":
                viewDepartments();
                break;
            case "ADD_DEPARTMENT":
                addDepartment();
                break;
            case "VIEW_ROLES":
                viewRoles();
                break;
            case "ADD_ROLE":
                addRole();
                break;
            case "REMOVE_EMPLOYEE":
                removeEmployee();
                break;
            case "REMOVE_DEPARTMENT":
                removeDepartment();
                break;
            case "REMOVE_ROLE":
                removeRole();
                break;
            default:
                quit();
        }
    }
    )
}

// View all employees
function viewEmployees() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("\n");
            console.table(employees);
        })
        .then(() => loadMainPrompts());
}


// Update an employee's role
function updateEmployeeRole() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
                name: `${first_name} ${last_name}`,
                value: id
            }));

            prompt([
                {
                    type: "list",
                    name: "employeeId",
                    message: "Which employee's role do you want to update?",
                    choices: employeeChoices
                }
            ])
                .then(res => {
                    let employeeId = res.employeeId;
                    db.findAllRoles()
                        .then(([rows]) => {
                            let roles = rows;
                            const roleChoices = roles.map(({ id, title }) => ({
                                name: title,
                                value: id
                            }));

                            prompt([
                                {
                                    type: "list",
                                    name: "roleId",
                                    message: "Which role do you want to assign the selected employee?",
                                    choices: roleChoices
                                }
                            ])
                                .then(res => db.updateEmployeeRole(employeeId, res.roleId))
                                .then(() => console.log("Updated employee's role"))
                                .then(() => loadMainPrompts())
                        });
                });
        })
}



// View all roles
function viewRoles() {
    db.findAllRoles()
        .then(([rows]) => {
            let roles = rows;
            console.log("\n");
            console.table(roles);
        })
        .then(() => loadMainPrompts());
}

// Add a role
function addRole() {
    db.findAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            const departmentChoices = departments.map(({ id, name }) => ({
                name: name,
                value: id
            }));

            prompt([
                {
                    name: "title",
                    message: "What is the name of the role?"
                },
                {
                    name: "salary",
                    message: "What is the salary of the role?"
                },
                {
                    type: "list",
                    name: "department_id",
                    message: "Which department does the role belong to?",
                    choices: departmentChoices
                }
            ])
                .then(role => {
                    db.createRole(role)
                        .then(() => console.log(`Added ${role.title} to the database`))
                        .then(() => loadMainPrompts())
                })
        })
}


// View all deparments
function viewDepartments() {
    db.findAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.log("\n");
            console.table(departments);
        })
        .then(() => loadMainPrompts());
}

// Add a department
function addDepartment() {
    prompt([
        {
            name: "name",
            message: "What is the name of the department?"
        }
    ])
        .then(res => {
            let name = res;
            db.createDepartment(name)
                .then(() => console.log(`Added ${name.name} to the database`))
                .then(() => loadMainPrompts())
        })
}



// Add an employee
function addEmployee() {
    prompt([
        {
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            name: "last_name",
            message: "What is the employee's last name?"
        }
    ])
        .then(res => {
            let firstName = res.first_name;
            let lastName = res.last_name;

            db.findAllRoles()
                .then(([rows]) => {
                    let roles = rows;
                    const roleChoices = roles.map(({ id, title }) => ({
                        name: title,
                        value: id
                    }));

                    prompt({
                        type: "list",
                        name: "roleId",
                        message: "What is the employee's role?",
                        choices: roleChoices
                    })
                        .then(res => {
                            let roleId = res.roleId;

                            db.findAllEmployees()
                                .then(([rows]) => {
                                    let employees = rows;
                                    const managerChoices = employees.map(({ id, first_name, last_name }) => ({
                                        name: `${first_name} ${last_name}`,
                                        value: id
                                    }));

                                    managerChoices.unshift({ name: "None", value: null });

                                    prompt({
                                        type: "list",
                                        name: "managerId",
                                        message: "Who is the employee's manager?",
                                        choices: managerChoices
                                    })
                                        .then(res => {
                                            let employee = {
                                                manager_id: res.managerId,
                                                role_id: roleId,
                                                first_name: firstName,
                                                last_name: lastName
                                            }

                                            db.createEmployee(employee);
                                        })
                                        .then(() => console.log(
                                            `Added ${firstName} ${lastName} to the database`
                                        ))
                                        .then(() => loadMainPrompts())
                                })
                        })
                })
        })
}

//Remove an employee
function removeEmployee() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
                name: `${first_name} ${last_name}`,
                value: id
            }));

            prompt([{
                type: "list",
                name: "employeeId",
                message: "Which employee would you like to remove?",
                choices: employeeChoices
            }])
                .then(res => db.removeEmployee(res.employeeId))
                .then(() => loadMainPrompts())
        })

}

//Remove a role
function removeRole() {
    db.findAllRoles()
        .then(([rows]) => {
            let roles = rows;
            const roleChoices = roles.map(({ id, title }) => ({
                name: title,
                value: id
            }));

            prompt([{
                type: "list",
                name: "roleId",
                message: "What role would you like to remove?",
                choices: roleChoices
            }])
                .then(res => db.removeRole(res.roleId))
                .then(() => loadMainPrompts())
        })

}

//Remove a department
function removeDepartment() {
    db.findAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            const deapartmentChoices = departments.map(({ id, name }))
            prompt([{
                type: "list",
                name: "departmentId",
                message: "Which department would you like to remove?",
                choices: deapartmentChoices
            }])
                .then(res => db.removeDepartment(res.departmentId))
                .then(() => loadMainPrompts())
        })

}

// Exit the application
function quit() {
    console.log("Goodbye!");
    process.exit();
}


