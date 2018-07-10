const Sequelize = require('sequelize');
const sequelize = require('../../../database/sequelize');

const User = sequelize.define('User', {
    name: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    dob: {
        type: Sequelize.DATE
    },
    telephone: {
        type: Sequelize.STRING,
        unique: true
    },
    citizenId: {
        type: Sequelize.STRING,
        unique: true
    },
    gender: {
        type: Sequelize.ENUM('male', 'female')
    }
});

User
    .sync()
    .then(() => {
        console.log('User table created.')
    })

module.exports = User;