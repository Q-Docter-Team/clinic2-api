const Sequelize = require('sequelize');
const sequelize = require('../../../database/sequelize');

const Profilepatent = sequelize.define('profilepatents', {
    userId: {
        type: Sequelize.INTEGER(10).UNSIGNED
    },
    medicineId: {
        type: Sequelize.INTEGER(10).UNSIGNED
    },
    diagnose: {
        type: Sequelize.STRING(191)
    }   
});

Profilepatent
    .sync()
    .then(() => {
        console.log('Profilepatent table created.')
    })

module.exports = Profilepatent;