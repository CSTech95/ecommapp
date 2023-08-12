-- CREATE TABLE
DROP TABLE IF EXISTS "user";
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    fName VARCHAR(255) ,
    lName VARCHAR(255) ,
    email VARCHAR(255) ,
    password VARCHAR(255) ,
    )

INSERT INTO "user"(fName, lName, email, password) VALUES ("testF", "testL", "email@email.com", "pwd");