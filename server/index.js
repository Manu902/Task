const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
/**
 * connection stablised to database
 */
require('./db_connection/connection');
require('./models/index');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', require('./routes/category'));

app.listen(2000, () => console.log('Server is running on the port 2000'));