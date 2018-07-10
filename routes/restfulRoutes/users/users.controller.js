const usersServices = require('./users.services');

const findByTel = async (req,res) => {
    try {
    
      const phoeRegex = /^\d*\.?\d*$/;
      const tel = req.params.tel;
      if(!phoeRegex.test(tel)) {
        throw "tel is Number";
      }
  
      const user = await usersServices.findUserByTel(tel);
  
      if(!user) {
        throw "Not have user";
      } else {
        await res.send({user});
      }
      
    } catch (error) {
        await res.status(400).send({ error })
    } 
  }

const findAll = async (req, res) => {
        try {   
            const data = {
                users: await usersServices.findAll()
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
            user: await usersServices.findById(req.params.id)
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
            user: await usersServices.updateById(req.params.id, req.body)
        }
        res.send(data);
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }  
}

const create = async (req, res) => {
    try { 
        await usersServices.create(req.body);
        await res.send({ status: 'create user success'});
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }  
}

const deleteById = async (req, res) => {
    try { 
        const deletedCat = await usersServices.deleteById(req.params.id);
        if(!deletedCat) {
            throw `Can not find id: ${req.params.id} for delete user`
        } else {
            const data = {
                user: `user id: ${req.params.id}  deleted success!`
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
    deleteById,
    findByTel
}

