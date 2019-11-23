'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Ticket_Messages', [
    {
      "ticket_id": 1,
      "user_id": 1,
      "message": "Another message on ticket",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "ticket_id": 1,
      "user_id": 2,
      "message": "Another message on ticket",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "ticket_id": 1,
      "user_id": 3,
      "message": "Another message on ticket",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "ticket_id": 2,
      "user_id": 2,
      "message": "Another message on ticket",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "ticket_id": 3,
      "user_id": 4,
      "message": "Another message on ticket",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "ticket_id": 2,
      "user_id": 6,
      "message": "Another message on ticket",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "ticket_id": 1,
      "user_id": 5,
      "message": "Another message on ticket",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "ticket_id": 3,
      "user_id": 1,
      "message": "Another message on ticket",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "ticket_id": 5,
      "user_id": 1,
      "message": "Another message on ticket",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "ticket_id": 6,
      "user_id": 3,
      "message": "Another message on ticket",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "ticket_id": 7,
      "user_id": 1,
      "message": "Another message on ticket",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "ticket_id": 8,
      "user_id": 1,
      "message": "Another message on ticket",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "ticket_id": 9,
      "user_id": 3,
      "message": "Another message on ticket",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Ticket_Messages', null, {})
};
