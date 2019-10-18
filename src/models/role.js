'use strict'

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('role', {
    name: {
      type: DataTypes.ENUM({
        values: ['ADMIN', 'GAMER', 'TEAM_MANAGER', 'LEAGUE_MANAGER'],
      }),
    },
  }, {
    timestamps: false,
  })
  Role.associate = function ({ user }) {
    Role.hasMany(user)
  }

  return Role
}
