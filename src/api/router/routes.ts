import { Joi, Segments, celebrate } from 'celebrate'
import { Router } from 'express'
import { CreateSignInController } from 'src/api/controllers/resources_controller/CreateSignInController'
import { usersRouter } from 'src/api/router/users_routes/users.routes'
import { container } from 'tsyringe'

const routes = Router()

const createSignInController = container.resolve(CreateSignInController)

routes.post(
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

routes.use('/users', usersRouter)

export { routes }
