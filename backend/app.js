const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// imports route
require('./config/config');
const users = require('./route/users')

app.use('/api/users', users);

app.listen(process.env.PORT || SERVER_PORT, () => console.log(`Server start on port ${SERVER_PORT}`));

module.exports = app;