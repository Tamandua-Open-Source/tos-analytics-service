class GetUserActionsByUserIdUseCase {
  constructor({ userActionRepository }) {
    this.userActionRepository = userActionRepository
  }

  async execute(userId) {
    return await this.userActionRepository.getUserActionsByUserId(userId)
  }
}

export default GetUserActionsByUserIdUseCase
