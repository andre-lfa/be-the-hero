const express = require('express');

const app = express();

app.use(express.json());

// Tipos de Parâmetros:

// Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) // request.query 
// Route params: Paramêtros não nomeado utilizados para identificar recursos // request.params
// Request Body: Corpo da requisição, utilizado para alterar ou criar recursos

app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana Omnistack 11',
        aluno: 'André LFA'
    })
});

app.listen('3333');