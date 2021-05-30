module.exports = (sequelize, Sequelize) => {
    const Servico = sequelize.define("servico", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      prestador: {
        type: Sequelize.STRING
      },
      localizacao: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.STRING
      },
    });
  
    return Servico;
  };