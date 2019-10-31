const routes = require('express').Router();
const UserController = require('./controllers/user');
const CategoryController = require('./controllers/category');

routes.post('/users', UserController.create);
routes.get('/users', UserController.index);
routes.get('/users/:user_id', UserController.get);
routes.put('/users/:user_id', UserController.put);
routes.delete('/users/:user_id', UserController.delete);
routes.post('/users', UserController.create);


routes.post('/categories', CategoryController.create);
routes.get('/categories', CategoryController.index);
routes.get('/categories/:category_id', CategoryController.getCategory);
routes.put('/categories/:category_id', CategoryController.put);
routes.delete('/categories/:category_id', CategoryController.delete);


module.exports = routes;
