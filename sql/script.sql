CREATE DATABASE IF NOT EXISTS agenda;
USE agenda;

CREATE TABLE pessoa (
  id int NOT NULL AUTO_INCREMENT,
  nome varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY nome_UN (nome)
);
