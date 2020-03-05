CREATE DATABASE goodDeeds_DB;

CREATE TABLE  products (
    id INT NOT NULL AUTO_INCREMENT,
    productName VARCHAR (255),
    productDesc VARCHAR (255),
    productCategory VARCHAR (255),
    productPrice DECIMAL,
    productImage VARCHAR(255),
    productQuantity INT,
    productInCart BOOLEAN,
    PRIMARY KEY (id)
);

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR (255),
    userPassword VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE carts (
    id INT NOT NULL AUTO_INCREMENT,
    productName VARCHAR (255),
    productDesc VARCHAR (255),
    productCategory VARCHAR (255),
    productPrice DECIMAL,
    productImage VARCHAR(255),
    productQuantity INT,
    productInCart BOOLEAN,
    PRIMARY KEY (id)
);