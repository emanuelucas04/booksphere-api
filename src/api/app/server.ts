import dotenv from 'dotenv'
import 'reflect-metadata'
import logger from '@utils/logger'
import { app } from './app'
import { dataSource } from 'src/shared/typeorm'

dotenv.config({ path: './src/.env' })
const port = Number(process.env.PORT)

dataSource.initialize().then(() => {
  app.listen(port, () => {
    logger.info(`Server is running on port ${port}!!`)
  })
})
