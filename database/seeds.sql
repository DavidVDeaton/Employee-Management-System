USE ems;

INSERT INTO department (team)
VALUES 
    ("Suns"),
    ("Lakers"),
    ("Celtics");

INSERT INTO role
    (position, salary, departmentid)
VALUES 
    ("Coach of Suns", 500000, 1),
    ("Suns MVP", 20000000, 1),
    ("Suns Player", 1500000, 1),
    ("Coach of Lakers", 500000, 2),
    ("Lakers MVP", 20000000, 2),
    ("Lakers Player", 1500000, 2),
    ("Coach of Celtics", 500000, 3),
    ("Celtics MVP", 20000000, 3),
    ("Celtics Player", 1500000, 3);


INSERT INTO employee 
    (firstname, lastname, roleid)
VALUES 
    ("Mike", "D'Antoni", 1),
    ("Steve", "Nash", 2),
    ("Amare", "Stoudemire", 3),
    ("Phil", "Jackson", 4),
    ("Kobe", "Bryant", 5),
    ("Shaq", "O'Neal", 6),
    ("Brad", "Stevens", 7),
    ("Larry", "Bird", 8),
    ("Jayson", "Tatum", 9);
