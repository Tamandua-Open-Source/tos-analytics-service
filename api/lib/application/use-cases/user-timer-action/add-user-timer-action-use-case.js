class AddUserTimerActionUseCase {
  constructor({ userTimerActionRepository }) {
    this.userTimerActionRepository = userTimerActionRepository
  }

  async execute(userId, timerActionId) {
    return await this.userTimerActionRepository.addUserTimerAction(
      userId,
      timerActionId
    )
  }
}

export default AddUserTimerActionUseCase
