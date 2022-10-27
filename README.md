# Employee-Tracker
Week 12: SQL Challenge

## Background

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. A command-line application has been built from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## Links to deployed application

[Link to deployed working application] https://drive.google.com/file/d/1jVTza04-0P17E4m3G32z90lsGVoRNdTy/view

[Link to Github] https://github.com/bmevada/Employee-Tracker.git

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN the user starts the application
THEN the user is presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN the user chooses to view all departments
THEN the user is presented with a formatted table showing department names and department ids
WHEN the user chooses to view all roles
THEN the user is presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN the user chooses to view all employees
THEN the user is presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN the user chooses to add a department
THEN the user is prompted to enter the name of the department and that department is added to the database
WHEN the user chooses to add a role
THEN the user is prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN the user chooses to add an employee
THEN the user is prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN the user chooses to update an employee role
THEN the user is prompted to select an employee to update and their new role and this information is updated in the database
WHEN the user chooses to remove an employee
THEN the user is prompted to select an employee to remove and the employee is removed and this information is updated in the database
WHEN the user chooses to remove a department
THEN the user is prompted to select a department to remove and the department is removed and this information is updated in the database
WHEN the user chooses to remove an employee role
THEN the user is prompted to select an employee to remove and the role is removed and this information is updated in the database
```

## Mock-Up

The following video shows an example of the application being used from the command line:

[![A video thumbnail shows the command-line employee management application with a play button overlaying the view.][Week12SQL.webm](https://user-images.githubusercontent.com/109460560/198212995-c80e848f-c446-4746-a615-8133fcce896c.webm)

https://drive.google.com/file/d/1jVTza04-0P17E4m3G32z90lsGVoRNdTy/view

## Deployed Application
 - **View all employees**
<img width="694" alt="view-all-employees" src="https://user-images.githubusercontent.com/109460560/198211008-0c9458ec-e6a8-44e2-9c63-7f9fe33e36a1.png">


 - **Add a New Employee**
<img width="627" alt="add-an-employee" src="https://user-images.githubusercontent.com/109460560/198211043-b2cb3721-a902-4923-84b3-2b546e104236.png">


 - **Update Employee Role (John Doe)**
 <img width="623" alt="update-an-employee" src="https://user-images.githubusercontent.com/109460560/198211089-b802c096-e541-4475-81a8-72ef780fc065.png">


 - **Add Department & Role**
 <img width="501" alt="add-department" src="https://user-images.githubusercontent.com/109460560/198211100-6a2495ad-2dd8-47a0-98ee-5b6818500143.png">

 
 - **Add New Employee to New Department**
 <img width="655" alt="add-newemployee-newdepartment" src="https://user-images.githubusercontent.com/109460560/198211159-b9383fcb-ecfa-4c9a-b83e-595552dc1eea.png">


 - **Remove Role**
 <img width="638" alt="remove-role" src="https://user-images.githubusercontent.com/109460560/198211177-4e621139-fe40-4e6d-8694-5639b1b12622.png">


 - **Remove Department**
 <img width="618" alt="remove-department" src="https://user-images.githubusercontent.com/109460560/198211191-ca771591-ff10-43e5-945a-92984d8d687b.png">







