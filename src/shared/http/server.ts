import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes'
import { ApiError } from '@shared/errors/ApiError'

const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())

app.use(routes)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof ApiError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    })
  }

  console.log(error)

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}!!`)
})
