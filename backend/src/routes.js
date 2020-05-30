const express = require('express');
const org_controller = require('./controllers/OngController');

const routes = express.Router();

routes.get('/ongs', org_controller.index);

routes.post('/ongs', org_controller.create);

module.exports = routes;
