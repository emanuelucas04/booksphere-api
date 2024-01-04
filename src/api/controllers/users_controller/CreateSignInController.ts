import { instanceToInstance } from 'class-transformer'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateSignInService } from 'src/core/services/users_service/CreateSignInService'

export class CreateSignInController {
  async handler(request: Request, response: Response): Promise<Response> {
    const createLoginService = container.resolve(CreateSignInService)
    const { email, password } = request.body
    const { user, token } = await createLoginService.execute({
      email,
      password,
    })

    return response.status(201).json(
      instanceToInstance({
        user,
        token,
      }),
    )
  }
}
