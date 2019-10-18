const isNil = require('lodash/isNil')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const CONFIG = require('../../src/config/jwt')
const { GENDER } = require('../../src/constants/user')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
    username: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.ENUM({
        values: GENDER,
      }),
    },
    password: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    paranoid: true,
    hooks: {
      async beforeCreate (user, options) {
        if (user.password) user.setHashPassword()
      },
      beforeUpdate (user, options) {
        if (user.changed('password')) user.setHashPassword()
      },
    },
  })

  User.prototype.setHashPassword = function (pass = null) {
    const password = isNil(pass) ? this.password : pass
    if (isNil(password)) throw new Error(`Cannot set user password. Password: ${password}`)

    const salt = bcrypt.genSaltSync(10)
    this.password = bcrypt.hashSync(password, salt)
  }
  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password.trim(), this.password)
  }
  User.prototype.getToken = function () {
    const expirationTime = parseInt(CONFIG.expires, 10)
    return jwt.sign({ id: this.id, username: this.username }, CONFIG.secret, { expiresIn: expirationTime })
  }
  User.associate = function (models) {
    User.hasOne(models.resetPassword)
    User.belongsTo(models.role)
  }
  return User
}
