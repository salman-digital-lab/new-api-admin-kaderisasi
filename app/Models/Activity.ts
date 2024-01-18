import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { TestContext } from '@japa/runner'

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
  public begin_date: DateTime

  @column.dateTime()
  public end_date: DateTime

  @column.dateTime()
  public register_begin_date: DateTime

  @column.dateTime()
  public register_end_date: DateTime

  @column()
  public status: string

  @column()
  public minimum_role_id: number

  @column()
  public maximum_role_id: number

  @column()
  public category_id: number

  @column()
  public form_data: string

  @column()
  public is_published: boolean

  @column()
  public is_deleted: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
