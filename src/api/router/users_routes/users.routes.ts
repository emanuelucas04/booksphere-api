import { Router } from 'express'

const usersRouter = Router()

usersRouter.get('/', (request, response) => {
  response.status(200).json({ message: 'Hello World' })
})

export { usersRouter }
