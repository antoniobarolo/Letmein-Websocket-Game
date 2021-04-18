CREATE DATABASE IF NOT EXISTS interdisciplinar3;
USE interdisciplinar3;

CREATE TABLE leaderboard (
  id int NOT NULL AUTO_INCREMENT,
  nome1 varchar(50) NOT NULL,
  nome2 varchar(50) NOT NULL,
  pontuacao int,
  PRIMARY KEY (id),
  UNIQUE KEY nome_UN1 (nome1),
  UNIQUE KEY nome_UN2 (nome2),
)

CREATE TABLE palavras(
  id int NOT NULL AUTO_INCREMENT,
  palavra varchar(30) NOT NULL,
  dificuldade int NOT NULL,
  PRIMARY KEY (id)
);
