const routes = require('express').Router();
const UserController = require('./controllers/user');
const CategoryController = require('./controllers/category');
const TicketController = require('./controllers/ticket');


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


routes.post('/tickets', TicketController.create);
routes.get('/tickets', TicketController.index);
routes.get('/tickets/:ticket_id', TicketController.getTicket);
routes.put('/tickets/:ticket_id', TicketController.put);
routes.delete('/tickets/:ticket_id', TicketController.delete);


module.exports = routes;