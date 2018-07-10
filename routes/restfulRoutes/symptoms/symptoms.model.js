const Sequelize = require('sequelize');
const sequelize = require('../../../database/sequelize');

const Symptom = sequelize.define('symptoms', {
    userId: {
        type: Sequelize.INTEGER(10).UNSIGNED
    },
    symptomname: {
        type: Sequelize.STRING(191)
    },
    other: {
        type: Sequelize.STRING(191) 
    }
    
});

Symptom
    .sync()
    .then(() => {
        console.log('Symptom table created.')
    })

module.exports = Symptom;