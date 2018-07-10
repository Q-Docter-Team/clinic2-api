const Medicine = require('./medicines.model');
const Profilepatent = require('../profilepatents/profilepatents.model');
const moment = require('../../../utils/moment');

const findAll = async () => {
    const options = {
        include: [
            { model: Profilepatent }
        ]
    }

    medicines = await Medicine.findAll(options);
    return medicines;
}

const create = async (data) => {
    data.createdAt = moment().format();
    data.updatedAt = moment().format();

    const medicine = await Medicine.create(data);
    return medicine;
}

const findById = async (id) => {
    const options = {
        include: [
            { model: Profilepatent }
        ]
    }

    const medicine = await Medicine.findById(id, options);
    return medicine;
}

const updateById = async (id, data) => {
  
    data.updatedAt = moment().format();
    
    const options = {
        where: {
            id
        }
    }

    let medicines = await Medicine.update(data, options);
    const options2 = {
        include: [
            { model: Profilepatent }
        ]
    }

    medicines = await Medicine.findById(id, options2);
    return medicines;   
}

const deleteById = async (id) => {
    const options = {
        where: {
            id
        }
    }

    const medicines = await Medicine.destroy(options);
    return medicines;
} 

module.exports = {
    findAll,
    create,
    findById,
    updateById,
    deleteById
}