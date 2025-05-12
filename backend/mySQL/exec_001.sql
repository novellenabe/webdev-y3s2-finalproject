#CREATE DATABASE accounts;
USE accounts;
#SELECT * FROM user;
SELECT * FROM sessions;
#DELETE FROM sessions WHERE user_id = 8;
/*
SELECT * FROM sessions;
DELETE FROM sessions WHERE user_id = 8;
*/


#DELETE FROM user WHERE user_id = 7;

/*
ALTER TABLE user
ADD COLUMN is_logged_in BOOLEAN NOT NULL DEFAULT FALSE;
*/

/*
DELETE FROM user
WHERE user_id IN (5, 6);*/


/*
CREATE TABLE user (
	user_id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    passworuseruserd VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    date_of_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);*/

#sessionssessionssessionsINSERT INTO users (firstname, lastname, email, password)

#VALUES ("John", "Doe", "john.doe@example.com", "\u0068\u0065\u006c\u006c\u006f");

/*
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    useruseremail VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    date_of_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);*/

#INSERT INTO users (firstname, lastname, email, password)
#VALUES ('John', 'Doe', 'john.doe@example.com', 'hashed_password_here');


#DELETE FROM user
#WHERE user_id IN (1, 2, 3, 4)

/*
DELETE FROM sessions
WHERE user_id = 6;
*/


#SELECT * FROM user

/*
CREATE TABLE sessions (
    session_id VARCHAR(255) PRIMARY KEY,
    user_id INT sessionssessionsNOT NULL,
    login_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_activity TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    sessessionsusersion_data TEXT, -- To store other session-related information (optional)
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE,
    INDEX (last_activity)
);*/

#INSERT INTO sessions (session_id, user_id)
#VALUES (?, ?);

