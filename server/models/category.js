const { DataTypes } = require('sequelize');
const sequelize = require('../db_connection/connection')

const Category = sequelize.define('category', {
    categoryId: {
        type: DataTypes.INTEGER
    },
    categoryName: {
        type: DataTypes.STRING
    }
})
module.exports = Category;


