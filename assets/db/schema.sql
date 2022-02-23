DROP DATABASE IF EXISTS employee-tracker;

CREATE DATABASE employeeTracker;

USE employeeTracker;

CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT not null,
    department_name VARCHAR(30) NOT NULL,
    
);

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
);

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    role_name VARCHAR(30),
    salary DECIMAL,
    department_id INT
);