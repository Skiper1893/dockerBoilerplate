const roles = require('../constants/roles')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('role', [{
      name: roles.ADMIN,
    },
    {
      name: roles.GAMER,
    },
    {
      name: roles.TEAM_MANAGER,
    },
    {
      name: roles.LEAGUE_MANAGER,
    },
    ], {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('role', null, {})
  },
}
