class AddUserActionUseCase {
  constructor({ userActionRepository }) {
    this.userActionRepository = userActionRepository
  }

  async execute(userId, actionId, latitude, longitude) {
    return await this.userActionRepository.addUserAction(
      userId,
      actionId,
      latitude,
      longitude
    )
  }
}

export default AddUserActionUseCase
