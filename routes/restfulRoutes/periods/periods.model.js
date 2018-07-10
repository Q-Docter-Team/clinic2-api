const Sequelize = require('sequelize');
const sequelize = require('../../../database/sequelize');

const Period = sequelize.define('periods', {

    periodTime: {
        type: Sequelize.DATE
    },
    maxUser: {
        type: Sequelize.INTEGER(10)
    },
    countUser: {
        type: Sequelize.INTEGER(10)
    }
    
});

Period
    .sync()
    .then(() => {
        console.log('Period table created.')
    })

module.exports = Period;