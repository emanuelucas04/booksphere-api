import { instanceToInstance } from 'class-transformer'
import { Request, Response } from 'express'
import { ListUsersService } from 'src/core/services/users_service/ListUsersService'
import { container } from 'tsyringe'

export class ListUsersController {
  async handler(request: Request, response: Response): Promise<Response> {
    const listUsersService = container.resolve(ListUsersService)

    const page =
      request.query.page && Number(request.query.page) > 0 ? Number(request.query.page) : 1

    const limit =
      request.query.limit && Number(request.query.limit) > 0 ? Number(request.query.limit) : 15

    const users = await listUsersService.execute({ page, limit })

    return response.json(instanceToInstance(users))
  }
}
