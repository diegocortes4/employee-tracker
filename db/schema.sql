DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees; 

CREATE TABLE department (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Name varchar(30) NULL,
    PRIMARI KEY (id)
);

CREATE TABLE role (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Title varchar(30) NULL,
    Salary decimal(10,2) NULL,
    department_id int NULL,
    foreign key (department_id) REFERENCES department(id)
	PRIMARY KEY (id)
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
