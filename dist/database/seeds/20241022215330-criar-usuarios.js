"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'John Doe',
          email: 'johndoe@email.com',
          password_hash: await bcryptjs.hash('123123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Joana Doe',
          email: 'joanadoe@email.com',
          password_hash: await bcryptjs.hash('123123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {},
};
