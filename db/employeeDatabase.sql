--Create Database

DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

-- Use employee Database
USE employeeDB;

-- Add table to include Parent Table (department); Child Table 1 (role and department id); and Child Table 2 (Employee ID; Name; Role; and Manager) 

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    INDEX `idx_department_id`(department_id),
    CONSTRAINT `fk_department_id`
    FOREIGN KEY (department_id)
    REFERENCES department(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id),
  INDEX`idx_role`(role_id),
  CONSTRAINT `fk_role_id`
  FOREIGN KEY (role_id) 
  REFERENCES roles(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  INDEX `idx_manager`(manager_id), 
  CONSTRAINT `fk_manager_id`
  FOREIGN KEY (manager_id)
  REFERENCES roles(id) ON UPDATE CASCADE ON DELETE RESTRICT
  );

--   Check if the above is working
SELECT * FROM employee;
SELECT * FROM roles;
SELECT * FROM department;

--   Including adding additional departments
INSERT INTO department(name)
VALUES('xray');
SELECT * FROM department
SELECT name AS "Departments" FROM department
