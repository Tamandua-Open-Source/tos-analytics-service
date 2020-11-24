class GetAllActionsUseCase {
  constructor({ userActionRepository }) {
    this.userActionRepository = userActionRepository
  }

  async execute() {
    return await this.userActionRepository.getAllActions()
  }
}

export default GetAllActionsUseCase
