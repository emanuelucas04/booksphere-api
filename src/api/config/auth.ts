import dotenv from 'dotenv'
dotenv.config({ path: './src/.env' })

export default {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
}
