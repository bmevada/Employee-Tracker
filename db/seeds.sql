-- This file contains functions for performing specific SQL queries used. 
-- The file is used to pre-populate the database, making the development of individual features much easier.

--  Add department, roles and employee


INSERT INTO department(name)
VALUES 
('Sales'),
('Engineering'),
('Legal'),
('Finance'),

INSERT INTO roles(department_id, title, department, salary)
VALUES
('1','Sales Lead', 'Sales', '100000'),
('2','Salesperson', 'Sales', '80000'),
('3','Lead Engineer', 'Engineering', '150000'),
('4','Software Engineer', 'Engineering', '120000'),
('5','Account Manager', 'Finance', '160000'),
('6','Accountant', 'Finance', '125000'),
('7','Legal Team Lead', 'Legal', '250000'),
('8','Lawyer', 'Legal', '190000'),



INSERT INTO employee(role_id, first_name, last_name) 
VALUES
('1', 'John', 'Doe'),
('2', 'Mike', 'Chan'),
('3', 'Ashely', 'Rodriquez'),
('4', 'Kevin', 'Tupik'),
('5', 'Kunal', 'Singh'),
('6', 'Malia', 'Brown'),
('7', 'Sarah', 'Lourd'),
('8', 'Tom', 'Allen'),

UPDATE `employeeDB`.`employee` SET `manager_id` = '1' WHERE (`id` > '1');