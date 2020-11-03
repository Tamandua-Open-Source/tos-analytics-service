'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class UserTimerAction extends Model {
    static associate(models) {
      UserTimerAction.belongsTo(models.TimerAction)
    }
  }
  UserTimerAction.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      UserId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      TimerActionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'UserTimerAction',
    }
  )
  return UserTimerAction
}
