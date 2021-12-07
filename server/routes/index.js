const express = require('express');
const app = express();
app.use(require('./usuario/usuario'));
app.use(require('./usuario/login'));
module.exports = app;