'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Tickets', [
    {
      "user_id": 1,
      "category_id": 1,
      "subject": "new Ticket test 1",
      "is_closed": false,
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "user_id": 2,
      "category_id": 1,
      "subject": "new Ticket test 2",
      "is_closed": true,
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "user_id": 2,
      "category_id": 1,
      "subject": "new Ticket test 3",
      "is_closed": false,
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "user_id": 3,
      "category_id": 1,
      "subject": "new Ticket test 4",
      "is_closed": true,
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "user_id": 3,
      "category_id": 1,
      "subject": "new Ticket test 5",
      "is_closed": false,
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "user_id": 3,
      "category_id": 1,
      "subject": "new Ticket test 6",
      "is_closed": false,
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "user_id": 4,
      "category_id": 1,
      "subject": "new Ticket test 7",
      "is_closed": false,
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "user_id": 4,
      "category_id": 1,
      "subject": "new Ticket test 8",
      "is_closed": true,
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "user_id": 4,
      "category_id": 1,
      "subject": "new Ticket test 9",
      "is_closed": false,
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Tickets', null, {})
};
