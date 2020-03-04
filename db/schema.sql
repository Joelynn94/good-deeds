CREATE DATABASE goodDeeds_DB;

CREATE TABLE  product (
    id INT NOT NULL AUTO_INCREMENT,
    productName VARCHAR (255),
    productDesc VARCHAR (255),
    productCategory VARCHAR (255),
    productPrice DECIMAL,
    productImage VARCHAR(255),
    productQuantity INT,
    PRIMARY KEY (id)
);

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR (255),
    userPassword ,
    PRIMARY KEY (id)
);

CREATE TABLE cart (
    id INT NOT NULL AUTO_INCREMENT,
    productName VARCHAR (255),
    productDesc VARCHAR (255),
    productCategory VARCHAR (255),
    productPrice DECIMAL,
    productImage VARCHAR(255),
    productQuantity INT,
    PRIMARY KEY (id)
);