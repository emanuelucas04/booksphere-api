import pino from 'pino'

const logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      levelFirst: true,
      translateTime: 'dd-mm-yyyy HH:MM:ss',
    },
  },
})

export default logger
