import { Repository } from 'typeorm'
import { CreateUserDTO, IUsersRepository, UsersPaginateProperties } from './IUsersRepository'
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

  async save(user: User): Promise<User> {
    return this.repository.save(user)
  }

  async deleteUser(user: User): Promise<void> {
    await this.repository.remove(user)
  }

  async findAll({ page, skip, take }): Promise<UsersPaginateProperties> {
    const [users, count] = await this.repository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount()

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: users,
    }

    return result
  }

  async findById(id: string): Promise<User | null> {
    return this.repository.findOneBy({ id })
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.repository.findOneBy({ email })
  }
}
