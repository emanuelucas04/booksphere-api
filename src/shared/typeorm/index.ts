import { DataSource } from 'typeorm'
import { CreateUsersTable1703947200697 } from './migrations/1703947200697-CreateUsersTable'
import { User } from '@users/User'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './src/booksphere.db',
  entities: [User],
  migrations: [CreateUsersTable1703947200697],
})
