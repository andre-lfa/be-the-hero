const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Tipos de Parâmetros:

// Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) // request.query 
// Route params: Paramêtros não nomeado utilizados para identificar recursos // request.params
// Request Body: Corpo da requisição, utilizado para alterar ou criar recursos

// Bancos de Dados: 

// SQL: MySQL, SQLite, PostgreSQL, Oracle
// NoSQL: MongDB, CouchDB, etc.


app.listen('3333');