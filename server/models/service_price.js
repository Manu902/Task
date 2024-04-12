const { DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../db_connection/connection')

const ServicePrice = sequelize.define('service_price', {
    serviceId: {
        type: DataTypes.INTEGER
    },
    duration: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    type: {
        type: DataTypes.ENUM({
            values: ['Hourly', 'Weekly', 'Monthly']
        })
    }

})
module.exports = ServicePrice;