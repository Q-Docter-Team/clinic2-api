const Sequelize = require('sequelize');
const sequelize = require('../../../database/sequelize');

const Medicine = sequelize.define('medicines', {
    medicineName: {
        type: Sequelize.STRING
    }
    
});

Medicine
    .sync()
    .then(() => {
        console.log('Medicine table created.')
    })

module.exports = Medicine;