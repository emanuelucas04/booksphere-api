import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes'
import { ApiError } from '@shared/errors/ApiError'
import logger from '@shared/logger'
import pinoHttp from 'pino-http'

const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())
app.use(pinoHttp({ logger }))
app.use(routes)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof ApiError) {
    request.log.error(error)
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    })
  }

  request.log.error(error)
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  })
})

app.listen(port, () => {
  logger.info(`Server is running on port ${port}!!`)
})
