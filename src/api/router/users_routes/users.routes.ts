import { Joi, Segments, celebrate } from 'celebrate'
import { Router } from 'express'
import { CreateUserController } from 'src/api/controllers/users_controller/CreateUserController'
import { container } from 'tsyringe'

const usersRouter = Router()

const createUserController = container.resolve(CreateUserController)

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

export { usersRouter }
