class GetUserTimerActionsByUserIdUseCase {
  constructor({ userTimerActionRepository }) {
    this.userTimerActionRepository = userTimerActionRepository
  }

  async execute(userId) {
    return await this.userTimerActionRepository.getUserTimerActionsByUserId(
      userId
    )
  }
}

export default GetUserTimerActionsByUserIdUseCase
