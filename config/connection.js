require('dotenv').config();

//Import sequelize library
const Sequelize = require('sequelize');


//Create database connection
const sequelize = new Sequelize(process.env.DB_NAME,'root',process.env.MYSQL_PASSWORD, {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

module.exports = sequelize;