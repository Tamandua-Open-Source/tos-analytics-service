class GetUserActionsByActionIdBetweenUseCase {
  constructor({ userActionRepository }) {
    this.userActionRepository = userActionRepository
  }

  async execute({ actionId, startDate, endDate }) {
    return await this.userActionRepository.getUserActionsByActionIdBetween(
      actionId,
      startDate,
      endDate
    )
  }
}

export default GetUserActionsByActionIdBetweenUseCase
