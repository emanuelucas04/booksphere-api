import { IUsersRepository } from 'src/core/repository/users_repository/IUsersRepository'
import { container } from 'tsyringe'

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository)
container.registerSingleton('CreateUserController', CreateUserController)
