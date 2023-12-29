import 'dotenv/config'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'

const port = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())

app.listen(port, () => {
  console.log(`Server is running on port ${port}!!`)
})
