import { CreateSignInController } from 'src/api/controllers/users_controller/CreateSignInController'
import { CreateUserController } from 'src/api/controllers/users_controller/CreateUserController'
import { ListUsersController } from 'src/api/controllers/users_controller/ListUsersController'
import { IUsersRepository } from 'src/core/repository/users_repository/IUsersRepository'
import { UsersRepository } from 'src/core/repository/users_repository/UsersRepository'
import { container } from 'tsyringe'

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository)
container.registerSingleton('CreateUserController', CreateUserController)
container.registerSingleton('ListUsersController', ListUsersController)
container.registerSingleton('CreateSignInController', CreateSignInController)
