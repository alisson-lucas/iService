module.exports = app => {
    const servicos = require('./controllers/servico.controller');
  
    var router = require("express").Router();
  
    // Criar novo Servico
    router.post("/", servicos.create);
};  