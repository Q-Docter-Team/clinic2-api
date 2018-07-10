const reserationsServices = require('./reserations.services');

const findAll = async (req, res) => {
        try {   
            const data = {
                reserations: await reserationsServices.findAll()
            }
            res.send(data);
        } catch (error) {
            console.log(error);
            await res.status(400).send({ error })
        }      
}

const findById = async (req, res) => {
    try { 
        const data = {
            reseration: await reserationsServices.findById(req.params.id)
        }
        res.send(data);
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }  
}

const updateById = async (req, res) => {
    try { 
        const data = {
            reseration: await reserationsServices.updateById(req.params.id, req.body)
        }
        res.send(data);
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }  
}

const create = async (req, res) => {
    try { 
        await reserationsServices.create(req.body);
        await res.send({ status: 'create reseration success'});
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }  
}

const deleteById = async (req, res) => {
    try { 
        const deletedCat = await reserationsServices.deleteById(req.params.id);
        if(!deletedCat) {
            throw `Can not find id: ${req.params.id} for delete reseration`
        } else {
            const data = {
                reseration: `reseration id: ${req.params.id}  deleted success!`
            }

            res.send(data);
        }
        
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }      
}






module.exports = {
    findAll,
    create,
    findById,
    updateById,
    deleteById
}

