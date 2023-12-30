import { Repository } from 'typeorm'
import { CreateUserDTO, IUsersRepository } from './IUsersRepository'
import { User } from '@users/User'
import { dataSource } from 'src/shared/typeorm'

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = dataSource.getRepository(User)
  }

  async createUser({ name, email, password }: CreateUserDTO): Promise<User> {
    const user = this.repository.create({ name, email, password })

    return this.repository.save(user)
  }

  async deleteUser(user: User): Promise<void> {
    await this.repository.remove(user)
  }
}
