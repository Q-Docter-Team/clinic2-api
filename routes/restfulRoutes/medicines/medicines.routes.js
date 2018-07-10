const medicinesController = require('./medicines.controller');

module.exports = (app) => {
    app.get('/api/medicines', medicinesController.findAll);
    app.get('/api/medicines/:id', medicinesController.findById);
    app.patch('/api/medicines/:id', medicinesController.updateById);
    app.delete('/api/medicines/:id', medicinesController.deleteById);
    app.post('/api/medicines', medicinesController.create);
}