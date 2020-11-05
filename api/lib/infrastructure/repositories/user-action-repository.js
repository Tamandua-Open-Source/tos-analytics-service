import ClientError from '../../interfaces/core/client-error'
import ServerError from '../../interfaces/core/server-error'
import db from '../orm/models'
import { Op } from 'sequelize'

class UserActionRepository {
  async getAllActions() {
    return await db.Action.findAll({
      attributes: ['id', 'name'],
    })
  }

  async getUserActionsByActionIdBetween(actionId, startDate, endDate) {
    return await db.UserAction.findAll({
      where: {
        ActionId: actionId,
        createdAt: {
          [Op.lte]: endDate ?? new Date('40000-01-01Z00:00:00:000'),
          [Op.gte]: startDate ?? new Date('1970-01-01Z00:00:00:000'),
        },
      },
      attributes: ['UserId', 'latitude', 'longitude', 'createdAt'],
      include: [
        {
          model: db.Action,
          attributes: ['id', 'name'],
        },
      ],
    })
  }

  async getUserActionsByUserId(userId) {
    return await db.UserAction.findAll({
      where: {
        UserId: userId,
      },
      attributes: ['UserId', 'latitude', 'longitude', 'createdAt'],
      include: [
        {
          model: db.Action,
          attributes: ['id', 'name'],
        },
      ],
    })
  }

  async addUserAction(userId, actionId, latitude, longitude) {
    const action = await db.Action.findOne({
      where: {
        id: actionId,
      },
    })
    if (!action) throw ClientError.notFound('Action Not Found')

    const userAction = await db.UserAction.create({
      UserId: userId,
      ActionId: actionId,
      latitude: latitude,
      longitude: longitude,
      createdAt: new Date(),
      modifiedAt: new Date(),
    })
    if (!userAction) throw ServerError.internal()

    return await db.UserAction.findOne({
      where: {
        UserId: userId,
        ActionId: actionId,
        createdAt: userAction.createdAt,
      },
      attributes: ['UserId', 'latitude', 'longitude', 'createdAt'],
      include: [
        {
          model: db.Action,
          attributes: ['id', 'name'],
        },
      ],
    })
  }
}

export default UserActionRepository
