DROP DATABASE IF EXISTS accountable;

CREATE DATABASE accountable;

USE accountable;

CREATE TABLE teachers (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    classes JSON,
    school VARCHAR(20)
);

CREATE TABLE classes (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    students JSON
);

CREATE TABLE students (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(40),
    parent VARCHAR(40),
    phone VARCHAR(20),
    email VARCHAR(20),
    comments JSON
);

CREATE TABLE comments (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    studentID int NOT NULL,
    creation DATE,
    comment VARCHAR(400),
    FOREIGN KEY (studentID) REFERENCES students(id)
);

