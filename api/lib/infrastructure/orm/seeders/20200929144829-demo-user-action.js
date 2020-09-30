'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'UserActions',
      [
        {
          id: -1,
          UserId: 'vN7Kodp84zQg1KDTPd3IfwvaF1r1',
          ActionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: -2,
          UserId: 'vN7Kodp84zQg1KDTPd3IfwvaF1r1',
          ActionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: -3,
          UserId: 'vN7Kodp84zQg1KDTPd3IfwvaF1r1',
          ActionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: -4,
          UserId: 'vN7Kodp84zQg1KDTPd3IfwvaF1r1',
          ActionId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: -5,
          UserId: 'vN7Kodp84zQg1KDTPd3IfwvaF1r1',
          ActionId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserActions', null, {})
  },
}
