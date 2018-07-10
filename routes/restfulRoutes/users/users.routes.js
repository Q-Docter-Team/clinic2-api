const usersController = require('./users.controller');

module.exports = (app) => {
    app.get('/api/users', usersController.findAll);
    app.get('/api/users/:id', usersController.findById);
    app.patch('/api/users/:id', usersController.updateById);
    app.delete('/api/users/:id', usersController.deleteById);
    app.get('/api/auth/tel/:tel', usersController.findByTel);
    app.post('/api/auth/register', usersController.create);
}