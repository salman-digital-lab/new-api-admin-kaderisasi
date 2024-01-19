import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Activity extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public slug: string

  @column()
  public description: string

  @column.dateTime()
  public beginDate: DateTime

  @column.dateTime()
  public endDate: DateTime

  @column.dateTime()
  public registerBeginDate: DateTime

  @column.dateTime()
  public registerEndDate: DateTime

  @column()
  public status: string

  @column()
  public minimumRoleId: number

  @column()
  public maximumRoleId: number

  @column()
  public categoryId: number

  @column()
  public formData: string

  @column()
  public isPublished: boolean

  @column()
  public isDeleted: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
