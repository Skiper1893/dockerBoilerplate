import { findAssociations } from '../helpers/models'
import db from '../models'
import bcrypt from 'bcrypt'
import ROLES from '../constants/roles'

const salt = bcrypt.genSaltSync(10)
const hash = bcrypt.hashSync('qweQWE123', salt)
const createPullOfUsers = async () => {
  const roles = await findAssociations(db.role)
  const defaultRecords = [
    {
      email: 'eugene_chepur@develop.com',
      username: 'Eugene Chepur',
      nickname: 'Eugene_Chepur',
      password: hash,
      isVerified: true,
      country: 'UA',
      roleId: roles[ROLES.ADMIN],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]
  return defaultRecords
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', await createPullOfUsers(), {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {})
  },
}
