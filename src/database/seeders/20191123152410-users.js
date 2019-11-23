'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      "name": "user one",
      "email": "user1@user.com",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "name": "user two",
      "email": "user2@user.com",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "name": "user three",
      "email": "user3@user.com",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "name": "user four",
      "email": "user4@user.com",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "name": "user five",
      "email": "user5@user.com",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "name": "user six",
      "email": "user6@user.com",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "name": "user seven",
      "email": "user7@user.com",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "name": "user eight",
      "email": "user8@user.com",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "name": "user nine",
      "email": "user9@user.com",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "name": "user ten",
      "email": "user10@user.com",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "name": "user eleven",
      "email": "user11@user.com",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "name": "user twelv",
      "email": "user12@user.com",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {})
};
