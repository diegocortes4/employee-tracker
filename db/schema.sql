DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees; 

CREATE TABLE department (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Name varchar(30)
);

CREATE TABLE role (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Title varchar(30),
    Salary decimal(10,2),
    department_id int UNSIGNED,
    foreign key (department_id) REFERENCES department(id)
	
);

CREATE TABLE employee (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name varchar(30),
    last_name varchar(30),
    role_id int UNSIGNED,
    foreign key (role_id) REFERENCES role(id),
    manager_id int UNSIGNED,
    foreign key (manager_id) REFERENCES employee(id)
	
);
