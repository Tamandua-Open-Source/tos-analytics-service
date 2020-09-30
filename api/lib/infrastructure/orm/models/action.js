'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Action extends Model {
    static associate(models) {
      Action.hasOne(models.UserAction)
    }
  }
  Action.init(
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
      modelName: 'Action',
    }
  )
  return Action
}
