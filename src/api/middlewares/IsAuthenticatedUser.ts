import { ApiError } from '@shared/errors/ApiError'
import { NextFunction, Request, Response } from 'express'
import { Secret, verify } from 'jsonwebtoken'
import authConfig from '@config/auth'

type JwtPayloadProps = {
  sub: string
}

export const isAuthenticated = (request: Request, response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization
  if (!authHeader) {
    throw new ApiError('Failed to verify access token', 401)
  }
  const token = authHeader.replace('Bearer ', '')
  try {
    const decodedToken = verify(token, authConfig.jwt.secret as Secret)
    const { sub } = decodedToken as JwtPayloadProps
    request.user = { id: sub }
    return next()
  } catch {
    throw new ApiError('Invalid authentication token', 401)
  }
}
