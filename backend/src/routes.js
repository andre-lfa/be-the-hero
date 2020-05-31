const express = require('express');
const org_controller = require('./controllers/OngController');
const incident_controller = require('./controllers/IncidentController');
const profile_controller = require('./controllers/ProfileController');
const session_controller = require('./controllers/SessionController');

const routes = express.Router();

// Rotas para ONGs
routes.get('/ongs', org_controller.index);
routes.post('/ongs', org_controller.create);

// Rotas para Incidents
routes.post('/incidents', incident_controller.create);
routes.get('/incidents', incident_controller.index);
routes.delete('/incidents/:id', incident_controller.delete);

// Rota específica para uma ONG
routes.get('/profile', profile_controller.index);

// Rota específica para login
routes.post('/sessions', session_controller.create);


module.exports = routes;
