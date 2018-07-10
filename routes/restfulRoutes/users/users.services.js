const User = require('./users.model');
const Symptom = require('../symptoms/symptoms.model');
const Reseration = require('../reserations/reserations.model');
const Profilepatent = require('../profilepatents/profilepatents.model');
const moment = require('../../../utils/moment');

const findAll = async () => {
    const options = {
        include: [
            { model: Symptom },
            { model: Reseration },
            { model: Profilepatent }
        ]
    }

    users = await User.findAll(options);
    return users;
}

const create = async (data) => {
    data.createdAt = moment().format();
    data.updatedAt = moment().format();

    const user = await User.create(data);
    return user;
}

const findById = async (id) => {
    const options = {
        include: [
            { model: Symptom },
            { model: Reseration },
            { model: Profilepatent }
        ]
    }
    const user = await User.findById(id, options);
    return user;
}

const updateById = async (id, data) => {
  
    data.updatedAt = moment().format();
    
    const options = {
        where: {
            id
        }
    }

    let users = await User.update(data, options);

    const options2 = {
        include: [
            { model: Symptom },
            { model: Reseration },
            { model: Profilepatent }
        ]
    }
    
    users = await User.findById(id, options2);
    return users;   
}

const deleteById = async (id) => {
    const options = {
        where: {
            id
        }
    }

    const users = await User.destroy(options);
    return users;
} 

const findUserByTel = async (tel) => {
    const options = {
        where: {telephone: tel},
        include: [
            { model: Symptom },
            { model: Reseration },
            { model: Profilepatent }
        ]
    }
    const user = await User.findOne(options);

    return user;
}

module.exports = {
    findAll,
    create,
    findById,
    updateById,
    deleteById,
    findUserByTel
}