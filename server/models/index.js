const Category = require('./category');
const ServicePrice = require('./service_price');
const Service = require('./service');

Category.sync({force: true}).then(() => console.log('Category table created'))
ServicePrice.sync({force: true}).then(() => console.log('ServicePrice table created'))
Service.sync({force: true}).then(() => console.log('Service table created'))
