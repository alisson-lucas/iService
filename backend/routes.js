const express = require('express');


const servicosController = require('./controllers/servico.controller');
  
const routes = express.Router();
  
    // Criar novo Servico
routes.post("/", servicosController.create);

    // Buscar serviços 
routes.get("/servicos", servicosController.findAll);

    // Buscar serviço por id
routes.get("/:id", servicosController.findOne);

    // Excluir servço
routes.delete("/:id", servicosController.delete);

module.exports = routes;