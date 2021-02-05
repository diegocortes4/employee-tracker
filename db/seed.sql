USE employees;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("John", "Smith", 1, 3),
("Stacy", "Brown", 2, 1),
("Jessica", "Vanegas", 3, NULL),
("Kevin", "Harvick", 4, 3),
("Mike", "Jhonson", 5, NULL),
("Andrea", "Pence", 6, NULL),
("Juan", "Veri", 7, 7),
("Alex", "Cooper", 3, 2);


INSERT INTO role (Title, Salary, department_id)
VALUES 
("Architect", 100000, 1),
("Teacher", 40000, 1),
("Physician", 150000, 2),
("Software Engineer", 170000, 2),
("Accountant", 145000, 3),
("Dentist", 230000, 4),
("Artist", 150000, 4);

INSERT INTO department (Name)
VALUES ("Health"),("Engineering"),("Finance"),("Legal");


