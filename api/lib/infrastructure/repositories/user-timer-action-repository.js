import ClientError from '../../interfaces/core/client-error'
import ServerError from '../../interfaces/core/server-error'
import db from '../orm/models'
import { Op } from 'sequelize'

class UserTimerActionRepository {
  async getAllTimerActions() {
    return await db.TimerAction.findAll({
      attributes: ['id', 'name'],
    })
  }

  async getUserTimerActionsByUserId(userId) {
    return await db.UserTimerAction.findAll({
      where: {
        UserId: userId,
      },
      attributes: ['UserId', 'createdAt'],
      include: [
        {
          model: db.TimerAction,
          attributes: ['id', 'name'],
        },
      ],
    })
  }

  async getUserTimerActionsByUserIdBetween(userId, startDate, endDate) {
    return await db.UserTimerAction.findAll({
      where: {
        UserId: userId,
        createdAt: {
          [Op.lte]: endDate ?? new Date('40000-01-01Z00:00:00:000'),
          [Op.gte]: startDate ?? new Date('1970-01-01Z00:00:00:000'),
        },
      },
      attributes: ['UserId', 'createdAt'],
      include: [
        {
          model: db.TimerAction,
          attributes: ['id', 'name'],
        },
      ],
    })
  }

  async addUserTimerAction(userId, timerActionId) {
    const timerAction = await db.TimerAction.findOne({
      where: {
        id: timerActionId,
      },
    })
    if (!timerAction) throw ClientError.notFound('Timer Action Not Found')

    const action = await db.UserTimerAction.create({
      UserId: userId,
      TimerActionId: timerActionId,
      createdAt: new Date(),
      modifiedAt: new Date(),
    })
    if (!action) throw ServerError.internal()

    return await db.UserTimerAction.findOne({
      where: {
        UserId: userId,
        TimerActionId: timerActionId,
        createdAt: action.createdAt,
      },
      attributes: ['UserId', 'createdAt'],
      include: [
        {
          model: db.TimerAction,
          attributes: ['id', 'name'],
        },
      ],
    })
  }
}

export default UserTimerActionRepository
