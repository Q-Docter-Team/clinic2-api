const reserationsController = require('./reserations.controller');

module.exports = (app) => {
    app.get('/api/reserations', reserationsController.findAll);
    app.get('/api/reserations/:id', reserationsController.findById);
    app.patch('/api/reserations/:id', reserationsController.updateById);
    app.delete('/api/reserations/:id', reserationsController.deleteById);
    app.post('/api/reserations', reserationsController.create);
}