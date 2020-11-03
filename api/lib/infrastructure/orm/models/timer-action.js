'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class TimerAction extends Model {
    static associate(models) {
      TimerAction.hasOne(models.UserTimerAction)
    }
  }
  TimerAction.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
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
      modelName: 'TimerAction',
    }
  )
  return TimerAction
}
