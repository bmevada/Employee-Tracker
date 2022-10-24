--   Check if the above is working
SELECT * FROM employee;
SELECT * FROM roles;
SELECT * FROM department;

--   Including adding additional departments
INSERT INTO department(name)
VALUES('xray');
SELECT * FROM department
SELECT name AS "Departments" FROM department

UPDATE `employeeDB`.`employee` SET `manager_id` = '1' WHERE (`id` > '1');

Dependency removed
    // "chalk": "^5.1.2",

    removed chalk from server. js

      
    // console.table(chalk.white("\n Welcome to the Employee Tracker Database \n"));
  
    // console.table(
    //   chalk.yellow.bold(
    //     `====================================================================================`
    //   )
    // );
    // console.log(``);
    // console.table(chalk.yellow.bold(figlet.textSync("Employee Tracker")));
    // console.log(``);
    // console.log(``);
    // console.table(
    //   chalk.green.bold(
    //     `====================================================================================`
    //   )
    // );


