INSERT INTO department (department_name)
VALUES ('Management'),('Programer'),('Marketing'),('Customer Support'),('Accountant');

INSERT INTO role (title, salary, department_id)
VALUES ('Project Manager', 190000, 1),('Programer', 180000, 2),('Accountant', 100000, 5),('Customer support', 65000, 4),('Social Media Marketer', 70000, 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Eric', 'Stamps', 1, NULL),('Reba', 'Stove', 2, 1),('Tom', 'Common', 2, 1),('Joe', 'Banks', 4, 1),('Brittany', 'Shawns', 3, 1);

