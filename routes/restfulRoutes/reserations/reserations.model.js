const Sequelize = require('sequelize');
const sequelize = require('../../../database/sequelize');

const Reseration = sequelize.define('reserations', {
    userId: {
        type: Sequelize.INTEGER(10).UNSIGNED
    },
    queue: {
        type: Sequelize.STRING(191)
    },
    other: {
        type: Sequelize.STRING(191) 
    }
    
});

Reseration
    .sync()
    .then(() => {
        console.log('Reseration table created.')
    })

module.exports = Reseration;