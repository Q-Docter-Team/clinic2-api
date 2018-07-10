const Profilepatent = require('./profilepatents.model');
const moment = require('../../../utils/moment');

const findAll = async () => {
    profilepatents = await Profilepatent.findAll();
    return profilepatents;
}

const create = async (data) => {
    data.createdAt = moment().format();
    data.updatedAt = moment().format();

    const profilepatent = await Profilepatent.create(data);
    return profilepatent;
}

const findById = async (id) => {
    const profilepatent = await Profilepatent.findById(id);
    return profilepatent;
}

const updateById = async (id, data) => {
  
    data.updatedAt = moment().format();
    
    const options = {
        where: {
            id
        }
    }

    let profilepatents = await Profilepatent.update(data, options);
    profilepatents = await Profilepatent.findById(id);
    return profilepatents;   
}

const deleteById = async (id) => {
    const options = {
        where: {
            id
        }
    }

    const profilepatents = await Profilepatent.destroy(options);
    return profilepatents;
} 

module.exports = {
    findAll,
    create,
    findById,
    updateById,
    deleteById
}