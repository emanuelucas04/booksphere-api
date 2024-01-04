import { Joi, Segments, celebrate } from 'celebrate'
import { Router } from 'express'
import { CreateSignInController } from 'src/api/controllers/users_controller/CreateSignInController'
import { CreateUserController } from 'src/api/controllers/users_controller/CreateUserController'
import { ListUsersController } from 'src/api/controllers/users_controller/ListUsersController'
import { container } from 'tsyringe'

const usersRouter = Router()

const createUserController = container.resolve(CreateUserController)
const listUsersController = container.resolve(ListUsersController)
const createSignInController = container.resolve(CreateSignInController)

usersRouter.post(
  '/create',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  (request, response) => {
    return createUserController.handler(request, response)
  },
)

usersRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      page: Joi.number(),
      limit: Joi.number(),
    },
  }),
  (request, response) => {
    return listUsersController.handler(request, response)
  },
)

usersRouter.post(
  '/signin',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  (request, response) => {
    return createSignInController.handler(request, response)
  },
)

export { usersRouter }
