-- open ems DB
USE ems;

INSERT INTO department (name)
VALUES ("Suns"),
("Lakers"),
("Celtics");

INSERT INTO staffrole (title,salary,department_id)
VALUES ("Coach of Suns","40000",1),
("Suns MVP","20000",1),
("Suns Player","10000",1),
("Coach of Lakers","25000",2),
("Lakers MVP","15000",2),
("Lakers Player","8000",2),
("Coach of Celtics","30000",3),
("Celtics MVP","17000",3),
("Celtics Player","9000",3);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "D'Antoni", 1, null),
("Steve", "Nash", 2, 1),
("Amare", "Stoudemire", 3, 1),
("Phil", "Jackson", 4, null),
("Kobe", "Bryant", 5, 4),
("Shaq", "O'Neal", 6, 4),
("Brad", "Stevens", 7, null),
("Larry", "Bird", 8, 7),
("Jayson", "Tatum", 9, 7);
