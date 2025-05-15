#CREATE DATABASE accounts;
#CREATE DATABASE culinarycompass;
#USE accounts;

#SELECT * FROM user;

#SELECT * FROM sessions;

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
)*/

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

USE culinarycompass;
SELECT * FROM users;
#SELECT * FROM sessions;
#ALTER TABLE users
#ADD COLUMN is_logged_in BOOLEAN NOT NULL DEFAULT FALSE;
#ADD COLUMN lastname VARCHAR(50) NOT NULL;
#RENAME COLUMN id TO user_id;

/*
firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
*/

/*
CREATE TABLE sessions (
    session_id VARCHAR(255) PRIMARY KEY,
    user_id INT NOT NULL,
    login_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_activity TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    sessessionsusersion_data TEXT, -- To store other session-related information (optional)
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX (last_activity)
);*/


/*
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password CHAR(60) NOT NULL,  -- Store hashed passwords, not plain text
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    role VARCHAR(255) DEFAULT 'user'
);

CREATE TABLE recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    instructions TEXT NOT NULL,
    prep_time INT,
    cook_time INT,
    servings VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_id INT, -- Foreign key to the users table
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE ingredients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    unit VARCHAR(50) -- e.g., 'gram', 'ml', 'piece', 'tablespoon'
);

CREATE TABLE recipe_ingredients (
    recipe_id INT,
    ingredient_id INT,
    quantity DECIMAL(10, 2) NOT NULL, -- e.g., 100.50 grams
    FOREIGN KEY (recipe_id) REFERENCES recipes(id),
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(id),
    PRIMARY KEY (recipe_id, ingredient_id) -- Composite primary key
);
*/

#INSERT INTO sessions (session_id, user_id)
#VALUES (?, ?);

