'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Categories', [
    {
      "name": "Suport",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "name": "Bug",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }, {
      "name": "Feedback",
      "created_at": "2019-11-23",
      "updated_at": "2019-11-23"
    }
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Categories', null, {})
};
