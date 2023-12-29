import { Router } from 'express'
import { usersRouter } from '@users/http/routes/users.routes'

const routes = Router()

routes.get('/', (request, response) => {
  response.json({ message: 'Hello World' })
})

routes.use('/users', usersRouter)

export { routes }
