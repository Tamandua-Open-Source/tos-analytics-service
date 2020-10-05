import { UnimplementedError } from '../../core/errors'

class IAnalyticsRepository {
  getAllUserActions() {
    throw new UnimplementedError()
  }

  getUserActions(_userId) {
    throw new UnimplementedError()
  }

  addUserAction(_userId, _actionId) {
    throw new UnimplementedError()
  }
}

export default IAnalyticsRepository
