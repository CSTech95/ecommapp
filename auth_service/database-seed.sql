-- CREATE TABLE
DROP TABLE IF EXISTS user;
CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    fName VARCHAR ,
    lName VARCHAR ,
    email VARCHAR ,
    password VARCHAR ,
    
);