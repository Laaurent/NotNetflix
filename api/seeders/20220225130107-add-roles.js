'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('roles', [{
        name: 'USER',
        name: 'ADMIN',
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('roles', {[Op.or]: [{name: 'USER'}, {name: 'ADMIN'}]});
  }
};
