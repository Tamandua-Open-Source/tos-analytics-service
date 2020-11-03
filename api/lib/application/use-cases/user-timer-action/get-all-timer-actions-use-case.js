class GetAllTimerActionsUseCase {
  constructor({ userTimerActionRepository }) {
    this.userTimerActionRepository = userTimerActionRepository
  }

  async execute() {
    return await this.userTimerActionRepository.getAllTimerActions()
  }
}

export default GetAllTimerActionsUseCase
