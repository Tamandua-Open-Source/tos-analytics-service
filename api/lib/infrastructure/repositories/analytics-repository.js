import db from '../orm/models'
import IAnalyticsRepository from '../../application/repository-interfaces/i-analytics-repository'
import { Op } from 'sequelize'

class AnalyticsRepository extends IAnalyticsRepository {
  async getAllUserActions() {
    return await db.UserAction.findAll({
      attributes: ['UserId', 'createdAt'],
      include: [
        {
          model: db.Action,
          attributes: ['id', 'name'],
        },
      ],
    })
  }

  async getUserActions(userId) {
    return await db.UserAction.findAll({
      where: {
        UserId: userId,
      },
      attributes: ['UserId', 'createdAt'],
      include: [
        {
          model: db.Action,
          attributes: ['id', 'name'],
        },
      ],
    })
  }

  async getUserActionsBetween(userId, startDate, endDate) {
    return await db.UserAction.findAll({
      where: {
        UserId: userId,
        createdAt: {
          [Op.between]: [startDate, endDate],
        },
      },
      attributes: ['UserId', 'createdAt'],
      include: [
        {
          model: db.Action,
          attributes: ['id', 'name'],
        },
      ],
    })
  }

  async addUserAction(userId, actionId) {
    const action = await db.UserAction.create({
      UserId: userId,
      ActionId: actionId,
      createdAt: new Date(),
      modifiedAt: new Date(),
    })

    if (!action) {
      return null
    }

    return await db.UserAction.findOne({
      where: {
        UserId: userId,
        ActionId: actionId,
        createdAt: action.createdAt,
      },
      attributes: ['UserId', 'createdAt'],
      include: [
        {
          model: db.Action,
          attributes: ['id', 'name'],
        },
      ],
    })
  }
}

export default AnalyticsRepository
