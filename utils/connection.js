const {Sequelize} = require('sequelize')
require('dotenv').config()
const {DATABASE_NAME,DATABASE_USERNAME,PASSWORD,DATABASE_HOST} = process.env
const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, PASSWORD, {
    host: DATABASE_HOST,
    dialect:'mysql' 
});
module.exports = sequelize