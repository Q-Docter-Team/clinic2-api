const Period = require('./periods.model');
const Reseration = require('../reserations/reserations.model');
const moment = require('../../../utils/moment');

const findAll = async () => {
    const options = {
        include: [
            { model: Reseration }
        ]
    }

    periods = await Period.findAll(options);
    return periods;
}

const create = async (data) => {
    data.createdAt = moment().format();
    data.updatedAt = moment().format();

    const period = await Period.create(data);
    return period;
}

const findById = async (id) => {
    const options = {
        include: [
            { model: Reseration }
        ]
    }

    const period = await Period.findById(id, options);
    return period;
}

const updateById = async (id, data) => {
  
    data.updatedAt = moment().format();
    
    const options = {
        where: {
            id
        }
    }

    let periods = await Period.update(data, options);
    const options2 = {
        include: [
            { model: Reseration }
        ]
    }

    periods = await Period.findById(id, options2);
    return periods;   
}

const deleteById = async (id) => {
    const options = {
        where: {
            id
        }
    }

    const periods = await Period.destroy(options);
    return periods;
} 

module.exports = {
    findAll,
    create,
    findById,
    updateById,
    deleteById
}