import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './PublicUser'
import Counselor from './User'

export default class StudentCare extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @belongsTo(() => User, {
    foreignKey: 'user_id',
  })
  public user: BelongsTo<typeof User>

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
  public id_counselor: number | null = null

  @belongsTo(() => Counselor, {
    foreignKey: 'id_counselor',
  })
  public counselor: BelongsTo<typeof Counselor>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
