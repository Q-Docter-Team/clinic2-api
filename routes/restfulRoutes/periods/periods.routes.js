const periodsController = require('./periods.controller');

module.exports = (app) => {
    app.get('/api/periods', periodsController.findAll);
    app.get('/api/periods/:id', periodsController.findById);
    app.patch('/api/periods/:id', periodsController.updateById);
    app.delete('/api/periods/:id', periodsController.deleteById);
    app.post('/api/periods', periodsController.create);
}