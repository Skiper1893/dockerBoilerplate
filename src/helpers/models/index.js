// import { _s3 } from '../../lib/aws-sdk'
// import { AWSConfig } from '../../config/s3.config'
import { mapValues, groupBy } from 'lodash'
// import path from 'path'
//
// const {
//   USERS_AVATAR_STORAGE_DIR,
//   LEAGUES_AVATAR_STORAGE_DIR,
//   TEAMS_AVATAR_STORAGE_DIR,
//   USERS_BANNER_STORAGE_DIR,
//   TEAMS_BANNER_STORAGE_DIR,
//   LEAGUES_BANNER_STORAGE_DIR,
// } = require('../../constants/storage')
//
// function getResourceUrl (Sequelize) {
//   const { Model } = Sequelize
//
//   if (!(this instanceof Model)) {
//     throw new Error('This must be instance of Sequelize Model')
//   }
//
//   let StorageDirectory
//
//   if (this.userAvatarId) {
//     StorageDirectory = USERS_AVATAR_STORAGE_DIR
//   }
//   if (this.userBannerId) {
//     StorageDirectory = USERS_BANNER_STORAGE_DIR
//   }
//   if (this.teamAvatarId) {
//     StorageDirectory = TEAMS_AVATAR_STORAGE_DIR
//   }
//   if (this.teamBannerId) {
//     StorageDirectory = TEAMS_BANNER_STORAGE_DIR
//   }
//   if (this.leagueAvatarId) {
//     StorageDirectory = LEAGUES_AVATAR_STORAGE_DIR
//   }
//   if (this.leagueBannerId) {
//     StorageDirectory = LEAGUES_BANNER_STORAGE_DIR
//   }
//
//   if (!StorageDirectory) return null
//   const { protocol, host } = _s3.endpoint
//
//   return `${protocol}//${AWSConfig.Bucket}.${host}/${path.join(StorageDirectory, this.path)}`
// }

async function findAssociations (model, groupByField = 'name', options = {}) {
  if (!model || !model.findAll) {
    throw new TypeError('Provided model has no findAll method')
  }

  const records = await model.findAll({
    attributes: ['id', groupByField],
    ...options,
  })
  return mapValues(groupBy(records, groupByField), '[0].id')
}

module.exports = {
  findAssociations,
}
