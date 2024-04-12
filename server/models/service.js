const { DataTypes } = require('sequelize');
const sequelize = require('../db_connection/connection')

const Service = sequelize.define('service', {
    categoryId: {
        type: DataTypes.INTEGER
    },
    serviveName: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.ENUM({
            values: ['Normal', 'VIP']
        })
    },
    priceOption: {
        type: DataTypes.STRING
    },
    serviceId: {
        type: DataTypes.INTEGER
    }

})
module.exports = Service;