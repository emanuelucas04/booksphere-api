import {
  IUsersRepository,
  UsersPaginateProperties,
} from 'src/core/repository/users_repository/IUsersRepository'
import { inject, injectable } from 'tsyringe'

type ListUsersParams = {
  page: number
  limit: number
}

@injectable()
export class ListUsersService {
  constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) {}

  async execute({ page, limit }: ListUsersParams): Promise<UsersPaginateProperties> {
    const take = limit

    const skip = (Number(page) - 1) * take

    return this.usersRepository.findAll({ page, skip, take })
  }
}
