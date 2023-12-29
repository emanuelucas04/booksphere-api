import 'dotenv/config'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes'

const port = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}!!`)
})
