import { User } from '@users/User'

export type CreateUserDTO = {
  name: string
  email: string
  password: string
}

export type PaginateParams = {
  page: number
  skip: number
  take: number
}

export type UsersPaginateProperties = {
  perPage: number
  total: number
  currentPage: number
  data: User[]
}

export interface IUsersRepository {
  createUser({ name, email, password }: CreateUserDTO): Promise<User>
  deleteUser(user: User): Promise<void>
}
