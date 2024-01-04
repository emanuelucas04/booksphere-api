import { instanceToInstance } from 'class-transformer'
import { Request, Response } from 'express'
import { CreateUserService } from 'src/core/services/users_service/CreateUserService'
import { container } from 'tsyringe'

export class CreateUserController {
  async handler(request: Request, response: Response): Promise<Response> {
    const createUserService = container.resolve(CreateUserService)
    const { name, email, password } = request.body

    const user = await createUserService.execute({ name, email, password })

    return response.status(201).json(instanceToInstance(user))
  }
}
