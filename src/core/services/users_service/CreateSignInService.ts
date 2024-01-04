import { ApiError } from '@shared/errors/ApiError'
import { User } from '@users/User'
import { compare } from 'bcryptjs'
import jwtConfig from '@config/auth'
import { sign } from 'jsonwebtoken'
import { IUsersRepository } from 'src/core/repository/users_repository/IUsersRepository'
import { inject, injectable } from 'tsyringe'

type CreateLoginDTO = {
  email: string
  password: string
}

type IResponse = {
  user: User
  token: string
}

@injectable()
export class CreateSignInService {
  constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) {}

  async execute({ email, password }: CreateLoginDTO): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)
    if (!user) {
      throw new ApiError('Incorrect email/password combination', 401)
    }

    const passwordConfirmed = await compare(password, user.password)
    if (!passwordConfirmed) {
      throw new ApiError('Incorrect email/password combination', 401)
    }

    const token = sign({}, jwtConfig.jwt.secret, {
      subject: user.id,
      expiresIn: jwtConfig.jwt.expiresIn,
    })

    return {
      user,
      token,
    }
  }
}
