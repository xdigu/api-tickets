const routes = require('express').Router();
const UserController = require('./controllers/user');

routes.post('/users', UserController.create);
routes.get('/users', UserController.index);
routes.get('/users/:user_id', UserController.get);
routes.put('/users/:user_id', UserController.put);
routes.delete('/users/:user_id', UserController.delete);


module.exports = routes;
