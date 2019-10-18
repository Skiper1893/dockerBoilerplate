'use strict'
module.exports = (sequelize, DataTypes) => {
  const resetPassword = sequelize.define('resetPassword', {
    token: DataTypes.STRING,
    expires: DataTypes.DATE,
  }, {
    timestamps: false,
  })
  resetPassword.associate = function (models) {
    resetPassword.belongsTo(models.user)
  }
  return resetPassword
}
