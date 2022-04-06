const Sequelize = require('sequelize');
const connection = require('./database');

//Creating tb_serviceSolicitation
const ServiceSolicitation = connection.define('tb_serviceSolicitation', {
    clientName: {
        type: Sequelize.TEXT
    },
    clientNumber: {
        type: Sequelize.TEXT
    },
    clientEmail: {
        type: Sequelize.TEXT
    },
    clientDescription: {
        type: Sequelize.TEXT
    }
});

ServiceSolicitation.sync({force: false}).then(() => {
    console.log("Tabela Criada");
});

module.exports = ServiceSolicitation;