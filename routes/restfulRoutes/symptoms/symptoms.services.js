const Symptom = require('./symptoms.model');
const moment = require('../../../utils/moment');

const findAll = async () => {
    symptoms = await Symptom.findAll();
    return symptoms;
}

const create = async (data) => {
    data.createdAt = moment().format();
    data.updatedAt = moment().format();

    const symptom = await Symptom.create(data);
    return symptom;
}

const findById = async (id) => {
    const symptom = await Symptom.findById(id);
    return symptom;
}

const updateById = async (id, data) => {
  
    data.updatedAt = moment().format();
    
    const options = {
        where: {
            id
        }
    }

    let symptoms = await Symptom.update(data, options);
    symptoms = await Symptom.findById(id);
    return symptoms;   
}

const deleteById = async (id) => {
    const options = {
        where: {
            id
        }
    }

    const symptoms = await Symptom.destroy(options);
    return symptoms;
} 

module.exports = {
    findAll,
    create,
    findById,
    updateById,
    deleteById
}