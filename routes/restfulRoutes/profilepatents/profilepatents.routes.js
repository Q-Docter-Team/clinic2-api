const profilepatentsController = require('./profilepatents.controller');

module.exports = (app) => {
    app.get('/api/profilepatents', profilepatentsController.findAll);
    app.get('/api/profilepatents/:id', profilepatentsController.findById);
    app.patch('/api/profilepatents/:id', profilepatentsController.updateById);
    app.delete('/api/profilepatents/:id', profilepatentsController.deleteById);
    app.post('/api/profilepatents', profilepatentsController.create);
}