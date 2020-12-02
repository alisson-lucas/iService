const db = require("../models");
const Servico = db.servicos;
const Op = db.Sequelize.Op;

//Criar um novo serviço
exports.create = (req, res) => {
  // Validaçao
  if (!req.body.title) {
    res.status(400).send({
      message: "Conteudo nao pode estar vazio!"
    });
    return;
  }
  
  // Criar um servico
  const servico = {
    title: req.body.title,
    description: req.body.description,
    prestador: req.body.prestador,
    localizacao: req.body.localizacao,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  };
  
  // Salvar o servico no banco
  Servico.create(servico)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Algum erro ocorreu enquanto criava o servico."
    });
  });
};

//Buscar os serviços no banco
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
  //buscar todos os serviços
  Servico.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
      message:
        err.message || "Aconteceu algum erro enquanto buscava o servico."
    });
  });
};

//Buscar serviço especifico
exports.findOne = (req, res) => {
  const id = req.params.id;

  Servico.findById(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
    res.status(500).send({
      message: "Erro ao buscar o servico com o id=" + id
    });
  });
};

//Excluir um serviço
exports.delete = (req, res) => {
  const id = req.params.id;

  Servico.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "O serviço foi excluido com sucesso!"
        });
      } else {
        res.send({
          message: `Não foi possível excluir o serviço com o id=${id}. Talvez não foi possivel encontra-lo!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Não foi possível excluir o serviço com o id=" + id
      });
    });
};

