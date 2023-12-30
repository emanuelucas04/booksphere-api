import { CreateUserController } from 'src/api/controllers/users_controller/CreateUserController'
import { IUsersRepository } from 'src/core/repository/users_repository/IUsersRepository'
import { UsersRepository } from 'src/core/repository/users_repository/UsersRepository'
import { container } from 'tsyringe'

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository)
container.registerSingleton('CreateUserController', CreateUserController)
