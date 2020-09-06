# [Shelter Connect](https://shelter-connection.herokuapp.com/)

## Description 

Shelter Connect is a web application that enables users to post about what shelter they’re in and helps people reconnect with friends and family in the event of a natural disaster.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Task Breakdown](#Task-Breakdown)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

Clone this repository and run `npm i` to download and install the dependencies. To initialize the database run `mysql -u root -p` and enter your mysql password. In the mysql shell type `CREATE DATABASE shelter_db;`, This will create your database. Next create a file called `.env` to store your mysql credentials securely.
```
    DB_NAME=shelter_db 
    DB_USER=root 
    DB_PW=****
```

## Usage 

After installing start the server by running `npm start`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Task Breakdown

- Alex: Handlebars-Templateing, Server Structure, Model Design, Database Structure, Routing, Testing
- Maximo: Handlebars, Readme
- Mario: Google Slides, Presenting, Concept

## Tests

This project uses Nodemon so you can make changes to the server without having to restart it. This project also contains seeds to test out the database. In addition there are many technologies that were used to help test the database such as:  mocha , sinon and chai. 

## Link to Deployed Application
[shelter-connection](https://shelter-connection.herokuapp.com/)
## Questions

Contact us:

* Email: AWalker0@gmail.com
* Github: www.github.com/Walker-Walker
* Email: Maximoabahamondes@gmail.com
* Github: www.github.com/Maximo100100
* Email: marioviana07@gmail.com
* Github: www.github.com/marioviana07
