'use strict'
const { GENDER } = require('../../src/constants/user')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true,
      },
      username: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.ENUM(GENDER),
      },
      facebookId: {
        type: Sequelize.STRING,
        unique: true,
      },
      googleId: {
        type: Sequelize.STRING,
        unique: true,
      },
      twitterId: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'role',
          key: 'id',
        },
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user')
  },
}
