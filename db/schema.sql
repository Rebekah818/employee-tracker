DROP DATABASE IF EXISTS employeetracker;

CREATE DATABASE employeetracker;

USE employeetracker;

CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT not null,
    department_name VARCHAR(30) NOT NULL
    
);

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    foreign key (department_id) references department (id) on delete cascade
);

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    foreign key (role_id) references role (id) on delete cascade,
    manager_id INT,
    foreign key (manager_id) references employee (id) on delete set null 
);
