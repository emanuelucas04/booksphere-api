import { Router } from 'express'
import { usersRouter } from '@users/http/routes/users.routes'

const routes = Router()

/**
 * @openapi
 * /:
 * get:
 *    description: Rota para retornar um hello world.
 *    responses:
 *      200:
 *        description: Retorna um hello world.
 *
 *
 *
 */
routes.get('/', (request, response) => {
  response.json({ message: 'Hello World' })
})

routes.use('/users', usersRouter)

export { routes }
