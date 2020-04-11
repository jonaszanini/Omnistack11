const express = require('express');
/* import { Router } from 'express'; */

const routes = express.Router();

routes.post('/users', (request, response) => {

    const params = request.body;

    console.log(params);    

    return response.json({
        Evento: 'Semana Omnistack',
        Aluno: 'Jonas' 
    })

});

module.exports = routes;