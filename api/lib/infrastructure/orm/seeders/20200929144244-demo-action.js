'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Actions',
      [
        {
          id: 1,
          name: 'login',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'break',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'work',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: 'pause',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: 'resume',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: 'finish',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: 'start cycle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          name: 'work idle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          name: 'break idle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          name: 'pause idle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          name: 'inactive',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Actions', null, {})
  },
}
