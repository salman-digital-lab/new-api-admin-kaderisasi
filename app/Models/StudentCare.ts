import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './PublicUser'
import Counselor from './User'

export default class StudentCare extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public problem_owner: string

  @column()
  public problem_owner_name: string

  @column()
  public problem_category: string

  @column()
  public problem_category_desk: string

  @column()
  public technical_handling: string

  @column()
  public status_handling: string

  @column()
  public desk_handling: string

  @column()
  public counselor_gender: string

  @column()
  public id_counselor: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @hasOne(() => Counselor)
  public counselor: HasOne<typeof Counselor>
}
