import { User } from '@users/User'
import { hash } from 'bcryptjs'
import { IUsersRepository } from 'src/core/repository/users_repository/IUsersRepository'
import { inject, injectable } from 'tsyringe'

type CreateUserDTO = {
  name: string
  email: string
  password: string
}

@injectable()
export class CreateUserService {
  constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) {}

  async execute({ name, email, password }: CreateUserDTO): Promise<User> {
    const hashedPassword = await hash(password, 10)

    const user = this.usersRepository.createUser({ name, email, password: hashedPassword })

    return user
  }
}
