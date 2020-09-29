import { UnimplementedError } from '../../core/errors'

class IAnalyticsRepository {
  getAllUserActions() {
    throw new UnimplementedError()
  }

  getUserActionsByUserId(_userId) {
    throw new UnimplementedError()
  }

  getUserActionsByActionId(_actionId) {
    throw new UnimplementedError()
  }

  addUserAction(_userId, _actionId) {
    throw new UnimplementedError()
  }
}

export default IAnalyticsRepository
