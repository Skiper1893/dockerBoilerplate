const { DEV_ENV } = process.env
const isDocker = DEV_ENV === 'docker'
const host = isDocker ? 'postgres' : '127.0.0.1'

module.exports = {
  development: {
    username: 'postgres',
    password: 'postgres',
    database: 'testd',
    host,
    dialect: 'postgres',
    supportBigNumbers: true,
    seederStorage: 'sequelize',
    define: {
      timestamps: true,
      freezeTableName: true,
    },
    operatorsAliases: false,
  },
  test: {
    username: 'postgres',
    password: 'postgres',
    database: 'testd',
    host,
    dialect: 'postgres',
    supportBigNumbers: true,
    seederStorage: 'sequelize',
    define: {
      timestamps: true,
      freezeTableName: true,
    },
    logging: false,
    operatorsAliases: false,
  },
  staging: {
    username: 'postgres',
    password: 'postgres',
    database: 'testd',
    host,
    dialect: 'postgres',
    supportBigNumbers: true,
    seederStorage: 'sequelize',
    define: {
      timestamps: true,
      freezeTableName: true,
    },
    logging: false,
    operatorsAliases: false,
  },
  production: {
    username: 'postgres',
    password: 'postgres',
    database: 'testd',
    host,
    dialect: 'postgres',
    supportBigNumbers: true,
    seederStorage: 'sequelize',
    define: {
      timestamps: true,
      freezeTableName: true,
    },
    logging: false,
    operatorsAliases: false,
  },
}
