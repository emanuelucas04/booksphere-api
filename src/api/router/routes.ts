import { Router } from 'express'
import { usersRouter } from 'src/api/router/users_routes/users.routes'

const routes = Router()

routes.use('/users', usersRouter)

export { routes }
