import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import PublicUser from './PublicUser'
import AdminUser from './AdminUser'

export default class StudentCare extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @belongsTo(() => PublicUser, {
    foreignKey: 'user_id',
  })
  public publicUser: BelongsTo<typeof PublicUser>

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

  @belongsTo(() => AdminUser, {
    foreignKey: 'id_counselor',
  })
  public adminUser: BelongsTo<typeof AdminUser>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
