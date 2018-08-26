# **Eat-Da-Burger application**
### The Eat-Da-Burger application is built using full stack development techniques. It uses HTML, CSS, Bootstrap, javascript, node.js, express, MySQL and the Handlebars template/library.

----------------

# **Table Of Contents**
1. Application Introduction
2. Instructions
3. Minimum Requirements
4. Demo
5. Installation

----------------

## **1. Application Introduction**
This application demonstrates a simple full stack application with a front end implemented with HTML/CSS and the backend implemented with Node.js and Express. HTML templating is done with the help of Handlebars.

The user may enter any burger name to add it to the menu. This also adds the new burger entry into the MySQL database. The initial burger entry is added as *available* on the menu and placed on the left side of the screen. The user may then eat any burger by clicking the "Devour It!" button next to the burger, which moves it into the adjacent column and updates its status accordingly in the database.

----------------

## **3. Minimum Requirements**
In order to run this application, you will need the following utilities and packages:
 * node.js
 * The following npm packages:
    * "body-parser": "^1.18.3",
    * "express": "^4.16.3",
    * "express-handlebars": "^3.0.0",
    * "express-handler": "^0.2.0",
    * "mysql": "^2.16.0"

----------------

## **4. Demo**

The Eat-Da-Burger App is deployed to Heroku. Use the following link to see it in action.

https://stark-garden-82013.herokuapp.com/

----------------

## **5. Installation**

To run the application locally, first clone this repository with the following command.

	git clone https://github.com/lynvierra/Burger.git
	
Next, install the application dependencies.

	cd Burger
	npm install

Next, setup the MySQL database

   * Make sure you're in the `db` folder of this app.

   * Start MySQL command line tool and login: `mysql -u root -p`.

   * With the `mysql>` command line tool running, enter the command `source schema.sql`to create the database.

   * Now insert the entries defined in `seeds.sql` by running the file: `source seeds.sql`.

   * Close out of the MySQL command line tool: `exit`.
	
Finally, run the node server locally.

	node server.js
	
Now, open the local application on port 3000 at the URL: `http://localhost:3000/`.

Enjoy :smiley: 
