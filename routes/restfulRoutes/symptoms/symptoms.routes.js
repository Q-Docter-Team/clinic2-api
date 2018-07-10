const symptomsController = require('./symptoms.controller');

module.exports = (app) => {
    app.get('/api/symptoms', symptomsController.findAll);
    app.get('/api/symptoms/:id', symptomsController.findById);
    app.patch('/api/symptoms/:id', symptomsController.updateById);
    app.delete('/api/symptoms/:id', symptomsController.deleteById);
    app.post('/api/symptoms', symptomsController.create);
}