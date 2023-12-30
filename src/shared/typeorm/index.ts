import { DataSource } from 'typeorm'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './src/booksphere.db',
  entities: [],
  migrations: [],
})
