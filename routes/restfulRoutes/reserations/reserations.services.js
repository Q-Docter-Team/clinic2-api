const Reseration = require('./reserations.model');
const moment = require('../../../utils/moment');

const findAll = async () => {
    reserations = await Reseration.findAll();
    return reserations;
}

const create = async (data) => {
    data.createdAt = moment().format();
    data.updatedAt = moment().format();

    const reseration = await Reseration.create(data);
    return reseration;
}

const findById = async (id) => {
    const reseration = await Reseration.findById(id);
    return reseration;
}

const updateById = async (id, data) => {
  
    data.updatedAt = moment().format();
    
    const options = {
        where: {
            id
        }
    }

    let reserations = await Reseration.update(data, options);
    reserations = await Reseration.findById(id);
    return reserations;   
}

const deleteById = async (id) => {
    const options = {
        where: {
            id
        }
    }

    const reserations = await Reseration.destroy(options);
    return reserations;
} 

module.exports = {
    findAll,
    create,
    findById,
    updateById,
    deleteById
}