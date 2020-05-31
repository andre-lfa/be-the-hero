const express = require('express');
const org_controller = require('./controllers/OngController');
const incident_controller = require('./controllers/IncidentController');

const routes = express.Router();

// Rotas para Ongs
routes.get('/ongs', org_controller.index);
routes.post('/ongs', org_controller.create);

// Rotas para Incidents
routes.post('/incidents', incident_controller.create);
routes.get('/incidents', incident_controller.index);
routes.delete('/incidents/:id', incident_controller.delete);

module.exports = routes;
